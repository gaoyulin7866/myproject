var carType = localStorage.getItem("carType" + localStorage.getItem("SystemID"));
car_type = $.cookie('car_type');
if((car_type == "" || car_type == undefined) && (carType == "1,2,3" || carType == "1,2" || carType == "2,3" || carType == "1,3"))
{
	car_type = 0;
}
// var authType = $.cookie('authType');
var TempTab = 0;
if(car_type == 3)
{
    TempTab = 2;
}
if(car_type == 2)
{
	TempTab = 0;
}
if(car_type == 0 || car_type == 1)
{
	TempTab = 1;
}
$("#UserName").html($.cookie('loginName') + ' 欢迎您！');
// if (carType == "1,2,3" || carType == "1,2")
// {
// 	$("#nav_authType").show();
// }
function carTypeCN(value)
{
    value = parseInt(value);
    switch (value) {
        case 0: return "全部";
        break;
        case 1: return "铁路";
        break;
        case 2: return "大巴";
        break;
        case 3: return "一体机";
        break;
    }
}
var carTypeArray = [];
if(carType.indexOf(",")>-1)
{
    var strHtml = '';
    carTypeArray = carType.split(",");
    $.each(carTypeArray,function(i,item){
        
        strHtml += '<label class="btn btn-primary"><input type="radio" name="car_type" value="' + item + '" class="radioItem">' + carTypeCN(item) + '</label>';       
    })
    $("#nav_authType").html(strHtml);
}
if(car_type == undefined)
{
	car_type = null;
}
if(car_type != undefined)
{
	TempTab = parseInt(TempTab);
	//car_type_num = parseInt(car_type)
	$("label").removeClass('active');
	$("label").eq(TempTab).addClass('active');
	$('.radioItem').removeAttr('checked');
	$('.radioItem').eq(TempTab).attr('checked','checked');
}
$(".radioItem").change(function(){
	var timestamp = Date.parse(new Date());
	$.cookie('car_type', $(this).val()); 
	// console.log($(this).val());
	$('.radioItem').removeAttr('checked');
	$(this).attr('checked','checked');
	// top.location.href = './index.html?' + timestamp;
	/*parent.menu.location.reload(); 
	parent.main.location.reload();*/
	parent.menu.location.href = './menu.html?' + timestamp;
	parent.main.location.href = './echarts.html?' + timestamp;
})
$('#SystemSelect').click(function() {
    SystemSelect();
})
function SystemSelect()
{
    var timestamp = Date.parse(new Date());
    var userCenter_authType = JSON.parse(localStorage.getItem("userCenter_authType"));
    if(userCenter_authType["list"].length > 0)
    {
        var url = userCenter_authType["list"][0].value;
        top.location.href = url + '?' + timestamp;
    }
}
$('#OutLogin').click(function() {
  $.ajax({
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        //contentType: "application/json",
        url: "system/auth/loginOut.action",
        //url: "json/login.json",
        dataType: "json",
        success: function (jsonResult) {
            LoginOut();
        },
        error:function(){
            LoginOut();
        }
    });
  
})
function LoginOut()
{
    var timestamp = Date.parse(new Date());
    $.session.clear();
    try
    {
        var userCenter_login = JSON.parse(localStorage.getItem("userCenter_login"));
        localStorage.clear();
        if(userCenter_login["list"].length > 0)
        {
            var url = userCenter_login["list"][0].value;
            top.location.href = url + '?' + timestamp;
        }
        else
        {
            top.location.href = '../login.html?' + timestamp;
        }
    }
    catch(e)
    { 
        console.error("获取字典表错误，返回默认登陆页URL！");
        top.location.href = '../login.html?' + timestamp;
    }
}