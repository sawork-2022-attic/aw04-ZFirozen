package com.example.webpos.db;

import com.example.webpos.model.Product;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.net.URL;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class Amazon implements PosDB {


    private List<Product> products = null;

    @Override
    @Cacheable(value = "products")
    public List<Product> getProducts(int start) {
        try {
            if (products == null)
                products = parseAmazon("Java", 0, start + 50);
            else if (products.size() <= start)
                products.addAll(parseAmazon("Java", products.size(), start + 50 - products.size()));
        } catch (IOException | SQLException e) {
            e.printStackTrace();
            products = new ArrayList<>();
        }
        return products;
    }

    @Override
    public Product getProduct(String productId) {
        for (Product p : products) {
            if (p.getId().equals(productId)) {
                return p;
            }
        }
        return null;
    }

    public static List<Product> parseAmazon(String keyword, int current, int limit) throws IOException, SQLException {
        List<Product> list = new ArrayList<>();

        Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/amazondatabase", "root", "20190616");
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
            return list;
        }

        if (connection == null)
            System.out.print("connection is null!\n");

        Statement stmt = connection.createStatement();
        if (!stmt.execute(String.format("SELECT * FROM amazondatabase.%s LIMIT %d, %d;", "All_Beauty", current, limit))) {
            return list;
        }
        ResultSet resultSet = stmt.getResultSet();

        //获取元素的内容
        while (resultSet.next()) {
            String id = resultSet.getString("asin");
            String img = resultSet.getString("imageURLHighRes");
            String price = resultSet.getString("price");
            String title = resultSet.getString("title");

            Product product = new Product(id, title, Double.parseDouble(price.substring(1)), img);

            list.add(product);
        }

        try {
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

}