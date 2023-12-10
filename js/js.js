$(window).load(function () {
$(".loading").fadeOut();
});
$(function () {
echarts_2();
// echarts_3();
echarts_4();
echarts_5();
// echarts_6();

function echarts_2() {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("echart2"));
var data = [
    683,  234, 523, 345, 320,  
];
var titlename = [
        '南昌市',
        '东湖区' ,
        '西湖区' ,
        '青云谱区',
        '湾里区' ,

];
option = {
    grid: {
    left: "0",
    top: "0",
    right: "0",
    bottom: "0%",
    containLabel: true,
    },
    xAxis: {
    show: false,
    },
    yAxis: [
    {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
        textStyle: {
            color: "#fff",
        },
        },
    },
    {
        show: false,
        inverse: true,
        data: data,
        axisLabel: { textStyle: { color: "#fff" } },
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: { show: false },
    },
    ],
    series: [
    {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        itemStyle: {
        normal: {
            barBorderRadius: 50,
            color: "#1089E7",
        },
        },
        label: {
        normal: {
            show: true,
            position: "right",
            formatter: "{c}",
            textStyle: { color: "rgba(255,255,255,.5)" },
        },
        },
    },
    ],
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
}
function echarts_3() {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("echart3"));
option = {
    tooltip: {
    trigger: "axis",
    axisPointer: {
        lineStyle: {
        color: "#dddc6b",
        },
    },
    },
    grid: {
    left: "10",
    top: "20",
    right: "30",
    bottom: "10",
    containLabel: true,
    },

    xAxis: [
    {
        type: "category",
        boundaryGap: false,
        axisLabel: {
        textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
        },
        },
        axisLine: {
        lineStyle: {
            color: "rgba(255,255,255,.2)",
        },
        },

        data: [
        "1000m",
        "2000m",
        "3000m",
        "4000m",
        "5000m",
        "6000m",
        "7000m",
        "8000m",
        "9000m",
        "10000m",
        "11000m",
        "12000m",
        ],
    },
    {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20,
    },
    ],

    yAxis: [
    {
        type: "value",
        axisTick: { show: false },
        splitNumber: 4,
        axisLine: {
        lineStyle: {
            color: "rgba(255,255,255,.1)",
        },
        },
        axisLabel: {
        textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 16,
        },
        },

        splitLine: {
        lineStyle: {
            color: "rgba(255,255,255,.1)",
            type: "dotted",
        },
        },
    },
    ],
    series: [
    {
        name: "结算率",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
        normal: {
            color: "rgba(31, 174, 234, 1)",
            width: 2,
        },
        },
        areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
                {
                offset: 0,
                color: "rgba(31, 174, 234, 0.4)",
                },
                {
                offset: 0.8,
                color: "rgba(31, 174, 234, 0.1)",
                },
            ],
            false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        },
        itemStyle: {
        normal: {
            color: "#1f7eea",
            borderColor: "rgba(31, 174, 234, .1)",
            borderWidth: 5,
        },
        },
        data: [
        133, 256, 340, 406, 503, 609, 713, 812, 906, 1008, 1123, 1165, 1199,
        1203,
        ],
    },
    ],
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
}
function echarts_4() {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("echart4"));
var option = {
    grid: {
    left: "0",
    top: "30",
    right: "0",
    bottom: "10",
    containLabel: true,
    },
    legend: {
    top: 0,

    textStyle: {
        color: "#fff",
    },

    itemWidth: 10, // 设置宽度

    itemHeight: 10, // 设置高度
    },

    tooltip: {
    trigger: "axis",

    axisPointer: {
        // 坐标轴指示器，坐标轴触发有效

        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
    },

    xAxis: {
    type: "category",

    data: ["青山湖", "红谷滩"],

    axisTick: {
        //---坐标轴 刻度

        show: true, //---是否显示
    },

    axisLine: {
        //---坐标轴 轴线

        show: true, //---是否显示

        lineStyle: {
        color: "rgba(255,255,255,.1)",

        width: 1,

        type: "dotted",
        },
    },

    axisLabel: {
        //X轴文字

        textStyle: {
        fontSize: 12,

        color: "#fff",
        },
    },
    },

    yAxis: {
    type: "value",

    splitLine: {
        //分割线

        show: true,

        lineStyle: {
        color: "rgba(255,255,255,.1)",

        width: 1,
        type: "dotted",
        },
    },

    axisLabel: {
        //Y轴刻度值

        formatter: "{value}",

        textStyle: {
        fontSize: 12,

        color: "#fff",
        },
    },

    axisLine: {
        //---坐标轴 轴线

        show: false, //---是否显示
    },
    },

    series: [
    {
        name: "排水管线",

        type: "bar",

        data: [113, 117],

        barWidth: 10,

        barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

        itemStyle: {
        normal: {
            barBorderRadius: 50,
            color: "#446ACF",
        },
        },
    },
    {
        name: "排水设施数量",

        type: "bar",

        data: [106, 155],

        barWidth: 15, //柱图宽度

        itemStyle: {
        normal: {
            //设置颜色的渐变
            barBorderRadius: 50,
            color: "#4fb69d",
        },
        },
    },
    ],
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
}
function echarts_5() {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("echart5"));
option = {
    legend: {
    orient: "vertical",
    itemWidth: 5,
    itemHeight: 5,
    textStyle: {
        color: "#fff"
        // top: 10px;
        // left: 1000px;
        // position: absolute;
        // width: 14%;
        // height: 1%;
        // border-radius: 50px;
        // color: rgb(232, 255, 255);
        // font-size: 0.5rem;

    },
    top: "64%",
    right: 35,
    data: ["污水管线", "雨污河流管线", "雨水管线"],
    },
    color: [
    "#32c5e9",
    "#ffdb5c",
    "#ff9f7f",
    "#e7bcf3",
    "#8378ea",
    ],
    tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)",
    },

    calculable: true,
    series: [
    {
        type: "pie",
        radius: [20, 70],
        center: ["45%", "40%"],
        roseType: "area",
        data: [
        { value: 310, name: "污水管线" },
        { value: 210, name: "雨污河流管线" },
        { value: 225, name: "雨水管线" },
    
        ],
        label: {
        normal: {
            formatter: function (param) {
            return param.name + ":\n" + param.value + "\n";
            },
        },
        },
        labelLine: {
        normal: {
            length: 11,
            length2: 1,
            lineStyle: { width: 1 },
        },
        },

        itemStyle: {
        normal: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0)",
        },
        },
    },
    ],
};
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
}

});
