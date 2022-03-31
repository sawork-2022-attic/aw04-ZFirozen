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
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "286",
        "ok": "286",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "percentiles1": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles2": {
        "total": "448",
        "ok": "448",
        "ko": "-"
    },
    "percentiles3": {
        "total": "913",
        "ok": "913",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 182,
    "percentage": 91
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 9
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
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "494",
        "ok": "494",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "percentiles1": {
        "total": "449",
        "ok": "449",
        "ko": "-"
    },
    "percentiles2": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 82,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 18,
    "percentage": 18
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
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "56",
        "ok": "56",
        "ko": "-"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "-"
    },
    "percentiles2": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles3": {
        "total": "176",
        "ok": "176",
        "ko": "-"
    },
    "percentiles4": {
        "total": "181",
        "ok": "181",
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
