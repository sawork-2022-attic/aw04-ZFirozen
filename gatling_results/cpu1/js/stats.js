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
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6872",
        "ok": "6872",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2331",
        "ok": "2331",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1202",
        "ok": "1202",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2160",
        "ok": "2160",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3087",
        "ok": "3087",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4306",
        "ok": "4306",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5322",
        "ok": "5322",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 167,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.222",
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
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6872",
        "ok": "6872",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2137",
        "ok": "2137",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1314",
        "ok": "1314",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1868",
        "ok": "1868",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2960",
        "ok": "2960",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4182",
        "ok": "4182",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5761",
        "ok": "5761",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 73,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "11.111",
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
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5287",
        "ok": "5287",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2525",
        "ok": "2525",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1044",
        "ok": "1044",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2336",
        "ok": "2336",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3177",
        "ok": "3177",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4308",
        "ok": "4308",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5283",
        "ok": "5283",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 94,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "11.111",
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
