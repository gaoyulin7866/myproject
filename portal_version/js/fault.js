moment.locale("zh-cn");
var disk = {};
var heartbeat = {};
var nginx = {};
var _root = {};
$.ajax({
	type:"post",
	url:"http://soma.ihangmei.com/soma/api/analytics/realtime/fault",
	success:function (data) {
		disk = {};
		disk.umount = [];
		disk.read = [];
		heartbeat = {};
		heartbeat.failed =[];
		nginx = {};
		nginx.other = [];
		_root = {};
		_root.read = [];
		$.each(data.data,function (i,item) {
			var bricked_name = i;
			if (item.ops.length != 0){
				for (var i=0; i<item.ops.length; i++){
					function getData(op,statu,arr) {
						if (item.ops[i].item == op && item.ops[i].status == statu){
							//noc
							var Noc = '';
							if(item.status.NocInfo == '0001-01-01T00:00:00Z'){
								Noc = '';
							}else {
								Noc = moment(item.status.NocInfo).fromNow();
							}
							//Last Seen
							var seen;
							$.each(item.hotspots,function(i2,item2) {
								var time = item2.time;
								if (!seen || seen < time){
									seen = time;
								}
							});
							//Train
							var lineName = '',bureauName = '';
							if(item.status.InstallInfo != null){
								lineName = item.status.InstallInfo.lineName;
								bureauName = item.status.InstallInfo.bureauName;
							}
							//SIM Status
							var _SimInfoArray = [];
							$.each(item.status.SimInfo,function(i2,item2){
								_SimInfoArray.push({"operatorType":item2.operatorType,"status":item2.status})
							})
							//Handled By
							var Handled;
							if(item.field == null){
								Handled = '';
							}else if(item.field.historyStatusInfo.length != 0){
								Handled = item.field.historyStatusInfo[0].reportUserName;
							}else {
								Handled = '';
							}
							//Seen By
							var _hotspotsArray = {};
							var _WF = "",_RD = "";
							$.each(item.hotspots,function(i2,item2) {
								if(item2.User.substr(0,3) == "WF:"){
									_WF = "WF";
								}
								if(item2.User.substr(0,3) == "RD:"){
									_RD = item2.User.substr(3);
								}
							});
							_hotspotsArray.WF=_WF;
							_hotspotsArray.RD=_RD;

							arr.push({
								"LastReportDmc":moment(item.status.LastReportTime).fromNow(),
								"LastReportNoc":Noc,
								"LastSeen":moment(seen).fromNow(),
								"Device":bricked_name,
								"Train":lineName + '-' + bureauName,
								"HandledBy":Handled,
								"SimInfo":_SimInfoArray,
								"hotspots":_hotspotsArray,
							});
	                    }
					}
					getData('disk','umount',disk.umount);
					getData('disk','readonly',disk.read);
					getData('heartbeat','failed',heartbeat.failed);
					getData('root','readonly',_root.read);
                    if(item.ops[i].item == 'nginx' && item.ops[i].status != 'OK'){
                    	//noc
						var Noc = '';
						if(item.status.NocInfo == '0001-01-01T00:00:00Z'){
							Noc = '';
						}else {
							Noc = moment(item.status.NocInfo).fromNow();
						}
						//Last Seen
						var seen;
						$.each(item.hotspots,function(i2,item2) {
							var time = item2.time;
							if (!seen || seen < time){
								seen = time;
							}
						});
						//Train
						var lineName = '',bureauName = '';
						if(item.status.InstallInfo != null){
							lineName = item.status.InstallInfo.lineName;
							bureauName = item.status.InstallInfo.bureauName;
						}
						//SIM Status
						var _SimInfoArray = [];
						$.each(item.status.SimInfo,function(i2,item2){
							_SimInfoArray.push({"operatorType":item2.operatorType,"status":item2.status})
						})
						//Handled By
						var Handled;
						if(item.field == null){
							Handled = '';
						}else if(item.field.historyStatusInfo.length != 0){
							Handled = item.field.historyStatusInfo[0].reportUserName;
						}else {
							Handled = '';
						}
						//Seen By
						var _hotspotsArray = {};
						var _WF = "",_RD = "";
						$.each(item.hotspots,function(i2,item2) {
							if(item2.User.substr(0,3) == "WF:"){
								_WF = "WF";
							}
							if(item2.User.substr(0,3) == "RD:"){
								_RD = item2.User.substr(3);
							}
						});
						_hotspotsArray.WF=_WF;
						_hotspotsArray.RD=_RD;

						nginx.other.push({
							"LastReportDmc":moment(item.status.LastReportTime).fromNow(),
							"LastReportNoc":Noc,
							"LastSeen":moment(seen).fromNow(),
							"Device":bricked_name,
							"Train":lineName + '-' + bureauName,
							"HandledBy":Handled,
							"SimInfo":_SimInfoArray,
							"hotspots":_hotspotsArray,
						});
                    }
				}
			}
		})
		new Vue({
			el:'#table',
			data:{
				umount:disk.umount,
				readyonly:disk.read,
				heartbeat:heartbeat.failed,
				nginx:nginx.other,
				root:_root.read
			},
			mounted:function(){
				var _rowCountArray = [0,++disk.umount.length,disk.umount.length + disk.read.length +1,disk.umount.length + disk.read.length + heartbeat.failed.length +2,disk.umount.length + disk.read.length + heartbeat.failed.length + nginx.other.length +3];
				$('#table2').bootstrapTable({
			      pagination : false,
			      sidePagination : "client",
			      striped: true,
			      onClickRow: function(row, $element) {
			      	if( row[2] !== undefined ){
			      		var str = row[2].slice(6,-7);
			      		window.open("http://soma.ihangmei.com/soma/web/faults/#/device/" + str)
			      	}
                  },
			      columns :[{
			       align : 'left',
			       valign : 'middle'
			      },{
			       align : 'left',
			       valign : 'middle'
			      },{
			       align : 'left',
			       valign : 'middle'
			      },{
			      	align : 'left',
			       valign : 'middle'
			      },{
			      	align : 'left',
			       valign : 'middle'
			      },{
			      	align : 'left',
			       valign : 'middle'
			      },{
			       align : 'left',
			       valign : 'middle'
			      }]
     			});
     			$.each(_rowCountArray,function(index,item){
     				$('#table2').bootstrapTable('mergeCells', {
		                index: item,
		                field: 'LastReport',
		                colspan: 7
		            });
     			})
			}
		});
	}
});
function outExcel(name) {
	var _data = [["Device","Last Report","Last Report","Last Seen","Train","Handled By","Seen By(RD)","Seen By(WF)"]];
	function pushData(a,b){
		if(name == a){
			$.each(b,function(index,item){
				if(index<b.length){
					_data.push([item.Device,'DMC:'+item.LastReportDmc,'NOC:'+item.LastReportNoc,item.LastSeen,item.Train,item.HandledBy,item.hotspots.RD,item.hotspots.WF]);
				}
			})
		}
	}
	pushData("readonly",disk.read);
	pushData("heartbeat",heartbeat.failed);
	pushData("nginx",nginx.other);
	pushData("root",_root.read);
	if(name == "umount"){
		$.each(disk.umount,function(index,item){
			if(index<disk.umount.length -1){
				_data.push([item.Device,'DMC:'+item.LastReportDmc,'NOC:'+item.LastReportNoc,item.LastSeen,item.Train,item.HandledBy,item.hotspots.RD,item.hotspots.WF]);
			}
		})
	}
	if(_data.length == 1)
	{
		alert("没有数据")
		return false;
	}
	ExportUtil.toExcel(_data,"data.xls");
};
