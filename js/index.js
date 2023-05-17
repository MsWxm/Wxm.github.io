        //柱状图1 获取DOM操作
        (function() {
            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".bar .chart"));
            //2.指定配置项和数据 
            option = {
                tooltip: {

                    trigger: "item",
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    },
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(255,255,255,.1)'

                        },

                    },

                },


                grid: {
                    //修改图表大小
                    top: '10px',
                    right: '0',
                    bottom: '1%',
                    left: '0',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['旅游', '游戏', '科技', '航天', '教育', '医疗', '政府'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    //修改刻度标签  相关样式
                    axisLabel: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    },
                    //不显示x坐标轴的样式
                    axisLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'value',
                    //修改刻度标签  相关样式
                    axisLabel: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    },
                    //y坐标轴的样式
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: "2",
                            type: "solid"

                        },
                        //y轴分割线的颜色
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)"
                            }
                        }
                    }
                }],
                series: [{
                    name: '人员统计',
                    type: 'bar',
                    barWidth: '55%',
                    data: [10, 52, 200, 334, 390, 330, 220],
                    itemStyle: {
                        //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
                        emphasis: {
                            barBorderRadius: 30
                        },

                        normal: {
                            //柱形图圆角，初始化效果
                            barBorderRadius: [5, 5, 0, 0],
                            color: '#4ad2ff'
                        },


                    }

                }]
            };
            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            })
        })();
        ///柱状图2 获取DOm操作
        (function() {
            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".bar2 .chart"));
            //此时color柱子的颜色
            var myColor = ['#4ad2ff', '#FFA500', '#f06a5b', '#7D26CD', '#00FF7F', '#FF00FF'];

            //2.指定配置项和数据 
            option = {

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }
                },
                // legend: {
                //     data: ['条', '框'],


                // },
                grid: {
                    left: '15%',
                    right: '15%',
                    bottom: '10%',
                    top: '10%',
                    //  containLabel: true
                },
                xAxis: {
                    //不显示x轴


                    show: false

                },
                yAxis: [{
                        inverse: true,
                        show: true,
                        type: 'category',
                        data: ['项目', '设备', '创意', '行政', '运营', '公关'],
                        //设置刻度标签里面文字的颜色
                        axisLabel: {
                            textStyle: {
                                color: "#fff",
                                fontSize: 12

                            }
                        },
                        //不显示y坐标轴的样式
                        axisLine: {
                            show: false
                        },

                        //不显示刻度
                        axisTick: {
                            show: false
                        }

                    },
                    //添加第二组数据
                    {
                        inverse: true,
                        data: [702, 350, 610, 793, 664, 553],
                        //设置刻度标签里面文字的颜色
                        axisLabel: {
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        },

                        //不显示y坐标轴的样式
                        axisLine: {
                            show: false
                        },
                        //不显示刻度
                        axisTick: {
                            show: false
                        }
                    }

                ],

                series: [{
                        //添加在seriesy轴的层叠样式
                        yAxisIndex: 0,
                        name: '条',
                        type: 'bar',
                        //柱子之间的距离
                        barCategoryGap: 50,
                        //柱子的宽度
                        barWidth: 14,
                        //显示柱子内部文字
                        label: {
                            show: true,
                            position: "inside",
                            //此时得柱子
                            // clolor: '#fff',
                            // {c}会自动解析为数据   data里面
                            formatter: "{c}%",

                        },
                        data: [70, 34, 60, 78, 69, 57],

                        //修改第一组柱子的圆角
                        itemStyle: {

                            normal: {

                                barBorderRadius: 30,
                                //#######此时的color能够修改柱子的颜色############
                                color: function(params) {

                                    //paramas 传进来的是柱子对象
                                    //var num = myColor.length;
                                    // return myColor[params.dataIndex % num];
                                    return myColor[params.dataIndex];
                                }

                            }
                        }
                    },
                    {
                        name: '框',
                        type: 'bar',
                        //柱子之间的距离
                        barCategoryGap: 50,
                        //柱子的宽度
                        barWidth: 15,
                        //添加层叠
                        yAxisIndex: 1,
                        data: [100, 100, 100, 100, 100, 100],

                        itemStyle: {
                            borderColor: '#4ad2ff',
                            color: 'none',
                            barBorderRadius: 15,
                            barBorderWidth: 2
                        }





                    }
                ]
            };
            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            })
        })();
        //折线图1 
        (function() {
            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".line .chart"));
            //指定配置

            var yearData = [{
                year: '2020', //年份
                data: [ // 两个数组  因为两条线
                    [12, 172, 11, 134, 90, 230, 21, 120, 72, 101, 34, 90, ],
                    [122, 12, 111, 34, 9, 30, 221, 20, 172, 11, 334, 190, ]

                ]

            }, {
                year: '2020', //年份
                data: [ // 两个数组  因为两条线

                    [122, 12, 111, 34, 9, 30, 221, 20, 172, 11, 334, 190, ],
                    [12, 172, 11, 134, 90, 230, 21, 120, 72, 101, 34, 90, ]

                ]

            }];
            option = {

                //通过这个color修改两条线的颜色
                color: ['#00f2f1', '#ed3f35'],
                // title: {
                //     text: '折线图堆叠'
                // },
                tooltip: {
                    trigger: 'axis',
                    //设置toolTip大小和样式问题
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }
                },
                legend: {
                    // data: ['新增粉丝', '新增游客'],
                    //如果series 对象有name 值 ，则 不用在 legend 中data的数据
                    textStyle: {
                        color: '#4c9bfd',
                        //这个必须加引号
                        right: '5%',
                    }

                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '20%',
                    show: true, //显示边框
                    borderColor: '#012f4a', //边框颜色
                    containLabel: true //包含刻度文字在内
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

                    //不显示y坐标轴的样式
                    axisLine: {
                        show: false
                    },

                    //不显示刻度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd',
                        fontSize: 10,
                    },
                    boundaryGap: false //去除轴内距



                },
                yAxis: {
                    type: 'value',
                    //不显示y坐标轴的样式
                    axisLine: {
                        show: false //去除y轴线
                    },

                    //不显示刻度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd', //文本颜色
                        fontSize: 10
                    },
                    //修改分割线
                    splitLine: {
                        lineStyle: {
                            color: '#012f4a' //分割线颜色
                        }
                    }


                },
                series: [{
                        //设置拐点样式
                        symbol: 'triangle',
                        //设置拐点大小
                        symbolSize: 4,
                        //开始不显示拐点  鼠标经过时显示
                        showSymbol: false,
                        //设置拐点的颜色及样式
                        name: '减少',
                        type: 'line',

                        // true 设置曲线的弧度
                        smooth: true,
                        data: yearData[0].data[0]
                    },
                    {

                        //设置拐点样式
                        symbol: 'ract',
                        //设置拐点大小
                        symbolSize: 4,
                        //开始不显示拐点  鼠标经过时显示
                        showSymbol: false,
                        //设置拐点的颜色及样式
                        name: '新增',
                        type: 'line',

                        //设置曲线的弧度
                        smooth: true,
                        data: yearData[0].data[1]
                    }
                ]
            };
            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });


            // 切换效果有问题


            //5.点击切换效果
            $('.line h2').on("click", "a", function() {
                //点击a之后  根据当前a的索引号  找到对应的
                // yearData 的相关对象
                //console.log(yearData[$(this).index()]);
                var obj = yearData[$(this).index()];
                option.series[0].data = obj.data[0];
                option.series[1].data = obj.data[1];

                //需要重新渲染
                myChart.setOption(option);


            });

        })();


        //折线图2

        (function() {
            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".line1 .chart"));
            option = {
                //通过这个color修改两条线的颜色
                color: ['#00f2f1', '#ed3f35'],
                tooltip: {
                    //鼠标悬浮阴影格式
                    trigger: 'axis',
                    //鼠标阴影样式
                    axisPointer: {
                        type: 'shadow'
                    },
                    //设置toolTip大小和样式问题
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }

                },
                legend: {
                    top: "0%",
                    // data: ['邮件营销', '联盟广告'],

                    textStyle: {
                        color: "#4c9bfd",
                        fontSize: 12
                    }
                },

                grid: {
                    left: '3%',
                    right: '5%',
                    bottom: '3%',

                    show: true, //显示边框
                    borderColor: '#012f4a', //边框颜色
                    containLabel: true //包含刻度文字在内
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                        '11', '12', '13', '14', '15', '16', '17', '18', '19',
                        '20', '21', '22', '23', '24', '25', '26', '27', '28',
                        '29', '30'
                    ],
                    axisLine: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.6)', //文本颜色
                            fontSize: 5
                        }

                    },
                    axisLabel: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.6)', //文本颜色
                            fontSize: 12
                        }

                    },
                    //修改分割线
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.1)' //分割线颜色
                        }
                    }


                }],
                yAxis: [{
                    type: 'value',
                    //不显示刻度
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        textStyle: {
                            color: 'rgba(255,255,255,0.1)', //文本颜色
                            fontSize: 12
                        }

                    },
                    axisLabel: {
                        color: 'rgba(255,255,255,0.6)', //文本颜色
                        fontSize: 12
                    },
                    //修改分割线
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,0.1)' //分割线颜色
                        }
                    }
                }],
                series: [{
                        name: '播放量',
                        type: 'line',
                        //定制单独的线条样式
                        smooth: true,
                        lineStyle: {
                            color: '#fff',
                            width: "1",
                        },

                        areaStyle: {
                            //修改填充颜色设置
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [

                                    {
                                        offset: 0,
                                        color: "rgba(1,132,213,0.6)"
                                            //渐变起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(255,132,213,0.2)"
                                            // 渐变结束颜色
                                    }
                                ],
                                false
                            ),

                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10



                        },
                        emphasis: {
                            focus: 'series'
                        },
                        //设置拐点样式
                        symbol: 'triangle',
                        //设置拐点大小
                        symbolSize: 4,
                        //开始不显示拐点  鼠标经过时显示
                        showSymbol: false,
                        //设置拐点的颜色及样式
                        itemStyle: {
                            color: "#00FFFF",
                            borderColor: "rgba(221,220,107,0.1)",
                            borderWidth: 6

                        },


                        data: [120, 18, 99, 73, 19, 130, 10, 18, 19, 123,
                            29, 30, 110, 18, 119, 23, 29, 130, 10, 18,
                            19, 23, 129, 30, 10, 148, 19, 23, 29, 30,
                        ]
                    },
                    {
                        name: '转发量',
                        type: 'line',

                        //定制单独的线条样式  曲线
                        smooth: true,
                        lineStyle: {
                            color: '#fff',
                            width: "1",
                        },

                        areaStyle: {
                            //修改填充颜色设置
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [

                                    {
                                        offset: 0,
                                        color: "rgba(0,216,135,0.6)"
                                            //渐变起始颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(0,216,135,0.2)"
                                            // 渐变结束颜色
                                    }
                                ],
                                false
                            ),

                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10



                        },

                        //设置拐点样式
                        symbol: 'rect',
                        //设置拐点大小
                        symbolSize: 4,
                        //开始不显示拐点  鼠标经过时显示
                        showSymbol: false,
                        //设置拐点的颜色及样式
                        itemStyle: {
                            color: "#90EE90",
                            borderColor: "rgba(221,220,107,0.1)",
                            borderWidth: 6

                        },
                        emphasis: {
                            // label: {
                            //     show: true,
                            //     fontSize: '12',
                            //     fontWeight: 'bold'
                            // }
                        },
                        data: [2, 8, 9, 23, 9, 7, 10, 28, 19, 3,
                            9, 30, 1, 8, 129, 2, 9, 130, 10, 8,
                            1, 23, 9, 30, 140, 8, 9, 3, 19, 30,
                        ]
                    }
                ]
            };
            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });



        })();

        //饼形图1  制作

        (function() {

            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".pie .chart"));
            //指定配置
            option = {
                color: ['#4ad2ff', '#FFA500', '#f06a5b', '#7D26CD', '#00FF7F'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a}</br>{b}：{c}({d}%)",
                    //设置toolTip大小和样式问题
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }

                },
                legend: {
                    bottom: '85%',
                    //修改小图标的大小
                    itemWidth: 10,
                    itemHight: 10,

                    // data: ['20岁以下', '20-29岁', '30-35岁', '40-45岁', '50岁以上'],

                    textStyle: {
                        color: "rgba(255, 255, 255, .5)",
                        fontSize: 10
                    }
                },

                series: [{
                    name: '年龄分布',
                    type: 'pie',
                    stack: false,
                    //设置饼形图容器位置
                    center: ["50%", "65%"],
                    //radius 可以修改饼形圆的大小   一个内圆一个外圆
                    radius: ['40%', '60%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 1,
                        fontSize: 12,
                    },

                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                        //点击后提示文字效果
                    },
                    //标签文字和标签线
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 5, name: '20岁以下' },
                        { value: 7, name: '20-29岁' },
                        { value: 2, name: '30-35岁' },
                        { value: 3, name: '40-45岁' },
                        { value: 1, name: '50岁以上' }
                    ]
                }]
            };
            //3.把配置给实例对象

            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });


        })();

        //饼形图2
        (function() {
            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".pie1 .chart"));
            //指定配置
            option = {
                // title: {
                //     text: '南丁格尔玫瑰图',
                //     subtext: '纯属虚构',
                //     left: 'center'
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                    //设置toolTip大小和样式问题
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    }
                },
                legend: {
                    itemWidth: 10,
                    itemHight: 10,


                    bottom: '0%',
                    textStyle: {
                        color: "rgba(255, 255, 255, .5)",
                        fontSize: 8
                    },
                    data: ['河南', '四川', '广东', '上海', '福建', '浙江', '云南', '北京']
                },

                //工具
                // toolbox: {
                //     show: true,
                //     feature: {
                //         mark: { show: true },
                //         dataView: { show: true, readOnly: false },
                //         restore: { show: true },
                //         saveAsImage: { show: true }
                //     }
                // },
                series: [{
                    name: '地区分布',
                    type: 'pie',
                    radius: [20, 65],
                    center: ['50%', '45%'],
                    roseType: 'radius',

                    //图形文字标签
                    label: {
                        fontSize: 10
                    },

                    //链接图形和文字的线条
                    labelLine: {
                        //length   链接图片的线
                        length: 7,
                        //length2   链接文字的线条
                        length2: 8


                        //是否曲线
                        // smooth: true,
                    },
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        { value: 30, name: '河南' },
                        { value: 28, name: '四川' },
                        { value: 26, name: '广东' },
                        { value: 24, name: '上海' },
                        { value: 22, name: '福建' },
                        { value: 20, name: '浙江' },
                        { value: 18, name: '云南' },
                        { value: 16, name: '北京' }
                    ]
                }]
            };

            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });

        })();
        //模拟飞行模块
        (function() {
            //获取DOM操作  实例化对象
            var myChart = echarts.init(document.querySelector(".map .chart"));
            //2.指定配置


            var geoCoordMap = {
                '上海': [121.4648, 31.2891],
                '东莞': [113.8953, 22.901],
                '东营': [118.7073, 37.5513],
                '中山': [113.4229, 22.478],
                '临汾': [111.4783, 36.1615],
                '临沂': [118.3118, 35.2936],
                '丹东': [124.541, 40.4242],
                '丽水': [119.5642, 28.1854],
                '乌鲁木齐': [87.9236, 43.5883],
                '佛山': [112.8955, 23.1097],
                '保定': [115.0488, 39.0948],
                '兰州': [103.5901, 36.3043],
                '包头': [110.3467, 41.4899],
                '北京': [116.4551, 40.2539],
                '北海': [109.314, 21.6211],
                '南京': [118.8062, 31.9208],
                '南宁': [108.479, 23.1152],
                '南昌': [116.0046, 28.6633],
                '南通': [121.1023, 32.1625],
                '厦门': [118.1689, 24.6478],
                '台州': [121.1353, 28.6688],
                '合肥': [117.29, 32.0581],
                '呼和浩特': [111.4124, 40.4901],
                '咸阳': [108.4131, 34.8706],
                '哈尔滨': [127.9688, 45.368],
                '唐山': [118.4766, 39.6826],
                '嘉兴': [120.9155, 30.6354],
                '大同': [113.7854, 39.8035],
                '大连': [122.2229, 39.4409],
                '天津': [117.4219, 39.4189],
                '太原': [112.3352, 37.9413],
                '威海': [121.9482, 37.1393],
                '宁波': [121.5967, 29.6466],
                '宝鸡': [107.1826, 34.3433],
                '宿迁': [118.5535, 33.7775],
                '常州': [119.4543, 31.5582],
                '广州': [113.5107, 23.2196],
                '廊坊': [116.521, 39.0509],
                '延安': [109.1052, 36.4252],
                '张家口': [115.1477, 40.8527],
                '徐州': [117.5208, 34.3268],
                '德州': [116.6858, 37.2107],
                '惠州': [114.6204, 23.1647],
                '成都': [103.9526, 30.7617],
                '扬州': [119.4653, 32.8162],
                '承德': [117.5757, 41.4075],
                '拉萨': [91.1865, 30.1465],
                '无锡': [120.3442, 31.5527],
                '日照': [119.2786, 35.5023],
                '昆明': [102.9199, 25.4663],
                '杭州': [119.5313, 29.8773],
                '枣庄': [117.323, 34.8926],
                '柳州': [109.3799, 24.9774],
                '株洲': [113.5327, 27.0319],
                '武汉': [114.3896, 30.6628],
                '汕头': [117.1692, 23.3405],
                '江门': [112.6318, 22.1484],
                '沈阳': [123.1238, 42.1216],
                '沧州': [116.8286, 38.2104],
                '河源': [114.917, 23.9722],
                '泉州': [118.3228, 25.1147],
                '泰安': [117.0264, 36.0516],
                '泰州': [120.0586, 32.5525],
                '济南': [117.1582, 36.8701],
                '济宁': [116.8286, 35.3375],
                '海口': [110.3893, 19.8516],
                '淄博': [118.0371, 36.6064],
                '淮安': [118.927, 33.4039],
                '深圳': [114.5435, 22.5439],
                '清远': [112.9175, 24.3292],
                '温州': [120.498, 27.8119],
                '渭南': [109.7864, 35.0299],
                '湖州': [119.8608, 30.7782],
                '湘潭': [112.5439, 27.7075],
                '滨州': [117.8174, 37.4963],
                '潍坊': [119.0918, 36.524],
                '烟台': [120.7397, 37.5128],
                '玉溪': [101.9312, 23.8898],
                '珠海': [113.7305, 22.1155],
                '盐城': [120.2234, 33.5577],
                '盘锦': [121.9482, 41.0449],
                '石家庄': [114.4995, 38.1006],
                '福州': [119.4543, 25.9222],
                '秦皇岛': [119.2126, 40.0232],
                '绍兴': [120.564, 29.7565],
                '聊城': [115.9167, 36.4032],
                '肇庆': [112.1265, 23.5822],
                '舟山': [122.2559, 30.2234],
                '苏州': [120.6519, 31.3989],
                '莱芜': [117.6526, 36.2714],
                '菏泽': [115.6201, 35.2057],
                '营口': [122.4316, 40.4297],
                '葫芦岛': [120.1575, 40.578],
                '衡水': [115.8838, 37.7161],
                '衢州': [118.6853, 28.8666],
                '西宁': [101.4038, 36.8207],
                '西安': [109.1162, 34.2004],
                '贵阳': [106.6992, 26.7682],
                '连云港': [119.1248, 34.552],
                '邢台': [114.8071, 37.2821],
                '邯郸': [114.4775, 36.535],
                '郑州': [113.4668, 34.6234],
                '鄂尔多斯': [108.9734, 39.2487],
                '重庆': [107.7539, 30.1904],
                '金华': [120.0037, 29.1028],
                '铜川': [109.0393, 35.1947],
                '银川': [106.3586, 38.1775],
                '镇江': [119.4763, 31.9702],
                '长春': [125.8154, 44.2584],
                '长沙': [113.0823, 28.2568],
                '长治': [112.8625, 36.4746],
                '阳泉': [113.4778, 38.0951],
                '青岛': [120.4651, 36.3373],
                '韶关': [113.7964, 24.7028]
            };

            var ZJData = [
                [{ name: '云南' }, { name: '拉萨', value: 100 }],
                [{ name: '长春' }, { name: '上海', value: 100 }],
                [{ name: '青岛' }, { name: '广州', value: 100 }],
                [{ name: '重庆' }, { name: '西宁', value: 100 }],
                [{ name: '郑州' }, { name: '银川', value: 100 }]
            ];

            var SHData = [
                [{ name: '北京' }, { name: '长春', value: 100 }],
                [{ name: '西宁' }, { name: '上海', value: 100 }],
                [{ name: '重庆' }, { name: '广州', value: 100 }],
                [{ name: '郑州' }, { name: '拉萨', value: 100 }],
                [{ name: '西宁' }, { name: '银川', value: 100 }]
            ];

            var BJData = [
                [{ name: '拉萨' }, { name: '北京', value: 100 }],
                [{ name: '银川' }, { name: '青岛', value: 100 }],
                [{ name: '银川' }, { name: '上海', value: 100 }],
                [{ name: '上海' }, { name: '郑州', value: 100 }],
                [{ name: '银川' }, { name: '重庆', value: 100 }],
            ];

            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
            //var planePath = 'arrow';
            var convertData = function(data) {

                var res = [];
                for (var i = 0; i < data.length; i++) {

                    var dataItem = data[i];

                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (fromCoord && toCoord) {
                        res.push({
                            fromName: dataItem[0].name,
                            toName: dataItem[1].name,
                            coords: [fromCoord, toCoord],
                            value: dataItem[1].value
                        });
                    }
                }
                return res;

            };

            var color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
            var series = [];
            [
                ['浙江', ZJData],
                ['上海', SHData],
                ['北京', BJData]
            ].forEach(function(item, i) {
                series.push({
                    name: item[0] + ' Top3',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: 'red', //arrow箭头的颜色
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                }, {
                    name: item[0] + ' Top3',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                }, {
                    name: item[0] + ' Top3',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function(val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i],
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
            });
            var option = {
                // backgroundColor: '#000',
                // title: {
                //     text: '人员分布图',
                //     subtext: '数据纯属虚构',
                //     left: 'center',
                //     textStyle: {
                //         color: '#fff'
                //     }
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        if (params.seriesType == "effectScatter") {
                            return "线路：" + params.data.name + "" + params.data.value[2];
                        } else if (params.seriesType == "lines") {
                            return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                        } else {
                            return params.name;
                        }
                    },
                    //设置toolTip大小和样式问题
                    position: function(p) { //其中p为当前鼠标的位置
                        return [p[0] + 10, p[1] - 10];
                    },
                    textStyle: {
                        fontSize: 15,
                    }
                },
                legend: {
                    orient: 'vertical',
                    top: 'bottom',
                    left: 'right',
                    data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
                    textStyle: {
                        color: '#fff',

                        fontSize: 20

                    },
                    selectedMode: 'multiple'
                },
                geo: {
                    map: 'china',
                    zoom: 1.2,
                    label: {
                        emphasis: {

                            color: '#fff'
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            //地图省份颜色
                            areaColor: 'rgba(20, 41, 87.0.8)',
                            borderColor: '#195BB9',
                            borderWidth: 1,
                        },
                        emphasis: {
                            show: false,
                            areaColor: '#2B91B7'
                        }
                    }
                },
                series: series
            };











            //3.把配置项给实例对象
            myChart.setOption(option);
            //4.让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function() {
                myChart.resize();
            });
        })();