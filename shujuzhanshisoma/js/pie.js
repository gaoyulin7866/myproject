var Vm = new Vue({
    el: '#app',
    data:{
        bricked_num: [],
        bricked_data: {},
        fault_num: [],
        fault_data: {},
        ghost_num: [],
        ghost_data: {},
        ghostName:[],
        Arr:[1,2,3,4,4],
        message:[
            {name:1}
        ]
    },
    mounted:function () {
        setInterval(function(){
            Vm._data.message[0].name = Math.floor(Math.random()*10+1);
        },600000);
        setTimeout(function() {
            $('.myscroll').myScroll({
                speed: 60,
                rowHeight: 26 
            });
        },3000)
        this.getBricked();
        this.getFault();
        this.getGhost();
        this.getguage([],[],[]);
    },
    watch: {
        message:{
            handler:function(){
                this.getBricked();
                this.getFault();
                this.getGhost();
            },
            deep:true
        },
        bricked_num_new: {
            handler: function (newVal,oldVal){
                this.draweBricked(newVal);
                this.getguage(newVal,this.fault_num_new,this.ghost_num_new);
            },
            deep: true
        },
        fault_num_new: {
            handler: function (newVal,oldVal){
                this.draweFault(newVal);
                this.getguage(this.bricked_num_new,newVal,this.ghost_num_new);
            },
            deep: true
        },
        ghost_num_new:{
            handler: function (newVal,oldVal){
                this.draweGhost(newVal);
                this.getguage(this.bricked_num_new,this.fault_num_new,newVal);
            },
            deep: true
        }
    },
    computed: {
        common_num: function (){
            var arr = this.bricked_num.concat(this.fault_num).concat(this.ghost_num);
            var arr_unique = this.unique(arr,1);
            var arr_Unique = this.unique(arr_unique);
            return arr_Unique;
        },
        bricked_num_new: function (){
            var remove = this.removeData(this.bricked_num,this.common_num);
            var remove_concat = remove.concat(this.common_num)
            return remove_concat;
        },
        fault_num_new: function (){
            return this.removeData(this.fault_num,this.common_num);
        },
        ghost_num_new: function (){
            return this.removeData(this.ghost_num,this.common_num);
        }
    },

    methods: {
        getBricked: function (){
            $.ajax({
                url:'https://soma.ihangmei.com/soma/api/analytics/realtime/bricked',
                type:'GET',
                success:function (data) {
                    this.bricked_num = [];
                    this.bricked_data = {};
                    for (var name in data.data) {
                        this.bricked_num.push(name);
                    }
                    this.bricked_data = data.data;
                }.bind(this)
            });
        },
        getFault:    function (){
            $.ajax({
                url:'https://soma.ihangmei.com/soma/api/analytics/realtime/fault',
                type:'GET',
                success:function (data) {
                    this.fault_num = [];
                    this.fault_data = {};
                    for (var name in data.data) {
                        this.fault_num.push(name);
                    }
                    this.fault_data = data.data;
                }.bind(this)
            });
        },
        getGhost:function () {
            $.ajax({
                url:'https://soma.ihangmei.com/soma/api/analytics/realtime/ghost',
                type:'GET',
                success:function (data) {
                    this.ghost_num = [];
                    this.ghost_data = {};
                    for (var name in data.data) {
                        this.ghost_num.push(name);
                    }
                    this.ghost_data = data.data;
                }.bind(this)
            });
        },
        unique2: function (arr){
            return this.unique(arr,2);
        },
        unique:   function(arr,type) {
            var hash = {};
            var arr1 = [];
            var arr2 = [];
            for (var i = 0; i < arr.length; i++) {
                if (hash[arr[i]]) {
                    hash[arr[i]]++;//重复
                    arr2.push(arr[i]);
                }else{
                    hash[arr[i]] = 1;//不重复
                    arr1.push(arr[i]);
                }
            }
            if (type==1) {
                return arr2;
            }else if(type==2){
                return {
                    arr: arr2,
                    hash: hash
                };
            }else{
                return arr1
            }
        },
        removeData:     function(a,b) {
            var arr_new = [];
            for ( var i=0; i<a.length; i++){
                if(b.indexOf(a[i]) == -1){
                    arr_new.push(a[i]);
                }
            }
            return arr_new;
        },
        draweBricked:   function (){

            var bricked_umount_disk = 0, bricked_readyonly_disk = 0,bricked_heartbeat = 0, bricked_nginx = 0, bricked_root = 0, bricked_tiger = 0;
            var tiger_num = [];
            for (var i = 0; i < this.bricked_num.length; i++){
                var this_str = this.bricked_num[i];
                if ( this.bricked_data[this_str] != undefined && this.bricked_data[this_str].ops.length !== 0 ){
                    for (var j=0; j<this.bricked_data[this_str].ops.length; j++){
                        if (this.bricked_data[this_str].ops[j].item == 'disk' && this.bricked_data[this_str].ops[j].status == 'umount'){
                            bricked_umount_disk ++;
                        }
                        if (this.bricked_data[this_str].ops[j].item == 'disk' && this.bricked_data[this_str].ops[j].status == 'readonly'){
                            bricked_readyonly_disk ++;
                        }
                        if (this.bricked_data[this_str].ops[j].item == 'heartbeat' && this.bricked_data[this_str].ops[j].status == 'failed'){
                            bricked_heartbeat ++;
                        }
                        if (this.bricked_data[this_str].ops[j].item == 'nginx' && this.bricked_data[this_str].ops[j].status !== 'OK'){
                            bricked_nginx ++;
                        }
                        if (this.bricked_data[this_str].ops[j].item == 'root' && this.bricked_data[this_str].ops[j].status == 'readonly'){
                            bricked_root ++;
                        }
                        if (this.bricked_data[this_str].ops[j].item == 'tiger'){
                            tiger_num.push(this.bricked_data[this_str].ops[j].status)
                        }
                    }
                }
            };
            var tiger_json = this.unique2(tiger_num)
            var tiger_unique = this.unique(tiger_num,3);
            var tiger_hash = tiger_json.hash;
            var tiger_name = [];
            var Data = [];
            var Data_tiger = [];
            var DataName = [];
            var DataName_tiger = [];
            for(var name in tiger_hash){
                tiger_name.push(name);
            };

            if(bricked_umount_disk !== 0){
                Data.push(bricked_umount_disk);
                DataName.push('umountDisk');
            }

            if(bricked_readyonly_disk !== 0){
                Data.push(bricked_readyonly_disk);
                DataName.push('readyonlyDisk');
            }
            if(bricked_heartbeat !== 0){
                Data.push(bricked_heartbeat);
                DataName.push('no-heartbeat');
            }
            if(bricked_nginx !== 0){
                Data.push(bricked_nginx);
                DataName.push('nginx');
            }
            if(bricked_root !== 0){
                Data.push(bricked_root);
                DataName.push('root');
            }

            for (var i=0; i<tiger_name.length; i++){
                var str ='tiger' + tiger_name[i].slice(2);
                var str_name = tiger_name[i];
                if(tiger_hash[str_name] !== 0){
                    Data_tiger.push(tiger_hash[str_name]);
                    DataName_tiger.push(str)
                }
            };
            var StatusCharts = echarts.init(document.getElementById('brickedbar'));
            var Lineoption = {
                title:{
                    show:true,
                    text:'Bricked Status',
                    link:'bricked.html',
                    target:'blank',
                    textStyle:{
                        color:'#fff',
                        fontStyle:"oblique",
                        fontWeight:'normal',
                    },
                    subtext:'Instruction:  List of all bricked devices (seen but not reporting by DMA)',
                    subtextStyle:{
                        color:'#fff',
                    }

                },
                color:['#DC143C'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            
                        type : 'shadow'        
                    }
                },
                toolbox: {
                    show : true,
                    iconStyle:{
                        normal:{
                            color:'#fff',
                        }
                    },
                    right:15,
                },
                legend: {
                    textStyle: {
                        color: '#fff'
                    },
                    data:['数量(/台)']
                },
                grid: {
                    top: '37%',
                    left: '1%',
                    right: '10%',
                    height:125,
                    containLabel: true
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
                xAxis:  {
                    name:'数量',
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    name:'状态',
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                        margin:20,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    data: DataName
                },
                series: [
                    {
                        name: '数量(/台)',
                        type: 'bar',
                        stack: '总量',
                        barWidth:20,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 30;
                        },
                        data: Data,
                    }
                ],
                animation:true,
                animationEasing: 'elasticOut',
                animationDuration: function (idx) {
                    return idx * 400;
                },
                animationEasingUpdate:'elasticOut',
            };
            StatusCharts.setOption(Lineoption,true);
            var TigerCharts = echarts.init(document.getElementById('brickedbar_tiger'));
            Tigeroption = {
                color:['#DC143C'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            
                        type : 'shadow'        
                    }
                },
                grid: {
                    top: '28%',
                    left: '3%',
                    right: '10%',
                    height:60,
                    containLabel: true
                },
                legend: {
                    textStyle: {
                        color: '#fff'
                    },
                    data:['数量(/台)']
                },
                itemStyle:{
                    normal:{
                        barBorderRadius: 20,
                        color:'#008080',
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                        shadowBlur: 20,
                    },
                    emphasis:{
                        color:'#B0C4DE',
                        shadowBlur:10,
                        shadowColor:'#CD5C5C',
                        shadowOffsetX:0,
                        shadowOffsetY:0,
                    }
                },
                xAxis:  {
                    name:'数量',
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    name:'状态',
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                         margin:20,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    data: DataName_tiger
                },
                series: [
                    {
                        name: '数量(/台)',
                        type: 'bar',
                        stack: '总量',
                        barWidth:10,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 30;
                        },
                        data: Data_tiger,
                    }
                ],
                animation:true,
                animationEasing: 'elasticOut',
                animationDuration: function (idx) {
                    return idx * 400;
                },
                animationEasingUpdate:'elasticOut',
            };
            TigerCharts.setOption(Tigeroption,true);
        },
        draweFault:function () {
            var fault_umount_disk = 0, fault_readyonly_disk = 0,fault_heartbeat = 0, fault_nginx = 0, fault_root = 0, fault_tiger = 0;
            var tiger_num = [];
            for (var i = 0; i < this.fault_num.length; i++){
                var this_str = this.fault_num[i];
                if ( this.fault_data[this_str] != undefined && this.fault_data[this_str].ops.length !== 0 ){
                    for (var j=0; j<this.fault_data[this_str].ops.length; j++){
                        if (this.fault_data[this_str].ops[j].item == 'disk' && this.fault_data[this_str].ops[j].status == 'umount'){
                            fault_umount_disk ++;
                        }
                        if (this.fault_data[this_str].ops[j].item == 'disk' && this.fault_data[this_str].ops[j].status == 'readonly'){
                            fault_readyonly_disk ++;
                        }
                        if (this.fault_data[this_str].ops[j].item == 'heartbeat' && this.fault_data[this_str].ops[j].status == 'failed'){
                            fault_heartbeat ++;
                        }
                        if (this.fault_data[this_str].ops[j].item == 'nginx' && this.fault_data[this_str].ops[j].status !== 'OK'){
                            fault_nginx ++;
                        }
                        if (this.fault_data[this_str].ops[j].item == 'root' && this.fault_data[this_str].ops[j].status == 'readonly'){
                            fault_root ++;
                        }
                        if (this.fault_data[this_str].ops[j].item == 'tiger'){
                            tiger_num.push(this.fault_data[this_str].ops[j].status)
                        }
                    }
                }
            };
            var tiger_json = this.unique2(tiger_num)
            var tiger_unique = this.unique(tiger_num,3);
            var tiger_hash = tiger_json.hash;
            var tiger_name = [];
            var Data = [];
            var Data_tiger = [];
            var DataName = [];
            var DataName_tiger = [];
            for(var name in tiger_hash){
                tiger_name.push(name);
            };
            
            if(fault_umount_disk !== 0){
                Data.push(fault_umount_disk);
                DataName.push('umountDisk');
            }

            if(fault_readyonly_disk !== 0){
                Data.push(fault_readyonly_disk);
                DataName.push('readyonlyDisk');
            }
            if(fault_heartbeat !== 0){
                Data.push(fault_heartbeat);
                DataName.push('no-heartbeat');
            }
            if(fault_nginx !== 0){
                Data.push(fault_nginx);
                DataName.push('nginx');
            }
            if(fault_root !== 0){
                Data.push(fault_root);
                DataName.push('root');
            }

            for (var i=0; i<tiger_name.length; i++){
                var str ='tiger' + tiger_name[i].slice(2);
                var str_name = tiger_name[i];
                if(tiger_hash[str_name] !== 0){
                    Data_tiger.push(tiger_hash[str_name]);
                    DataName_tiger.push(str)
                }
            };

            
            var FaultCharts = echarts.init(document.getElementById('faultbar'));
            Faultoption = {
                title:{
                    show:true,
                    text:'Fault Status',
                    link:'fault.html',
                    target:'blank',
                    textStyle:{
                        color:'#fff',
                        fontStyle:"oblique",
                        fontWeight:'normal',
                    },
                    subtext:'Instruction:   List of all devices reported as failed by the ops script,but only reporting devices disk failing',
                    subtextStyle:{
                        color:'#fff',
                    }
                },
                color:['#DC143C'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            
                        type : 'shadow'        
                    }
                },
                legend: {
                    textStyle: {
                        color: '#fff'
                    },
                    data:['数量(/台)']
                },
                grid: {
                    top: '37%',
                    left: '1%',
                    right: '10%',
                    height:125,
                    containLabel: true
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
                xAxis:  {
                    name:'数量',
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    name:'状态',
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                         margin:20,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    data: DataName
                },
                series: [
                    {
                        name: '数量(/台)',
                        type: 'bar',
                        stack: '总量',
                        barWidth:20,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 30;
                        },
                        data: Data,
                    }
                ],
                animation:true,
                animationEasing: 'elasticOut',
                animationDuration: function (idx) {
                    return idx * 400;
                },
                animationEasingUpdate:'elasticOut',
            };
            FaultCharts.setOption(Faultoption,true);
            var TFaultCharts = echarts.init(document.getElementById('faultbar_tiger'));
            TFaultoption = {
                color:['#DC143C'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            
                        type : 'shadow'        
                    }
                },
                legend: {
                    textStyle: {
                        color: '#fff'
                    },
                    data:['数量(/台)']
                },
                grid: {
                    top: '28%',
                    left: '3%',
                    right: '10%',
                    height:60,
                    containLabel: true
                },
                itemStyle:{
                    normal:{
                        barBorderRadius: 20,
                        color:'#008080',
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
                xAxis:  {
                    name:'数量',
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    name:'状态',
                    type: 'category',
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    },
                    axisLabel: {
                        show: true,
                         margin:20,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    data: DataName_tiger
                },
                series: [
                    {
                        name: '数量(/台)',
                        type: 'bar',
                        stack: '总量',
                        barWidth:10,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 30;
                        },
                        data: Data_tiger,
                    }
                ],
                animation:true,
                animationEasing: 'elasticOut',
                animationDuration: function (idx) {
                    return idx * 400;
                },
                animationEasingUpdate:'elasticOut',
            };
            TFaultCharts.setOption(TFaultoption,true);
        },
        draweGhost:function(){
            for (var i = 0; i < this.ghost_num.length; i++){
                var this_str = this.ghost_num[i];
                var obj = {};
                obj.name = this_str;
                for (var j=0; j<this.ghost_data[this_str].ops.length; j++){
                    if(this.ghost_data[this_str].ops[j].item == 'uptime'){
                        var _this = this.ghost_data[this_str].ops[j].status;
                        obj.time = _this.replace(' up ','|').split('|')[1].split(',')[0];
                    }
                }
                this.ghostName.push(obj);
            };
        },
        getguage: function (bricked_num_new,fault_num_new,ghost_num_new){
            var total_num = bricked_num_new.length + fault_num_new.length + ghost_num_new.length;
            
            //Bricked
            var PieCharts = echarts.init(document.getElementById('brickedgauge'));
            function option(title,url,name,max,data){
                return Gaugeption = {
                    title : {
                        show:true,
                        text: title,
                        link:url,
                        target:'blank',
                        textStyle:{
                            color:'#fff',
                            fontStyle:"oblique",
                            fontWeight:'normal',
                        },
                    },
                    tooltip : {
                        formatter: "{a} <br/>{c} {b}"
                    },
                    legend:{
                        left:'left',
                    },
                    series : [
                        {
                            name:name,
                            type:'gauge',
                            min:0,
                            max:max,
                            radius:'92%',
                            splitNumber:10,
                            axisLine: {            
                                lineStyle: {       
                                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#8B0000']],
                                    width: 3,
                                    shadowColor : '#fff', 
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {           
                                textStyle: {      
                                    fontWeight: 'bolder',
                                    color: '#fff',
                                    shadowColor : '#fff', 
                                    shadowBlur: 10
                                }
                            },
                            axisTick: {            
                                length :15,        
                                lineStyle: {       
                                    color: 'auto',
                                    shadowColor : '#fff', 
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           
                                length :25,         
                                lineStyle: {       
                                    width:3,
                                    color: '#fff',
                                    shadowColor : '#fff', 
                                    shadowBlur: 10
                                }
                            },
                            pointer: {           
                                shadowColor : '#fff', 
                                shadowBlur: 5
                            },
                            title : {
                                textStyle: {       
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor : '#fff', 
                                    shadowBlur: 10
                                }
                            },
                            detail : {
                                backgroundColor: 'rgba(30,144,255,0.8)',
                                borderWidth: 1,
                                borderColor: '#fff',
                                shadowColor : '#fff', 
                                shadowBlur: 5,
                                offsetCenter: [0, '50%'],       
                                textStyle: {       
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data:[{value: data, name: '/台'}]
                        },
                    ]
                };
            };
            PieCharts.setOption(option('Bricked总数','https://soma.ihangmei.com/soma/web/faults/#/bricked','bricked',total_num,this.bricked_num.length),true);

            //fault
            var FaultCharts = echarts.init(document.getElementById('faultgauge'));
            FaultCharts.setOption(option('Fault总数','https://soma.ihangmei.com/soma/web/faults/#/fault','fault',total_num,this.fault_num.length),true);

            //ghost
            var GhostCharts = echarts.init(document.getElementById('ghostgauge'));
            GhostCharts.setOption(option('Ghost总数','https://soma.ihangmei.com/soma/web/faults/#/ghost','ghost',total_num,this.ghost_num.length),true);
        }
    }
    
}); 
