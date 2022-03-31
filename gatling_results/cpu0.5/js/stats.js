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
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3271",
        "ok": "3271",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1246",
        "ok": "1246",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "631",
        "ok": "631",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1188",
        "ok": "1188",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1611",
        "ok": "1611",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2477",
        "ok": "2477",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3021",
        "ok": "3021",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 47,
    "percentage": 24
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 93,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3271",
        "ok": "3271",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1398",
        "ok": "1398",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "725",
        "ok": "725",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1310",
        "ok": "1310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1731",
        "ok": "1731",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2707",
        "ok": "2707",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3202",
        "ok": "3202",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 56,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
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
        "total": "192",
        "ok": "192",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2595",
        "ok": "2595",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1089",
        "ok": "1089",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1388",
        "ok": "1388",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1880",
        "ok": "1880",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2395",
        "ok": "2395",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 29,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 34,
    "percentage": 34
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 37,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
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
