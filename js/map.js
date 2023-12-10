
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
var data = [
     {name: '南昌市', value: 9},
     {name: '东湖区', value: 12},
     {name: '西湖区', value: 12},
     {name: '青云谱区', value: 12},
     {name: '湾里区', value: 28},



];
var geoCoordMap = {
    '南昌市': [115.85, 28.68],
    '东湖区' :[115.9 ,28.68],
    '西湖区' :[115.87, 28.67],
    '青云谱区':[ 115.92 ,28.63],
    '湾里区' :[115.73 ,28.72],

};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
  title: {
        text: '城市排水管网',
        // subtext: '虚拟标题自行更改',
        left: 'center',
		top:'10',
        textStyle: {
            color: '#fff'
        }
    //     color: #daf9ff;
    //     font-size: 2rem;
    // text-shadow: 4px 4px 5px rgb(0, 157, 255);
    // font-weight: bold;
    },
    tooltip : {
        trigger: 'item'
    },
  
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
		zoom:1,
        itemStyle: {
            normal: {
                areaColor: 'rgba(2,37,101,.5)',
                borderColor: 'rgba(112,187,252,.5)'
            },
            emphasis: {
                areaColor: 'rgba(2,37,101,.8)'
            }
        }
    },
    series : [
        {
            name: '标题名称',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 15;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }

    ]
};
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})
