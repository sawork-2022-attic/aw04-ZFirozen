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
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1615",
        "ok": "1615",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "463",
        "ok": "463",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "percentiles1": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles2": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1329",
        "ok": "1329",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1536",
        "ok": "1536",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 154,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "66.667",
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
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1615",
        "ok": "1615",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "percentiles1": {
        "total": "771",
        "ok": "771",
        "ko": "-"
    },
    "percentiles2": {
        "total": "996",
        "ok": "996",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1532",
        "ok": "1532",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1539",
        "ok": "1539",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 54,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 33,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 13
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
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "150",
        "ok": "150",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "percentiles1": {
        "total": "174",
        "ok": "174",
        "ko": "-"
    },
    "percentiles2": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles3": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles4": {
        "total": "381",
        "ok": "381",
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
        "total": "33.333",
        "ok": "33.333",
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
