var myChart = echarts.init(document.getElementById('seen'));
myChart.showLoading();
var tmp_timer;
begin();
tmp_timer = setInterval(function() {
    begin();
}, 600000);
function begin() {
    $.ajax({
        url: 'http://139.217.22.228:16921/dmc-api/query/trainDevOnline',
        type: 'GET',
        success: function(data) {
            var time = '';
            var total_alive = 0;
            time = moment().subtract(1, 'days').format().slice(0,10);
            $.each(data,function(i,item){
                if( item.stat_date == time){
                    total_alive = item.sum_today_online;
                }
            });
            $.get('http://soma.ihangmei.com/soma/api/analytics/train/historic', function(data) {
                var DataAlive = [];
                var DataSeen = [];
                var DataName = [];
                var seen_alive = [];
                var mewDate = new Date;
                var mewDateYear = String(mewDate.getFullYear());
                var mewDateMonth = String((mewDate.getMonth() + 1));
                var mewDateDay = String(mewDate.getDate() - 1);
                //时间 总数
                var Time = '';
                Time = moment().subtract(1, 'days').format('MMMM Do');

                if (mewDateMonth.length < 2) {
                    mewDateMonth = '0' + mewDateMonth;
                };
                if (mewDateDay.length < 2) {
                    mewDateDay = '0' + mewDateDay;
                };
                var nowDate = parseInt(mewDateYear + mewDateMonth + mewDateDay);
                for (var name in data.data) {

                    var names = parseInt(name.slice(0, 10).replace("T", " ").split("-").join(""));
                    if (names >= nowDate) {
                        var str2 = name.slice(0, 19).replace("T", " ").split("-").join("/");
                        DataName.push(str2);
                        DataAlive.push(data.data[name].Alive);
                        DataSeen.push(data.data[name].Seen);
                        seen_alive.push(data.data[name].Alive);
                        seen_alive.push(data.data[name].Seen);
                    }
                };
                var len = DataAlive.length;
                var New = [];
                for (var i = 0; i < len - 1; i++) {
                    New.push(null)
                }
                New.push(DataAlive[len - 1])
                var max_num = 0;
                var min_num = 10000;
                for (var j = 0; j < seen_alive.length; j++) {
                    if (seen_alive[j] > max_num) {
                        max_num = seen_alive[j];
                    }
                    if (seen_alive[j] < min_num) {
                        min_num = seen_alive[j];
                    }
                }
                myChart.hideLoading();
                option = {
                    backgroundColor: '#f9fafb',
                    title: {
                        show: true,
                        text: Time + ': alive:' + total_alive,
                        subtext: 'Alive：所有上报过状态的设备',
                        top: 0,
                        left: '8%',
                        itemGap: 2,
                        textAlign: 'left',
                        textStyle: {
                            color: '#1E90FF',
                        },
                        subtextStyle: {
                            color: '#000',
                        },
                        z: 4,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false,
                            type: 'shadow',
                            label: {
                                show: true
                            }
                        },
                        transitionDuration: 0,
                    },
                    calculable: true,
                    legend: {
                        data: ['Alive 2017'],
                        orient: 'vertical',
                        right: 20,
                        top: 10,
                    },
                    grid: {
                        show: true,
                        top: '15%',
                        left: '4%',
                        right: '4%',
                        height: 240,
                        containLabel: true
                    },
                    xAxis: [{
                        show: true,
                        type: 'category',
                        data: DataName,
                        axisLabel: {
                            show: true,
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        boundaryGap: [0, '200%'],
                        max: max_num + 300,
                        min: min_num - 300,
                        //scale:true,
                    }],
                    series: [{
                            name: 'Alive 2017',
                            type: 'line',
                            data: DataAlive,
                            itemStyle: {
                                normal: {
                                    color: '#1E90FF'
                                }
                            },
                        }, {
                            name: '',
                            type: 'line',
                            data: New,
                            itemStyle: {
                                normal: {
                                    color: '#1E90FF'
                                }
                            },
                            markPoint: {
                                data: [{
                                    type: 'max',
                                    name: '最大值',
                                    symbol:'pin',
                                    itemStyle: {
                                        normal: {
                                            color: "#1E90FF",
                                        },
                                    },
                                    label:{
                                        emphasis:{
                                            show:true,
                                            textStyle:{
                                                color: "#000",
                                                fontSize:17,
                                            },
                                        },
                                    },
                                }]
                            }
                        }

                    ]
                };
                myChart.setOption(option);
            });
        },
    });

}