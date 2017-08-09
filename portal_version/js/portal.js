var Vm = new Vue({
    el: '#table',
    data: {
        //翻页
        current:1,
        showItem:5,
        allpage:13,
        //portal tiger heartbeat
        title: ['', '', ''],
        T_title: ['', ''],
        H_title: ['', ''],
        status: [],
        status_name:[],
        num: 2,
        counts: {},
        //bricked fault ghost
        bricked_num: [],
        fault_num: [],
        ghost_num: [],
        bricked: 1,
        fault: 1,
        ghost: 1,
        //状态
        mmaStats:{},
        mmaTitle:['Mqttproxy','Hbjar','Monitor','Cmdhandler','Tiger','Daemon'],
        status_title:[],
        mqttproxy:[],
        hbjar:[],
        monitor:[],
        cmdhandler:[],
        tiger:[],
        //刷新
        message: [
            { name: 1 }
        ]

    },
    mounted: function() {
        this.getStatus();
        this.getBricked();
        this.getFault();
        this.getGhost();
        setInterval(function() {
            Vm._data.message[0].name = Math.floor(Math.random() * 10 + 1);
        }, 300000);
    },
    watch: {
        message: {
            handler: function() {
                this.getStatus();
                this.getBricked();
                this.getFault();
                this.getGhost();
            },
            deep: true
        }
    },
    methods: {
        //排序
        // objSort: function (obj){
        //     var re = /\d{8}/;
        //     var tiger_sort = [];
        //     for(var _name in _Temp_obj){
        //         var tiger_date = re.exec(_name);
        //         tiger_sort.push({
        //             sort_num: tiger_date[0],
        //             name: _name,
        //             key: _Temp_obj[_name]
        //         });
        //     }
        //     tiger_sort.sort(function (a,b){
        //         return b.sort_num - a.sort_num;
        //     });
        // },
        unique: function(arr) {
            var hash = {};
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < arr.length; i++) {
                if (hash[arr[i]]) {
                    hash[arr[i]]++;//重复
                    arr1.push(arr[i]);
                }else{
                    hash[arr[i]] = 1;//不重复
                    arr2.push(arr[i]);
                }
            }
            return arr2;
        },
        getStatus: function() {
            $.ajax({
                type: "get",
                url: "http://10.10.10.99:7077/realtime/getBureauDevicePortalVersions",//获取数据
                dataType: "json",
                success: function(data) {
                    var _status = [];
                    var _counts = {};
                    _counts.down = 0;
                    _counts.pro = 0;
                    _counts.not = 0;
                    _counts.total = 0;
                    _counts.other = 0;
                    _counts.version1 = 0;
                    _counts.version2 = 0;
                    _counts.version3 = 0;
                    _counts.version4 = 0;
                    var Versions_Data = data;
                    $.ajax({
                        type: "get",
                        url: "http://10.10.10.99:7077/realtime/getBureauDeviceInstalled",//各路局上线总数
                        dataType: "json",
                        success: function(data) {
                            var Installed_Data = data;
                            $.ajax({
                                type: "get",
                                url: "http://10.10.10.99:7077/realtime/getMostPortalVersions?num=2",//需要展示的portal版本
                                dataType: "json",
                                success: function(data) {
                                    this.title = data;
                                    $.ajax({
                                        type: "get",
                                        url: "http://10.10.10.99:7077/realtime/getLatestPortalVersions?num=2",//需要展示的portal版本
                                        dataType: "json",
                                        success: function(data) {
                                            this.title = this.title.concat(data);
                                            this.title = (this.unique(this.title)).sort().reverse();
                                            this.num = this.title.length;
                                            $.ajax({
                                                type: "get",
                                                url: "http://10.10.10.99:7077/realtime/getBureauDeviceMmaVersions",//status_title
                                                dataType: "json",
                                                success: function(data) {
                                                    var status_data = data;
                                                    $.ajax({
                                                        type: "get",
                                                        url: "http://10.10.10.99:7077/realtime/getBureauDeviceJobStatus",//Done going Not start
                                                        dataType: "json",
                                                        success: function(data) {
                                                            // data.TEST = {
                                                            //     waiting:'-',
                                                            //     waitingFlag:'-',
                                                            //     goingFlag:'-',
                                                            //     going:'-',
                                                            //     done:'-',
                                                            // }
                                                            var index = 0;
                                                            var mqttproxy = [];
                                                            var hbjar = [];
                                                            var monitor = [];
                                                            var cmdhandler = [];
                                                            var tiger = [];
                                                            this.status_name=[];
                                                            var _Temp_obj = {};
                                                            for(var name in data){
                                                                for(var name2 in status_data[name]){
                                                                    for(var name3 in status_data[name][name2]){
                                                                        if(name2 == 'mqttproxy'){
                                                                            mqttproxy.push(name3);
                                                                        }
                                                                        if(name2 == 'hbjar'){
                                                                            hbjar.push(name3);
                                                                        }
                                                                        if(name2 == 'monitor'){
                                                                            monitor.push(name3);
                                                                        }
                                                                        if(name2 == 'cmdhandler'){
                                                                            cmdhandler.push(name3);
                                                                        }
                                                                        if(name2 == 'tiger'){
                                                                            _Temp_obj = status_data[name][name2];
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            var re = /\d{8}/;
                                                            var tiger_sort = [];
                                                            for(var _name in _Temp_obj){
                                                                var tiger_date = re.exec(_name);
                                                                tiger_sort.push({
                                                                    sort_num: tiger_date[0],
                                                                    name: _name,
                                                                    key: _Temp_obj[_name]
                                                                });
                                                            }
                                                            tiger_sort.sort(function (a,b){
                                                                return b.sort_num - a.sort_num;
                                                            });
                                                            for(var k = 0; k < tiger_sort.length; k++){
                                                                tiger.push(tiger_sort[k].name)
                                                            }

                                                            for (var name in data) {
                                                                this.status_name.push(name);
                                                                var obj = {};
                                                                var isWaiting = '';
                                                                var isGoing = '';
                                                                obj._mqtt1 = 0;
                                                                obj._mqtt2 = 0;
                                                                obj._hbjar1 = 0;
                                                                obj._hbjar2 = 0;
                                                                obj._mon1 = 0;
                                                                obj._mon2 = 0;
                                                                obj._cmd1 = 0;
                                                                obj._cmd2 = 0;
                                                                obj._tiger1 = 0;
                                                                obj._tiger2 = 0;
                                                                obj.status_other1 = 0;
                                                                obj.status_other2 = 0;
                                                                obj.status_other3 = 0;
                                                                obj.status_other4 = 0;
                                                                obj.status_other5 = 0;
                                                                
                                                                //status_title
                                                                mqttproxy = this.unique(mqttproxy.sort().reverse());
                                                                hbjar = this.unique(hbjar.sort().reverse());
                                                                monitor = this.unique(monitor.sort().reverse());
                                                                cmdhandler = this.unique(cmdhandler.sort().reverse());
                                                                tiger = this.unique(tiger);
                                                                this.mqttproxy = mqttproxy.slice(0,2);
                                                                this.hbjar = hbjar.slice(0,2);
                                                                this.monitor = monitor.slice(0,2);
                                                                this.cmdhandler = cmdhandler.slice(0,2);
                                                                this.tiger = tiger.slice(0,2);
                                                                for(var name2 in status_data[name]){
                                                                    if(name2 == 'mqttproxy'){
                                                                        for(var l = 0; l < mqttproxy.length; l++){
                                                                            if(l <= 1){
                                                                                obj._mqtt1 = status_data[name][name2][mqttproxy[0]] ? status_data[name][name2][mqttproxy[0]]:0;
                                                                                obj._mqtt2 = status_data[name][name2][mqttproxy[1]] ? status_data[name][name2][mqttproxy[1]]:0;
                                                                            }else {
                                                                                obj.status_other1 += status_data[name][name2][mqttproxy[l]] ? status_data[name][name2][mqttproxy[l]]:0;
                                                                            }
                                                                        }
                                                                    }
                                                                    if(name2 == 'hbjar'){
                                                                        for(var l = 0; l < hbjar.length; l++){
                                                                            if(l <= 1){
                                                                                obj._hbjar1 = status_data[name][name2][hbjar[0]] ? status_data[name][name2][hbjar[0]]:0;
                                                                                obj._hbjar2 = status_data[name][name2][hbjar[1]] ? status_data[name][name2][hbjar[1]]:0;
                                                                            }else {
                                                                                obj.status_other2 += status_data[name][name2][hbjar[l]] ? status_data[name][name2][hbjar[l]]:0;
                                                                            }
                                                                            
                                                                        }
                                                                    }
                                                                    if(name2 == 'monitor'){
                                                                        for(var l = 0; l < monitor.length; l++){
                                                                            if(l <= 1){
                                                                                obj._mon1 = status_data[name][name2][monitor[0]] ? status_data[name][name2][monitor[0]]:0;
                                                                                obj._mon2 = status_data[name][name2][monitor[1]] ? status_data[name][name2][monitor[1]]:0;
                                                                            }else {
                                                                                obj.status_other3 += status_data[name][name2][monitor[l]] ? status_data[name][name2][monitor[l]]:0;
                                                                            }
                                                                            
                                                                        }  
                                                                    }
                                                                    if(name2 == 'cmdhandler'){
                                                                        for(var l = 0; l < cmdhandler.length; l++){
                                                                            if(l <= 1){
                                                                                obj._cmd1 = status_data[name][name2][cmdhandler[0]] ? status_data[name][name2][cmdhandler[0]]:0;
                                                                                obj._cmd2 = status_data[name][name2][cmdhandler[1]] ? status_data[name][name2][cmdhandler[1]]:0;
                                                                            }else {
                                                                                obj.status_other4 += status_data[name][name2][cmdhandler[l]] ? status_data[name][name2][cmdhandler[l]]:0;
                                                                            }
                                                                            
                                                                        }   
                                                                    }
                                                                    if(name2 == 'tiger'){
                                                                        for(var l = 0; l < tiger.length; l++){
                                                                            if(l <= 1){
                                                                                obj._tiger1 = status_data[name][name2][tiger[0]] ? status_data[name][name2][tiger[0]]:0;
                                                                                obj._tiger2 = status_data[name][name2][tiger[1]] ? status_data[name][name2][tiger[1]]:0;
                                                                            }else {
                                                                                obj.status_other5 += status_data[name][name2][tiger[l]] ? status_data[name][name2][tiger[l]]:0;
                                                                            }
                                                                            
                                                                        } 
                                                                    }
                                                                }
                                                                //portal
                                                                obj.index = ++index;
                                                                obj.name = name;
                                                                obj.waiting = data[name].waiting;
                                                                obj.going = data[name].going;
                                                                obj.done = data[name].done;
                                                                // if(Versions_Data[name]==undefined){
                                                                //     obj.other='-';
                                                                //     obj.total='-';
                                                                //     obj.version1='-';
                                                                //     obj.version2='-';
                                                                //     obj.version3='-';
                                                                // }
                                                                if(Versions_Data[name]!=undefined)
                                                                {
                                                                    obj.other = 0;
                                                                    obj.total = 0;
                                                                    for (var name2 in Versions_Data[name]) {
                                                                        if (name2 != this.title[0] && name2 != this.title[1] && name2 != this.title[2] && name2 != this.title[3]) {
                                                                            obj.other += Versions_Data[name][name2];
                                                                        }
                                                                    }
                                                                    isWaiting = data[name].waitingFlag;
                                                                    isGoing = data[name].goingFlag;
                                                                    obj.version1 = Versions_Data[name][this.title[0]] ? Versions_Data[name][this.title[0]] : 0;
                                                                    obj.version2 = Versions_Data[name][this.title[1]] ? Versions_Data[name][this.title[1]] : 0;
                                                                    obj.version3 = Versions_Data[name][this.title[2]] ? Versions_Data[name][this.title[2]] : 0;
                                                                    obj.version4 = Versions_Data[name][this.title[3]] ? Versions_Data[name][this.title[3]] : 0;
                                                                    obj.total = Installed_Data[name];
                                                                    if(data[name].waiting != 0 ){
                                                                        if (isWaiting.indexOf('P') > -1) {
                                                                            obj.pWShow = 'true';
                                                                        } else {
                                                                            obj.pWShow = null;
                                                                        }
                                                                        if (isWaiting.indexOf('HB') > -1) {
                                                                            obj.hWShow = 'true';
                                                                        } else {
                                                                            obj.hWShow = null;
                                                                        }
                                                                        if (isWaiting.indexOf('D') > -1) {
                                                                            obj.tWShow = 'true';
                                                                        } else {
                                                                            obj.tWShow = null;
                                                                        }
                                                                    }else {
                                                                        obj.pWShow = null;
                                                                        obj.hWShow = null;
                                                                        obj.tWShow = null;
                                                                    }
                                                                    if(data[name].going != 0){
                                                                        if (isGoing.indexOf('P') > -1) {
                                                                            obj.pGShow = 'true';
                                                                        } else {
                                                                            obj.pGShow = null;
                                                                        }
                                                                        if (isGoing.indexOf('HB') > -1) {
                                                                            obj.hGShow = 'true';
                                                                        } else {
                                                                            obj.hGShow = null;
                                                                        }
                                                                        if (isGoing.indexOf('D') > -1) {
                                                                            obj.tGShow = 'true';
                                                                        } else {
                                                                            obj.tGShow = null;
                                                                        }   
                                                                    }else {
                                                                        obj.pGShow = null;
                                                                        obj.hGShow = null;
                                                                        obj.tGShow = null;
                                                                    }
                                                                    
                                                                }
                                                                
                                                                //mma
                                                                obj.mqtt = [0,0,0,0];
                                                                obj.hbjar = [0,0,0,0];
                                                                obj.mon = [0,0,0,0];
                                                                obj.cmd = [0,0,0,0];
                                                                obj.tiger = [0,0,0,0];
                                                                obj.daemon = [0,0,0,0];
                                                                if(name != 'TEST'){
                                                                    _counts.down += data[name].done;
                                                                    _counts.pro += data[name].going;
                                                                    _counts.not += data[name].waiting;
                                                                    _counts.total += obj.total;
                                                                    _counts.other += obj.other;
                                                                    _counts.tiger1 = 0;
                                                                    _counts.tiger2 = 0;
                                                                    _counts.tiger_other = 0;
                                                                    _counts.heart1 = 0;
                                                                    _counts.heart2 = 0;
                                                                    _counts.heart3 = 0;
                                                                    _counts.version1 += obj.version1;
                                                                    _counts.version2 += obj.version2;
                                                                    _counts.version3 += obj.version3;
                                                                    _counts.version4 += obj.version4;  
                                                                }
                                                                
                                                                obj.tiger1 = 0;
                                                                obj.tiger2 = 0;
                                                                obj.tiger_other = 0;
                                                                obj.heartbeat = [0, 0, 0];
                                                                _status.push(obj);
                                                            }
                                                            this.status = _status;
                                                            this.counts = _counts;
                                                            this.getTiger();
                                                            this.getHeartbeat();
                                                            $.ajax({
                                                                url: 'http://10.10.10.99:7077/realtime/getBureauDeviceMmaStats',//MmaStats
                                                                type: 'GET',
                                                                success: function(data) {
                                                                    this.mmaStats = data;
                                                                    $.each(this.status_name,function(i,item){
                                                                        var l = i;
                                                                        if(item != 'TEST' ){
                                                                            for(var name in data[item]){
                                                                                if(name == 'mqttproxy'){
                                                                                    Vm.status[l].mqtt[0] = data[item][name].alive ? data[item][name].alive:0;
                                                                                    Vm.status[l].mqtt[1] = data[item][name].lost ? data[item][name].lost:0;
                                                                                    Vm.status[l].mqtt[2] = data[item][name].cpuHigh ? data[item][name].cpuHigh:0;
                                                                                    Vm.status[l].mqtt[3] = data[item][name].memHigh ? data[item][name].memHigh:0;
                                                                                }
                                                                                if(name == 'hbjar'){
                                                                                    Vm.status[l].hbjar[0] = data[item][name].alive ? data[item][name].alive:0;
                                                                                    Vm.status[l].hbjar[1] = data[item][name].lost ? data[item][name].lost:0;
                                                                                    Vm.status[l].hbjar[2] = data[item][name].cpuHigh ? data[item][name].cpuHigh:0;
                                                                                    Vm.status[l].hbjar[3] = data[item][name].memHigh ? data[item][name].memHigh:0;
                                                                                }
                                                                                if(name == 'monitor'){
                                                                                    Vm.status[l].mon[0] = data[item][name].alive ? data[item][name].alive:0;
                                                                                    Vm.status[l].mon[1] = data[item][name].lost ? data[item][name].lost:0;
                                                                                    Vm.status[l].mon[2] = data[item][name].cpuHigh ? data[item][name].cpuHigh:0;
                                                                                    Vm.status[l].mon[3] = data[item][name].memHigh ? data[item][name].memHigh:0;
                                                                                }
                                                                                if(name == 'cmdhandler'){
                                                                                    Vm.status[l].cmd[0] = data[item][name].alive ? data[item][name].alive:0;
                                                                                    Vm.status[l].cmd[1] = data[item][name].lost ? data[item][name].lost:0;
                                                                                    Vm.status[l].cmd[2] = data[item][name].cpuHigh ? data[item][name].cpuHigh:0;
                                                                                    Vm.status[l].cmd[3] = data[item][name].memHigh ? data[item][name].memHigh:0;
                                                                                }
                                                                                if(name == 'tiger'){
                                                                                    Vm.status[l].tiger[0] = data[item][name].alive ? data[item][name].alive:0;
                                                                                    Vm.status[l].tiger[1] = data[item][name].lost ? data[item][name].lost:0;
                                                                                    Vm.status[l].tiger[2] = data[item][name].cpuHigh ? data[item][name].cpuHigh:0;
                                                                                    Vm.status[l].tiger[3] = data[item][name].memHigh ? data[item][name].memHigh:0;
                                                                                }
                                                                                if(name == 'daemon'){
                                                                                    Vm.status[l].daemon[0] = data[item][name].alive ? data[item][name].alive:0;
                                                                                    Vm.status[l].daemon[1] = data[item][name].lost ? data[item][name].lost:0;
                                                                                    Vm.status[l].daemon[2] = data[item][name].cpuHigh ? data[item][name].cpuHigh:0;
                                                                                    Vm.status[l].daemon[3] = data[item][name].memHigh ? data[item][name].memHigh:0;
                                                                                }
                                                                            }
                                                                        }
                                                                        
                                                                    })
                                                                    $('.loading').attr('style', 'display:none');
                                                                }.bind(this),
                                                                error: function() {
                                                                    $('.loading').attr('style', 'display:block');
                                                                }.bind(this)
                                                            });

                                                            $('.loading').attr('style', 'display:none');
                                                        }.bind(this),
                                                        error: function() {
                                                            $('.loading').attr('style', 'display:block');
                                                            this.status = [];
                                                            this.title = ['', '', ''];
                                                            this.counts = [];
                                                        }.bind(this)
                                                    });
                                                }.bind(this),
                                                error: function() {
                                                    $('.loading').attr('style', 'display:block');
                                                    this.status = [];
                                                    this.title = ['', '', ''];
                                                    this.counts = [];
                                                }.bind(this)
                                            });
                                        }.bind(this),
                                        error: function() {
                                            $('.loading').attr('style', 'display:block');
                                            this.status = [];
                                            this.title = ['', '', ''];
                                            this.counts = [];
                                        }.bind(this)
                                    });
                                }.bind(this),
                                error: function() {
                                    $('.loading').attr('style', 'display:block');
                                    this.status = [];
                                    this.title = ['', '', ''];
                                    this.counts = [];
                                }.bind(this)
                            });
                        }.bind(this),
                        error: function() {
                            $('.loading').attr('style', 'display:block');
                            this.status = [];
                            this.title = ['', '', ''];
                            this.counts = [];
                        }.bind(this)
                    });
                }.bind(this),
                error: function() {
                    $('.loading').attr('style', 'display:block');
                    this.status = [];
                    this.title = ['', '', ''];
                    this.counts = [];
                }.bind(this)
            });
        },
        getBricked: function() {
            $.ajax({
                url: 'http://soma.ihangmei.com/soma/api/analytics/realtime/bricked',
                type: 'GET',
                success: function(data) {
                    this.bricked_num = [];
                    for (var name in data.data) {
                        this.bricked_num.push(name);
                    }
                    this.bricked = this.bricked_num.length;
                }.bind(this),
                error: function() {
                    $('.loading').attr('style', 'display:block');
                }.bind(this)
            });
        },
        getFault: function() {
            $.ajax({
                url: 'http://soma.ihangmei.com/soma/api/analytics/realtime/fault',
                type: 'GET',
                success: function(data) {
                    this.fault_num = [];
                    for (var name in data.data) {
                        this.fault_num.push(name);
                    }
                    this.fault = this.fault_num.length;
                }.bind(this),
                error: function() {
                    $('.loading').attr('style', 'display:block');
                }.bind(this)
            });
        },
        getGhost: function() {
            $.ajax({
                url: 'http://soma.ihangmei.com/soma/api/analytics/realtime/ghost',
                type: 'GET',
                success: function(data) {
                    this.ghost_num = [];
                    for (var name in data.data) {
                        this.ghost_num.push(name);
                    }
                    this.ghost = this.ghost_num.length;
                }.bind(this),
                error: function() {
                    $('.loading').attr('style', 'display:block');
                }.bind(this)
            });
        },
        getHeartbeat: function() {
            $.ajax({
                url: 'http://soma.ihangmei.com/soma/api/ops/devices/heartbeat',
                type: 'GET',
                success: function(data) {
                    var tiger = 0;
                    var tiger_num = 0;
                    var _title = [];
                    var name = [];
                    var countname = [0, 0];
                    var maxnum = 0;
                    var secnum = 0;
                    for (var name1 in data.data) {
                        var k = 0;
                        $.each(data.data[name1], function(i, item0) {
                            k++
                        })
                        if (k > maxnum) {
                            if (maxnum != 0) {
                                countname.push(countname[0])
                            }
                            maxnum = k;
                            countname[0] = name1;
                        } else if (k < maxnum && k > secnum) {
                            if (secnum != 0) {
                                countname.push(countname[1])
                            }
                            secnum = k;
                            countname[1] = name1;
                        } else {
                            countname.push(name1)
                        }
                    }
                    if (countname[0].length == 7 && countname[1].length == 7) {
                        var str_0 = parseInt(countname[0]);
                        var str_1 = parseInt(countname[1]);
                        if (str_0 < str_1) {
                            countname[0] = str_1.toString();
                            countname[1] = str_0.toString();
                        }
                    }
                    if (countname[0].length > 7 || countname[1].length > 7) {
                        var _str_0 = countname[0].slice(8)
                        var _str_1 = countname[1].slice(8)
                        var str_0 = parseInt(countname[0].slice(0, 8));
                        var str_1 = parseInt(countname[1].slice(0, 8));
                        if (str_0 < str_1) {
                            countname[0] = (str_1.toString() + _str_1);
                            countname[1] = (str_0.toString() + _str_0);
                        }
                    }

                    $.each(Vm.status, function(i2, item2) {
                        tiger_num = 0;
                        for(var i = 0; i < countname.length; i++){
                            tiger = 0;
                            $.each(data.data[countname[i]], function(i3, item3) {
                                if (item2.name == item3.b || (item2.name == "其他" && item3.b == "")) {
                                    if (i <= 1) {
                                        tiger++
                                    } else {
                                        tiger_num++
                                    }
                                }
                            })
                            // if(item2.name=="TEST"){
                            //     Vm.status[i2].heartbeat[0]='-';
                            //     Vm.status[i2].heartbeat[1]='-';
                            //     Vm.status[i2].heartbeat[2]='-';
                            // }
                            if (i == 0 && (item2.name!="TEST")) {
                                Vm.status[i2].heartbeat[0] = tiger;
                                Vm.counts.heart1 += tiger;
                            } else if (i == 1 && (item2.name!="TEST")) {
                                Vm.status[i2].heartbeat[1] = tiger;
                                Vm.counts.heart2 += tiger;
                            } else if(item2.name!="TEST") {
                                Vm.status[i2].heartbeat[2] = tiger_num;
                            }
                        }
                        Vm.counts.heart3 += tiger_num;

                    });
                    this.H_title = [countname[0], countname[1]];
                    console.log(this.H_title)
                }.bind(this),
                error: function() {
                    $('.loading').attr('style', 'display:block');
                }.bind(this)
            });
        },
        getTiger: function() {
            $.ajax({
                url: 'http://soma.ihangmei.com/soma/api/ops/devices/tiger',
                type: 'GET',
                success: function(data) {
                    var t_title = [];
                    var _title = [];
                    var tiger = 0;
                    var tiger_num = 0;
                    for (var name in data.data) {
                        if(name.length >= 8){
                            _title.push(name);
                        }else {
                            t_title.push(name);
                        }
                    }
                    _title = _title.sort().reverse();
                    _title = _title.concat(t_title);
                    t_title = [];
                    t_title = _title.slice(0,2);
                    $.each(_title, function(i, item) {
                        tiger_num = 0;
                        $.each(Vm.status, function(i2, item2) {
                            tiger = 0;
                            $.each(data.data[item], function(i3, item3) {
                                if (item2.name == item3.b) {
                                    tiger++
                                }
                            })
                            // if(item2.name=="TEST"){
                            //     Vm.status[i2].tiger1 = '-';
                            //     Vm.status[i2].tiger2 = '-';
                            //     Vm.status[i2].tiger_other = '-';
                            // }
                            if (i == 0 && (item2.name!="TEST")) {
                                Vm.status[i2].tiger1 = tiger;
                            }
                            if (i == 1 && (item2.name!="TEST")) {
                                Vm.status[i2].tiger2 = tiger;
                            }
                            if(i > 1 && (item2.name!="TEST")){
                                Vm.status[i2].tiger_other = tiger;
                            }
                            tiger_num += tiger;
                        })
                        if (i == 0) {
                            Vm.counts.tiger1 = tiger_num;
                        }
                        if (i == 1) {
                            Vm.counts.tiger2 = tiger_num;
                        }
                        if (i > 1) {
                            Vm.counts.tiger_other = tiger_num;
                        }
                    })
                    this.T_title = t_title;
                }.bind(this),
                error: function() {
                    $('.loading').attr('style', 'display:block');
                    this.T_title = ['', ''];
                }.bind(this)
            });
        },
        modalShow: function(msg, index) {
            this.current = 1;
            $('.modal .header').text(msg);
            $("#tab a").removeClass('active').eq(index).addClass('active');
            //$('.ui.modal').modal('show');
            var arr = [[1,2,3],[4,5,6]];
            // $.each(Vm.status,function(i,item){
            //     console.log(item.name)
            // })




            $('#load').removeClass('active')
        },
        goto:function(index){
          // if(index == this.current) return;
            this.current = index;



        },
    },
    computed: {
        pages: function() {
            var pag = [];
            var current = this.current ;
            var showItem = this.showItem;
            var allpage = this.allpage;
            if (current < showItem - 1) { //如果当前的激活的项 小于要显示的条数
                //总页数和要显示的条数那个大就显示多少条
                var i = Math.min(showItem, allpage);
                while (i) {
                    pag.unshift(i--);
                }
            } else { //当前页数大于显示页数了
                var start = current - Math.floor(showItem / 2), //从哪里开始
                    i = showItem;
                var dis = allpage - showItem;
                if (start > dis) {
                    start = dis + 1
                }
                while (i--) {
                    pag.push(start++);
                }
            }
            return pag
        }
    },
});
