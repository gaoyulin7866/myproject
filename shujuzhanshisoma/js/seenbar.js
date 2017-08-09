var myChart = echarts.init(document.getElementById('seen'));
var VersionCharts = echarts.init(document.getElementById('version'));
myChart.showLoading();
var tmp_timer;
begin();
tmp_timer = setInterval(function () {
    begin();
}, 600000);
function begin() {
    $.get('https://soma.ihangmei.com/soma/api/analytics/train/historic', function (data) {
        var DataAlive = [];
        var DataSeen = [];
        var DataName = [];
        var mewDate = new Date;
        var mewDateYear = String(mewDate.getFullYear());
        var mewDateMonth = String((mewDate.getMonth()+1));
        var mewDateDay = String(mewDate.getDate()-1);

        if(mewDateMonth.length < 2){
            mewDateMonth = '0' + mewDateMonth;
        };
        if(mewDateDay.length < 2){
            mewDateDay = '0' + mewDateDay;
        };

        var nowDate = parseInt(mewDateYear + mewDateMonth + mewDateDay);
        for(var name in data.data)
        {
            var names = parseInt(name.slice(0, 10).replace("T"," ").split("-").join(""));
            if( names >= nowDate ){
                var str2 = name.slice(0, 19).replace("T"," ").split("-").join("/");
                DataName.push(str2);
                DataAlive.push(data.data[name].Alive);
                DataSeen.push(data.data[name].Seen);
            }
        };
        
        myChart.hideLoading();
        option = {
            backgroundColor: '#1b1b1b', 
            title:{
                show:true,
                subtext:'Seen：所有被扫描过的设备     Alive：所有上报过状态的设备',
                top:'-6%',
                left:'3%',
                subtextStyle:{
                    color:'#fff',
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    animation: false,
                    type: 'shadow',
                    label: {
                        show: true
                    }
                },
                transitionDuration:0,
            },
            calculable : true,
            legend: {
                data:['Seen 2017','Alive 2017'],
                itemGap: 5,
                textStyle: {
                    color: '#fff'
                },
                top:8,
                right:20,
            },
            grid: {
                show:true,
                top: '15%',
                left: '4%',
                right: '4%',
                height:240,
                containLabel: true
            },
            xAxis: [
                {
                    show :true,
                    type :'category',
                    data :DataName,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type : 'value',
                    boundaryGap: [0, '200%'],
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        },
                    }
                }
            ],
            series : [
                {
                    name: 'Seen 2017',
                    type: 'line',
                    data: DataSeen,
                    itemStyle : {  
                        normal : {  
                            color:'#FF0000'
                        }  
                    },
                },
                {
                    name: 'Alive 2017',
                    type: 'line',
                    data: DataAlive,
                    itemStyle : {  
                        normal : {  
                            color:'#00FF00'
                        }  
                    },
                }
            ]
        };

        myChart.setOption(option);

    });
     $.get('https://soma.ihangmei.com/soma/api/ops/devices/version', function (data) {
        var title =[],Data = [];
        var disk =[],disk_data =[];
        var heartbeat =[],heartbeat_data =[];
        var tiger =[],tiger_data =[];

        for (var name in data.data.disk){
            title.push("D" + ' : ' + name);
            Data.push(data.data.disk[name].n)
        }
        for (var name in data.data.heartbeat){
            title.push("H" + ' : ' + name);
            Data.push(data.data.heartbeat[name].n)
        }
        for (var name in data.data.tiger){
            title.push("T" + ' : ' + name);
            Data.push(data.data.tiger[name].n)
        }  
        Versionoption = {
            backgroundColor: '#1b1b1b',
            title:{
                show:true,
                text:'All latest versions reported by the Ops scrips',
                left:'3%',
                textStyle:{
                    fontWeight:'normal',
                    color:'#fff',
                }
            },
            grid:{
                show:true,
                top:35,
                left:'3%',
                height:240,
                containLabel: true
            },
            yAxis: {
                data: title,
                silent: false,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            xAxis: {
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle:{
                normal:{
                    barBorderRadius: 20,
                    color:new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF0000'
                    }, {
                        offset: 1,
                        color: '#00CC00'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20,
                },
                emphasis:{
                    color:'#FF0000',
                    shadowBlur:10,
                    shadowColor:'#CD5C5C',
                    shadowOffsetX:0,
                    shadowOffsetY:0,
                }
            },
            series: [{
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            textStyle:{
                                color:'#fff',
                            },
                        }
                    },
                    data: Data
                }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        VersionCharts.setOption(Versionoption,true);
    });

}


    
