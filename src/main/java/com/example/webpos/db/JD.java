package com.example.webpos.db;

import com.example.webpos.model.Cart;
import com.example.webpos.model.Product;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
//import java.util.HashMap;
import java.util.List;

@Repository
public class JD implements PosDB {


    private List<Product> products = null;

    @Override
    @Cacheable(value = "productList")
    public List<Product> getProducts() {
        try {
            if (products == null)
                products = parseJD("Java");
        } catch (IOException e) {
            products = new ArrayList<>();
        }
        return products;
    }

    @Override
    public Product getProduct(String productId) {
        for (Product p : getProducts()) {
            if (p.getId().equals(productId)) {
                return p;
            }
        }
        return null;
    }

//    public static HashMap<String, String> convertCookie(String cookie) {
//        HashMap<String, String> cookiesMap = new HashMap<String, String>();
//        String[] items = cookie.trim().split(";");
//        for (String item:items) cookiesMap.put(item.split("=")[0], item.split("=")[1]);
//        return cookiesMap;
//    }

    public static List<Product> parseJD(String keyword) throws IOException {
        //获取请求https://search.jd.com/Search?keyword=java
        String url = "https://search.jd.com/Search?keyword=" + keyword;
        //解析网页
        Document document = Jsoup.parse(new URL(url), 10000);
        // HashMap<String, String> cookie = convertCookie("__jda=76161171.1648719557732498446731.1648719558.1648719558.1648719558.1; __jdb=76161171.1.1648719557732498446731|1.1648719558; __jdc=76161171; __jdv=76161171|direct|-|none|-|1648719557733; __jdu=1648719557732498446731; areaId=12; ipLoc-djd=12-904-0-0; PCSYCityID=undefined_undefined_undefined_undefined; shshshfpb=zLCfhkDGZuqSxoSHDB31QTw%3D%3D; shshshfp=bef2a9f2caca232b5e019833fce0aace; shshshfpa=35a2f019-14e9-d44c-d8c3-e933115c5678-1561197409; shshshsID=9326a3eeea51cad8ad74026de710bef9_1_1648719558794; 3AB9D23F7A4B3C9B=PTBEZMJVIZGUJNZSHXST26VJ636HSKKE57CV4HBSV2TES3M7KHSV5LX3YOD2IP7U2GNHTD7RET5CQT5I5OCKZQLD64");
        // Document document = Jsoup.connect(url).cookie("__jda", "76161171.1648719557732498446731.1648719558.1648719558.1648719558.1").get();
        //所有js的方法都能用
        Element element = document.getElementById("J_goodsList");
        //获取所有li标签
        Elements elements = element.getElementsByTag("li");
//        System.out.println(element.html());
        List<Product> list = new ArrayList<>();

        //获取元素的内容
        for (Element el : elements
        ) {
            //关于图片特别多的网站，所有图片都是延迟加载的
            String id = el.attr("data-spu");
            String img = "https:".concat(el.getElementsByTag("img").eq(0).attr("data-lazy-img"));
            String price = el.getElementsByAttribute("data-price").text();
            String title = el.getElementsByClass("p-name").eq(0).text();
            if (title.indexOf("，") >= 0)
                title = title.substring(0, title.indexOf("，"));

            Product product = new Product(id, title, Double.parseDouble(price), img);

            list.add(product);
        }
        return list;
    }

}
