var Vm = new Vue({
    el: '#table',
    data: {
        ghost_num: [],
        ghostName: [],
        message: [
            { name: 1 }
        ]
    },
    mounted: function() {
        this.getGhost();
        setInterval(function() {
            Vm._data.message[0].name = Math.floor(Math.random() * 10 + 1);
        }, 600000);
        $('table').bootstrapTable({
            pagination : false,
            sidePagination : "client",
            striped: true,
            columns: [{
                align: 'center',
                valign: 'middle'
            }, {
                align: 'center',
                valign: 'middle'
            }]
        });
    },
    watch: {
        message: {
            handler: function() {
                this.getGhost();
            },
            deep: true
        }
    },
    methods: {
        getGhost: function() {
            $.ajax({
                url: 'http://soma.ihangmei.com/soma/api/analytics/realtime/ghost',
                type: 'GET',
                success: function(data) {
                    this.ghost_num = [];
                    for (var name in data.data) {
                        this.ghost_num.push(name);
                    }
                    for (var i = 0; i < this.ghost_num.length; i++) {
                        var this_str = this.ghost_num[i];
                        var obj = {};
                        obj.name = this_str;
                        for (var j = 0; j < data.data[this_str].ops.length; j++) {
                            if (data.data[this_str].ops[j].item == 'uptime') {
                                var _this = data.data[this_str].ops[j].status;
                                obj.time = _this.replace(' up ', '|').split('|')[1].split(',')[0];
                            }
                        }
                        this.ghostName.push(obj);
                    };
                }.bind(this)
            });
        }
    },
    updated: function() {
        $('.no-records-found').hide();
        $('#btn').click(function() {
            outExcel();
            function outExcel(name) {
                var _data = [
                    ["设备号","时间"]
                ]
                for (var item in Vm.ghostName){
                    _data.push([Vm.ghostName[item].name,Vm.ghostName[item].time]);
                }
                ExportUtil.toExcel(_data, "data.xls");
            };
        })
    }

});
