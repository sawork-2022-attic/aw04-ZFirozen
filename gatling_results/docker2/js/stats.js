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
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1505",
        "ok": "1505",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "percentiles1": {
        "total": "289",
        "ok": "289",
        "ko": "-"
    },
    "percentiles2": {
        "total": "566",
        "ok": "566",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1502",
        "ok": "1502",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 173,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 4
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
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1505",
        "ok": "1505",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "percentiles1": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "830",
        "ok": "830",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1313",
        "ok": "1313",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1504",
        "ok": "1504",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 73,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8,
    "percentage": 8
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
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "298",
        "ok": "298",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "114",
        "ok": "114",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles1": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "percentiles2": {
        "total": "187",
        "ok": "187",
        "ko": "-"
    },
    "percentiles3": {
        "total": "293",
        "ok": "293",
        "ko": "-"
    },
    "percentiles4": {
        "total": "296",
        "ok": "296",
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
