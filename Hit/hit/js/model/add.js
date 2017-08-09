var TempUrl = "http://42.159.123.51:8087/";
Obligate_4_Array = [];
var strVersions = "";
var strColNum = "";
var strObligate_1 = "";
var strObligate_2 = "";
var strObligate_3 = "";
var strObligate_4 = "";
for (var i = 1; i <= 10; i++) {
    strColNum += '<option value="' + i + '">' + i + '个</option>';
}

function errorNotify(title, message, type) {
    if (title == null) {
        title = "错误信息：";
    }
    if (type == null) {
        type = 'danger';
    }
    $.notify({
        title: title,
        message: message
    }, {
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
// function drawing(){
//     $.ajax({
//         type:"post",
//         url: TempUrl + "hit/getVersions.action?type=2&app_or_por=2",
//         contentType: "application/x-www-form-urlencoded",
//         dataType: "json",
//         success:function(jsonResult){
//             var str_Html = "";
//             var str_Versions = "";
//             $.each(jsonResult, function(i, item) {
//                 str_Versions += '<option value="' + item["id"] + '">' + item["v_name"] + '</option>';
//             });
//             str_Html += '<option value="">选择版本</option>' + str_Versions;
//             $("#HitV2").html(str_Html);
//             $('.selectpicker').selectpicker('refresh');
//         },
//         error: function() {
//             errorNotify(null, "无法获取版本信息！");
//         }
//     });
// }
$.ajax({
    type: "get",
    url: TempUrl + "hit/getVersions.action?type=2&app_or_por=2",
    contentType: "application/x-www-form-urlencoded",
    dataType: "json",
    success: function(jsonResult) {
        $.each(jsonResult, function(i, item) {
            strVersions += '<option value="' + item["id"] + '">' + item["v_name"] + '</option>';
        });
        $.ajax({
            type: "get",
            url: TempUrl + "hit/getObligate.action?type=1,2,3,4&app_or_por=2",
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            success: function(jsonResult) {
                $.each(jsonResult, function(i, item) {
                    var value = parseInt(item["type"]);
                    switch (value) {
                        case 1:
                            strObligate_1 += '<option data-support="' + item["ename"] + '" value="' + item["id"] + '">' + item["name"] + '</option>';
                            break;
                        default:
                            return "-";
                    }
                });
                var strHtml = "";
                var strIs = '<option value="1">是</option><option value="2">否</option>';
                strHtml += '<div class="row" id="VueDiv"><div class="col-sm-12"><div class="form-horizontal" id="">';
                strHtml += '<br><div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i>portal版本</label><div id="tihuan" class="col-sm-6"><select id="HitV2" name="HitV2" class="selectpicker form-control" data-live-search="true"><option value="">选择版本</option>' + strVersions + '</select></div><div class="col-sm-2"><p class="form-control-static" style="display:inline-block;margin-right:15px;"><i class="fa fa-plus-circle" v-on:click="version_add(2)" data-toggle="tooltip" data-placement="top"></i></p><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i v-on:click="version_del(1)" class="fa fa-minus-circle"></i></p></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">版本日期</label><div class="col-sm-6"><div class="input-group date" id="datetimepicker"><input type="text" id="versiondate2" class="form-control" readonly><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i> 页别</label><div class="col-sm-3"><select id="Obligate_1_2" name="Obligate_1_2" class="selectpicker col-sm-4 form-control" data-live-search="true"><option value="">选择页别</option>' + strObligate_1 + '</select></div><div class="col-sm-3"><input  id="Obligate_1_2_en"  type="text" class="form-control" readonly="readonly"></div><div class="col-sm-2"><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i v-on:click="style_add(\'1\')" class="fa fa-plus-circle"></i></p><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i v-on:click="version_del(3)" class="fa fa-minus-circle"></i></p><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i class="fa fa-exclamation-circle"  data-toggle="tooltip" data-placement="top" title="页别，类别，预留维度要有1,2,3级菜单级联关系"></i></p></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i>hit名称</label><div class="col-sm-3"><input type="text" id="HitName2" name="HitName2" class="form-control" placeholder="请输入名称"></div><div class="col-sm-3"><input type="text" id="HitNameE2" name="HitNameE2" class="form-control" placeholder="请输入英文名"></div><div class="col-sm-2"><p class="form-control-static"><i class="fa fa-exclamation-circle"  data-toggle="tooltip" data-placement="top" title="不超过10个的字母，需验证版本号和该字段组合唯一"></i></p></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">hit id</label><div class="col-sm-6"><input type="text" id="HitId2" name="HitId2" class="form-control" readonly></div><div class="col-sm-3"><button v-on:click="dadian_add()" class="btn btn-primary">生成事件</button></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">事件ID</label><div class="col-sm-6"><input type="text" id="HitEventID2" name="HitEventID2" class="form-control" readonly></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i>行为类型</label><div class="col-sm-6"><select id="ActionType2" name="ActionType2" class="selectpicker form-control" data-live-search="true"><option value="">选择类型</option><option value="1">user_click</option><option value="2">user_pageview</option><option value="3">user_system</option><option value="4">ad_impression</option><option value="5">ad_click</option><option value="6">error_device</option><option value="7">error_cloud</option><option value="8">business_feedback</option></select></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">描述</label><div class="col-sm-6"><textarea type="textarea" class="form-control" id="Describe2" name="Describe2"></textarea></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">状态</label><div class="col-sm-6"><select id="Status2" name="Status2" class="selectpicker form-control" data-live-search="true"><option value="1">已下线</option><option value="2">正常使用</option><option value="3">新增打点</option></select></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">扩展字段说明</label><div class="col-sm-6"><textarea id="por_col1" type="textarea" class="form-control"></textarea></div></div>';
                strHtml += '<div class="form-group"><label class="col-sm-3 control-label">refhit</label><div class="col-sm-6"><select id="Refhitid2" name="Refhitid2" class="selectpicker form-control">' + strIs + '</select></div></div>';
                // strHtml += '<div class="form-group"><label class="col-sm-3 control-label">生成日志时间戳</label><div class="col-sm-6"><select id="UserId2" name="UserId2" class="selectpicker form-control">' + strIs + '</select></div></div>';
                // strHtml += '<div class="form-group"><label class="col-sm-3 control-label">设备SN</label><div class="col-sm-6"><select id="UserId2" name="UserId2" class="selectpicker form-control">' + strIs + '</select></div></div>';
                // strHtml += '<div class="form-group"><label class="col-sm-3 control-label">设备MAC</label><div class="col-sm-6"><select id="UserId2" name="UserId2" class="selectpicker form-control">' + strIs + '</select></div></div>';
                // strHtml += '<div class="form-group"><label class="col-sm-3 control-label">用户MAC</label><div class="col-sm-6"><select id="UserId2" name="UserId2" class="selectpicker form-control">' + strIs + '</select></div></div>';
                strHtml += '<div class="form-group"><div class="col-sm-12" style="text-align: center;"><button v-on:click="reset()" class="btn btn-primary">重置</button>&nbsp;&nbsp;&nbsp;<button v-on:click="submit()" class="btn btn-primary">提交</button></div></div>';
                strHtml += '</div></div></div>';
                $('#table-portal').html(strHtml);
                new Vue({
                    el: '#VueDiv',
                    data: {
                        todos: Obligate_4_Array
                    },
                    mounted: function() {
                        $('.selectpicker').selectpicker('refresh');

                        $('[data-toggle="tooltip"]').tooltip();
                        $('#datetimepicker').datetimepicker({
                            format: 'yyyy-mm-dd',
                            weekStart: 1,
                            autoclose: true,
                            minView: "month",
                            language: 'zh-CN'
                        });
                    },
                    methods: {
                        style_add: function(id) {
                            var strTitle = "";
                            var value = parseInt(id);
                            switch (value) {
                                case 1:
                                    strTitle = "页别";
                                    break;
                                default:
                                    return "-";
                            }
                            var strHtml = "";
                            strHtml += '<div class="row"><div class="col-sm-12"><div class="form-horizontal" id="FormValidator2">';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">中文名称</label><div class="col-sm-8"><input type="text" id="name2" name="name2" class="form-control"></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">英文名称</label><div class="col-sm-8"><input type="text" id="ename2" name="ename2" class="form-control"></div></div>';
                            strHtml += '</div></div></div>';
                            BootstrapDialog.show({
                                title: '新增' + strTitle,
                                message: strHtml,
                                onshown: function(dialogRef) {
                                    $('#FormValidator2').bootstrapValidator({
                                        message: 'This value is not valid',
                                        feedbackIcons: {
                                            valid: 'glyphicon glyphicon-ok',
                                            invalid: 'glyphicon glyphicon-remove',
                                            validating: 'glyphicon glyphicon-refresh'
                                        },
                                        fields: {
                                            name2: {
                                                message: '中文名无效',
                                                validators: {
                                                    notEmpty: {
                                                        message: '请输入中文名'
                                                    }
                                                }
                                            },
                                            ename2: {
                                                message: '英文名无效',
                                                validators: {
                                                    notEmpty: {
                                                        message: '请输入英文名'
                                                    }
                                                }
                                            }
                                        }
                                    });
                                },
                                buttons: [{
                                    label: '提交',
                                    cssClass: 'btn-primary',
                                    action: function(dialog) {
                                        $('#FormValidator2').bootstrapValidator('validate');
                                        if ($('#FormValidator2').data('bootstrapValidator').isValid()) {
                                            var obj = new Object();
                                            obj.name = $('#name2').val();
                                            obj.ename = $('#ename2').val();
                                            obj.type = id;
                                            obj.app_or_por = 2;
                                            $.ajax({
                                                type: "post",
                                                url: TempUrl + "hit/addObligate.action",
                                                timeout: 60000,
                                                dataType: "json",
                                                data: obj,
                                                success: function(jsonResult) {
                                                    var Message = "";
                                                    Message = jsonResult["message"];
                                                    if (jsonResult["result"] == 600000) {
                                                        errorNotify("", Message, "info");
                                                        dialog.close();
                                                    } else {
                                                        errorNotify("", Message);
                                                    }
                                                },
                                                error: function(request, status, err) {
                                                    if (status == "timeout") {
                                                        BootstrapDialog.show({
                                                            title: '系统提示',
                                                            message: '请求超时！',
                                                            buttons: [{
                                                                label: '关闭',
                                                                action: function(dialogItself) {
                                                                    dialogItself.close();
                                                                }
                                                            }]
                                                        });
                                                    }
                                                }
                                            });
                                        } else {
                                            BootstrapDialog.alert({
                                                title: '验证失败',
                                                message: '请确认输入内容格式是否正确！',
                                                type: BootstrapDialog.TYPE_DANGER,
                                                buttonLabel: '确认'
                                            });
                                        }
                                    }
                                }]
                            });
                        },
                        dadian_add: function() {
                            var app_hitV = $("#HitV2").val();
                            var Obligate_1_2_en = $("#Obligate_1_2_en").val();
                            var _HitIDArray = Obligate_1_2_en;
                            var strHitID = "";
                            if (app_hitV == "") {
                                errorNotify("", "请选择版本");
                                return false;
                            }
                            if ($("#HitNameE2").val() != "") {
                                strHitID = $("#HitNameE2").val();
                            } else {
                                errorNotify("", "请输入英文名");
                                return false;
                            }
                            if (Obligate_1_2_en != "") {
                                $("#HitId2").val(Obligate_1_2_en +"."+strHitID);
                            } else {
                                errorNotify("", "请选择页别");
                            }
                            var data = "app_hitV=" + app_hitV + "&hitId=" + $("#HitId2").val() + "&app_or_por=2";
                            $.ajax({
                                type: "post",
                                contentType: "application/x-www-form-urlencoded",
                                url: TempUrl + "hit/verifyHitId.action",
                                timeout: 60000,
                                dataType: "json",
                                data: data,
                                success: function(jsonResult) {
                                    var Message = "";
                                    Message = jsonResult["message"];
                                    var _messageArray = Message.split("_");
                                    Message = _messageArray[0];
                                    var _message = _messageArray[1];

                                    if (jsonResult["result"] == 600025) {
                                        // errorNotify("",Message,"info");
                                        $("#HitEventID2").val(_message);
                                    } else {
                                        errorNotify('', Message);
                                        $("#HitId2,#HitEventID2").val('');
                                    }
                                },
                                error: function(request, status, err) {

                                    if (status == "timeout") {
                                        BootstrapDialog.show({
                                            title: '系统提示',
                                            message: '请求超时！',
                                            buttons: [{
                                                label: '关闭',
                                                action: function(dialogItself) {
                                                    dialogItself.close();
                                                }
                                            }]
                                        });
                                    }
                                }
                            });
                        },

                        version_add: function(appPor) {
                            var strHtml = "";
                            strHtml += '<div class="row"><div class="col-sm-12"><div class="form-horizontal" id="FormValidator2">';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">版本名称</label><div class="col-sm-8"><input type="text" id="versionName3" name="versionName3" class="form-control" placeholder="请输入版本名称"></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">版本状态</label><div class="col-sm-8"><select id="versionState3" name="versionState3" class="selectpicker form-control" data-live-search="true"><option value="1">新增版本</option><option value="2">稳定版本</option><option value="3">下线版本</option></select></div></div>';
                            strHtml += '</div></div></div>';
                            BootstrapDialog.show({
                                title: '新增版本',
                                message: strHtml,
                                onshown: function(dialog) {
                                    $('.selectpicker').selectpicker('refresh');
                                },
                                buttons: [{
                                    label: '提交',
                                    cssClass: 'btn-primary',
                                    action: function(dialog) {
                                        if ($('#versionName3').val() == "") {
                                            errorNotify(null, "请输入版本名称！");
                                            return false;
                                        }
                                        if ($("#versionState3").val() == "") {
                                            errorNotify(null, "请选择状态！");
                                            return false;
                                        }
                                        var obj = new Object();
                                        obj.v_name = $("#versionName3").val();
                                        obj.v_type = $("#versionState3").val();
                                        obj.app_or_por = appPor;
                                        $.ajax({
                                            type: "get",
                                            url: TempUrl + "hit/verifyVersion.action?v_name=" + obj.v_name + "&app_or_por=" + appPor,
                                            timeout: 60000,
                                            dataType: "json",
                                            success: function(jsonResult) {
                                                var Message = "";
                                                Message = jsonResult["message"];
                                                if (jsonResult["result"] == 600025) {
                                                    $('#table-app').bootstrapTable('refreshOptions', { pageNumber: 1 });
                                                    errorNotify("", Message, "info");
                                                    dialog.close();
                                                } else {
                                                    Message = jsonResult["message"];
                                                    errorNotify("", Message);
                                                };
                                                $.ajax({
                                                    type: "post",
                                                    url: TempUrl + "hit/addVersion.action",
                                                    timeout: 60000,
                                                    dataType: "json",
                                                    data: obj,
                                                    success: function(jsonResult) {
                                                        var Message = "";
                                                        Message = jsonResult["message"];

                                                        if (jsonResult["result"] == 600000) {
                                                            errorNotify("", Message, "info");
                                                            dialog.close();
                                                        } else {
                                                            Message = jsonResult["message"];
                                                            errorNotify("", Message);
                                                        }
                                                        // drawing();
                                                    },
                                                    error: function(request, status, err) {
                                                        if (status == "timeout") {
                                                            BootstrapDialog.show({
                                                                title: '系统提示',
                                                                message: '请求超时！',
                                                                buttons: [{
                                                                    label: '关闭',
                                                                    action: function(dialogItself) {
                                                                        dialogItself.close();
                                                                    }
                                                                }]
                                                            });
                                                        }
                                                    }
                                                });
                                            },
                                            error: function(request, status, err) {
                                                if (status == "timeout") {
                                                    BootstrapDialog.show({
                                                        title: '系统提示',
                                                        message: '请求超时！',
                                                        buttons: [{
                                                            label: '关闭',
                                                            action: function(dialogItself) {
                                                                dialogItself.close();
                                                            }
                                                        }]
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }]
                            });
                        },
                        version_del: function(appPor) {
                            var del_id;
                            if (appPor == 1) {
                                del_id = $("#HitV2").val();
                            }
                            if (appPor == 3) {
                                del_id = $("#Obligate_1_2").val();
                            }
                            $.ajax({
                                type: "get",
                                url: "http://42.159.123.51:8087/hit/removeOption.action?ids=" + del_id + "&order=" + appPor,
                                contentType: "application/x-www-form-urlencoded",
                                success: function(jsonResult) {
                                    var Message = "";
                                    Message = jsonResult["message"];
                                    if (jsonResult["result"] == 600002) {
                                        errorNotify("", Message, "info");
                                    } else {
                                        Message = jsonResult["message"];
                                        errorNotify("", Message);
                                    }
                                },
                                error: function(request, status, err) {
                                    if (status == "timeout") {
                                        BootstrapDialog.show({
                                            title: '系统提示',
                                            message: '请求超时！',
                                            buttons: [{
                                                label: '关闭',
                                                action: function(dialogItself) {
                                                    dialogItself.close();
                                                }
                                            }]
                                        });
                                    }
                                }
                            });
                        },
                        reset:function(){
                            $("#versiondate2").val('');
                            $("#HitName2").val('');
                            $("#HitNameE2").val('');
                            $("#Describe2").val('');
                            $("#HitId2").val('');
                            $("#HitEventID2").val('');
                            $("#por_col1").val('');
                        },
                        submit: function() {
                            var obj = new Object();
                            obj.por_hitV = $("#HitV2").val();
                            obj.por_versiondate = $("#versiondate2").val();
                            obj.por_createtime = moment().format("HH:mm:ss");
                            obj.por_page = $("#Obligate_1_2").val();
                            obj.por_hitname = $("#HitName2").val();
                            obj.por_hitnameE = $("#HitNameE2").val();
                            obj.por_actiontype = $("#ActionType2").val();
                            obj.por_describe = $("#Describe2").val();
                            obj.por_hitID = $("#HitId2").val();
                            obj.por_hitEventID = $("#HitEventID2").val();
                            obj.por_status = $("#Status2").val();
                            obj.por_col1 = $("#por_col1").val();
                            obj.por_refhitid = $("#Refhitid2").val();
                            if (obj.por_hitV == "") {
                                errorNotify("", "请选择版本");
                                return false;
                            }
                            if (obj.por_page == "") {
                                errorNotify("", "请选择页别");
                                return false;
                            }
                            if (obj.por_hitname == "") {
                                errorNotify("", "请输入名称");
                                return false;
                            }
                            if (obj.por_hitnameE == "") {
                                errorNotify("", "请输入英文名");
                                return false;
                            }
                            if (obj.por_hitID == "") {
                                errorNotify("", "请生成打点Id");
                                return false;
                            }
                            if (obj.por_actiontype == "") {
                                errorNotify("", "请选择行为类型");
                                return false;
                            }
                            $.ajax({
                                type: "post",
                                url: TempUrl + "hit/addPortal.action",
                                timeout: 60000,
                                dataType: "json",
                                data: obj,
                                success: function(jsonResult) {
                                    var Message = "";
                                    Message = jsonResult["message"];                                                                                         
                                    if (jsonResult["result"] == 600000) {
                                        $('#table-portal').bootstrapTable('refreshOptions', { pageNumber: 1 });
                                        errorNotify("", Message, "info");
                                    } else {
                                        Message = jsonResult["message"];
                                        errorNotify("", Message);
                                    }
                                },
                                error: function(request, status, err) {
                                    if (status == "timeout") {
                                        BootstrapDialog.show({
                                            title: '系统提示',
                                            message: '请求超时！',
                                            buttons: [{
                                                label: '关闭',
                                                action: function(dialogItself) {
                                                    dialogItself.close();
                                                }
                                            }]
                                        });
                                    }
                                }
                            });
                        },
                    }
                });
                $('#Obligate_1_2').change(function() {
                    $('#Obligate_1_2_en').val($(this).find("option:selected").attr("data-support"));
                    $('#HitId2,#HitEventID2').val('');
                });
            },
            error: function() {
                errorNotify(null, "无法获取信息！");
            }
        });
    },
    error: function() {
        errorNotify(null, "无法获取版本信息！");
    }
});