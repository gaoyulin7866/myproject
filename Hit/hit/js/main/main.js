/**
 * Created by AM2016 on 2017/5/18.
 */
var TempUrl = "http://42.159.123.51:8087/";
function getObligate(Name,Type,Title,app_or_por) {
    $.ajax({
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        url: TempUrl + "hit/getObligate.action?type=" + Type + "&app_or_por=" + app_or_por,
        dataType: "json",
        success: function(jsonResult) {
            $('#' +　Name).html('<option value="">选择' + Title + '</option>');
            $.each(jsonResult, function(i, item) {
                $('#' + Name).append('<option value="' + item["id"] + '">' + item["name"] + '</option>');
            });
            $('.selectpicker').selectpicker('refresh');
        },
        error: function() {
            errorNotify(null, "获取页别" + Title + "失败");
        }
    })
}
function getPortalVersions() {
    $.ajax({
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        url: TempUrl + "hit/getVersions.action?type=1&app_or_por=2",
        dataType: "json",
        success: function(jsonResult) {
            $('#portal_Versions').html('');
            $.each(jsonResult, function(i, item) {
                $('#portal_Versions').append('<option value="' + item["id"] + '">' + item["v_name"] + '</option>');
            });
            $('.selectpicker').selectpicker('refresh');
        },
        error: function() {
            errorNotify(null, "获取版本失败");
        }
    })
}
function errorNotify(title,message,type)
{
    if(title == null)
    {
        title="错误信息：";
    }
    if(type == null)
    {
        type = 'danger';
    }
    $.notify({
        title: title,
        message: message
    },{
        type: type,
        z_index: 99999,
        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
        //'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}