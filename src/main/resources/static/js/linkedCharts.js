$(function () {
    // 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init(document.getElementById('barChart'));
    var lineChart = echarts.init(document.getElementById('lineChart'));

    // 指定图表的配置项和数据
    var barOption = {
        title: {
            text: '坚果数量',
            textStyle: {
                color: '#9accff',
                fontSize: 12
            },
            top: 20
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: "{b}: {c}袋"
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#9accff'
                },
                interval:0,
                rotate:40,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(0,210,255)'
                }
            },
            data: [
                "夏威夷果",
                "松子",
                "开心果",
                "核桃仁",
                "巴旦木"
            ]
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(0,210,255)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#9accff'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: ['#00aee1']
                    },
                },
                data: [8,10,6,7,14]
            }
        ]
    };
    var lineOption = {
        legend: {
            data:['全部坚果安排'],
            textStyle: {
                color: '#9accff',
                fontSize: 12
            },
            top: 20,
            right: 30,
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            formatter: "{b}: {c}袋"
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ["周一","周二","周三","周四","周五","周六","周天"],
                axisLabel: {
                    textStyle: {
                        color: '#9accff'
                    },
                    formatter: '{value}',
                    interval: 0
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgb(0,210,255)'
                    }
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    textStyle: {
                        color: '#9accff'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgb(0,210,255)'
                    }
                },
                axisTick: {
                    show: false
                },
            }
        ],
        series : [
            {
                name: '全部坚果安排',
                type:'line',
                areaStyle: {normal: {}},
                itemStyle: {
                    normal: {
                        color: 'rgba(2,105,198,0.9)'
                    },
                },
                data:[8,7,5,6,8,5,4]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    barChart.setOption(barOption);
    lineChart.setOption(lineOption);

    var nutPlan = [
        [2,1,2,1,1,0,1],
        [2,0,1,2,1,0,2],
        [0,2,0,1,1,2,0],
        [0,2,1,0,3,1,0],
        [4,2,1,2,2,2,1]
    ];
    barChart.on('click',function (param) {
        lineOption.legend.data = [param.name + "安排"];
        lineOption.series[0].name = param.name + "安排";
        lineOption.series[0].data = nutPlan[param.dataIndex];
        lineChart.setOption(lineOption);
    });

    $('.toTotal').bind('click',function () {
        lineOption.legend.data = ["全部坚果安排"];
        lineOption.series[0].name = "全部坚果安排";
        lineOption.series[0].data = [8,7,5,6,8,5,4];
        lineChart.setOption(lineOption);
    });
});