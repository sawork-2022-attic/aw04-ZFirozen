var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2059",
        "ok": "2059",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "598",
        "ok": "598",
        "ko": "-"
    },
    "percentiles1": {
        "total": "476",
        "ok": "476",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1226",
        "ok": "1226",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1857",
        "ok": "1857",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1956",
        "ok": "1956",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 120,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 60,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
},
contents: {
"req_request-2-93baf": {
        type: "REQUEST",
        name: "request_2",
path: "request_2",
pathFormatted: "req_request-2-93baf",
stats: {
    "name": "request_2",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2059",
        "ok": "2059",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1227",
        "ok": "1227",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1473",
        "ok": "1473",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1954",
        "ok": "1954",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1959",
        "ok": "1959",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 60,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    }
}
    },"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "590",
        "ok": "590",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles1": {
        "total": "184",
        "ok": "184",
        "ko": "-"
    },
    "percentiles2": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "percentiles3": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "percentiles4": {
        "total": "494",
        "ok": "494",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 100,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
