var carType = localStorage.getItem("carType" + localStorage.getItem("SystemID"));
var DefaultMainUrl = '';
car_type = $.cookie('car_type');
if((car_type == "" || car_type == undefined) && (carType == "1,2" || carType == "1,2,3" || carType == "1,3"))
{
	car_type = 0;  
}
if(car_type == 0 && (carType == "1,2" || carType == "1,2,3" || carType == "1,3")) 
{
	car_type = 1;
	$.cookie('car_type',car_type);
}
else if(car_type == "2,3") 
{
	car_type = 2;
	$.cookie('car_type',carType);
}
else if(car_type == undefined) 
{
	$.cookie('car_type',carType);
}
var SystemID = localStorage.getItem("SystemID");
var timestamp = Date.parse(new Date());
if(SystemID == undefined)
{
	SystemID = null;
}
if (SystemID != null)
{
	var data = "";
	data = "id=" + SystemID;
	$.ajax({
	    type: "post",
	    contentType: "application/x-www-form-urlencoded",
	    //contentType: "application/json",
        url: "system/user/queryAuthForSystem.action",
	    //url: "json/choiceBusOrTrain.json",
	    dataType: "json",
	    data: data,
	    success: function (jsonResult) {
	    	/*$.session.set('id', jsonResult["user"]["id"]);
	    	$.session.set('loginName', jsonResult["user"]["loginName"]);
	    	$.session.set('username', jsonResult["user"]["username"]);*/
	    	//$.cookie('id', jsonResult["user"]["id"]);
	    	// $.cookie('loginName', jsonResult["user"]["loginName"]);
	    	// $.cookie('username', jsonResult["user"]["username"]);
    		// $.cookie('loginName', jsonResult["user"]["loginName"]);
    		$.cookie('parentId', jsonResult["user"]["parentId"]);
    		$.cookie('orgId', jsonResult["user"]["orgId"]);
    		$.cookie('departmentName', jsonResult["user"]["departmentName"]);
    		$.cookie('trainBureauIds', jsonResult["user"]["trainBureauIds"]);
    		$.cookie('trainStationIds', jsonResult["user"]["trainStationIds"]);
    		$.cookie('trainShopIds', jsonResult["user"]["trainShopIds"]);
    		$.each(jsonResult["listTree"],function(i,item){
	        	var TempListTree = new Array();
	        	// item["funcName"]
	        	$.each(item["children"],function(i2,item2){
	        		$.each(item2["children"],function(i3,item3){
	        			var TempListTree3 = new Array();
		        		$.each(item3["children"],function(i4,item4){
		        			if(item4["domId"] == "dom_dr" || item4["domId"] == "dom_dc" || item4["domId"] == "dom_tj" || item4["domId"] == "dom_xg" || item4["domId"] == "dom_sc" || item4["domId"] == "dom_plsc" || item4["domId"] == "dom_ccxg")
		        			{
		        				TempListTree3.push(item4["domId"]);
			        			// console.log(item["funcName"] + " " + item3["url"] + " " + item4["funcName"])
		        			}
		        		})
		        		if(TempListTree3.length > 0)
		        		{
		        			var strTempObject = "{'" + item3["url"].replace(".html","") + "'" + ":'" + TempListTree3 + "'}";
	        				var TempObject = eval('('+strTempObject+')');
	        				TempListTree.push(TempObject);
	        				// console.log(TempObject)
		        		}
        				
	        		})
        		})
        		if(item["funcName"] == "铁路")
        		{
        			localStorage.setItem("listTree1", JSON.stringify(TempListTree))
        		}
        		else if(item["funcName"] == "大巴")
        		{
        			localStorage.setItem("listTree2", JSON.stringify(TempListTree))
        		}
        		else if(item["funcName"] == "一体机")
        		{
        			localStorage.setItem("listTree3", JSON.stringify(TempListTree))
        		}
	        	// console.log(TempListTree);
	        })
	    	$.each(jsonResult["listAuth"],function(i,item){
                var domId = item.domId;
                var parentId = item.parentId;
                if(item.carType == $.cookie('car_type'))
                {
                	$('#' + domId).show();
                	if(DefaultMainUrl == "")
                	{
                		var timestamp = Date.parse(new Date());
                		DefaultMainUrl = item.url;
                		// $('#' + domId).addClass('active');
						parent.main.location.href = './' + DefaultMainUrl + '?' + timestamp;
                	}
                }
                // if(parentId != -1)
                // {
                //     $('#' + domId + ' a').attr('href', $('#' + domId + ' a').attr('href') + '?' + timestamp); 
                // }
	        })
	        
			//window.location.href = '/';
	    },
	    error:function(){
	        //top.location.href = 'login.html';
	    }
	});	
}
else
{
	//top.location.href = 'login.html';
}
$(".nav-li").click(function(){
	$(".nav-list li").removeClass('active');
	$(this).addClass('active');
})
$(".nav-list li").click(function(){
	$(".nav-li").removeClass('active');
	$(".nav-list li").removeClass('active');
	$(this).addClass('active');
})
// $.ajax({
//     type: "post",
// 	contentType: "application/x-www-form-urlencoded",
//     url: "dictSystem/getDictSystem.action",
//     //url: "json/getDictSystem.json",
//     dataType: "json",
//     //data: JSON.stringify({ "BuIds": ["1", "2", "3"] }),
//     success: function (jsonResult) {
//     	var TypeIdArray = new Array();
//     	var TypeIdList = ["carriage_type","iccid_status_type","line_model","train_dev_trouble_type","operator","nothing_traffic","fault_status","dev_assets_status_type","down_type"]
//     	var TypeNameList = ["车种","卡状态","车型","故障描述","运营商","有无流量","故障处理状态","设备状态","下发类型"]
//     	var List_carriage_type = new Array();
//     	var List_iccid_status_type = new Array();
//     	var List_line_model = new Array();
//     	var List_train_dev_trouble_type = new Array();
//     	var List_operator = new Array();
//     	var List_nothing_traffic = new Array();
//     	var List_fault_status = new Array();
//         var List_dev_assets_status_type = new Array();
//         var List_down_type = new Array();
//     	$.each(jsonResult,function(i,item){
//     		if(TypeIdList.indexOf(item.typeId) > -1)
//     		{
//     			var TempObject = new Object();
// 	    		TempObject.name = item.name;
// 	    		TempObject.value = item.value;
// 	    		eval("List_" + item.typeId).push(TempObject);
//     		}
//     	})
//     	/*var carriage_typeObject = new Object();
//     	var iccid_status_typeObject = new Object();
//     	var line_modelObject = new Object();
//     	var train_dev_trouble_typeObject = new Object();
//     	var operatorObject = new Object();
//     	var nothing_trafficObject = new Object();*/
//     	$.each(TypeIdList,function(i,item){
//     		var TempObject = new Object();
//     		TempObject.name = TypeNameList[i];
//     		TempObject.list = eval("List_" + item);
//     		localStorage.setItem(item, JSON.stringify(TempObject));
//     	})
//     },
//     error:function(){
//         console.log("无法获取字典表！");
//     }
// });