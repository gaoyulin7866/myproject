getPortalVersions();
getObligate("portal_Obligate_1", 1, "页别", 2);
var _BodyHeight = document.body.scrollHeight - 109;

$(function() {
    $('#table-portal').bootstrapTable(); // init via javascript
    $(window).resize(function() {
        $('#table-portal').bootstrapTable('resetView');
    });
});
var _temp = {
    method: "get",
    contentType: "application/x-www-form-urlencoded",
    url: TempUrl + "hit/getPortals.action",
    dataType: "json",
    striped: false,
    // toolbar : "#toolbar",
    uniqueId: "id",
    pagination: true, // 分页
    pageSize: 20,
    pageList: [10, 20, 50, 100, 300, 500],
    singleSelect: false,
    idField: "id",
    clickToSelect: true,
    height: _BodyHeight,
    //search : true,
    sortable: false,
    sidePagination: "server", // 服务端处理分页
    queryParams: queryParams_portal,
    rowStyle: function(row, index) {
        var value = parseInt(row.por_status);
        switch (value) {
            case 1:
                return { classes: 'active' };
                break;
            case 2:
                return { classes: '' };
                break;
            case 3:
                return { classes: 'danger' };
                break;
            default:
                return { classes: '' };
        }
    },
    columns: [{
        idfield: 'state',
        checkbox: true,
        valign: 'middle'
    }, {
        title: '序号',
        field: 'id',
        align: 'center',
        valign: 'middle',
        formatter: function(value, row, index) {
            return index + 1;
        }
    }, {
        title: 'portal版本',
        //field : 'app_hitV',
        field: 'hitVersionName',
        valign: 'middle'
    }, {
        title: '版本日期',
        //field : 'app_page',
        field: 'por_versiondate',
        align: 'center',
        valign: 'middle'
    }, {
        title: '创建时间',
        //field : 'app_page',
        field: 'por_createtime',
        align: 'center',
        valign: 'middle'
    }, {
        title: '页别名称',
        //field : 'app_page',
        field: 'pageName',
        valign: 'middle'
    }, {
        title: '页别英文名',
        field: 'pageEname',
        valign: 'middle'
    }, {
        title: 'hit名称',
        field: 'por_hitname',
        valign: 'middle'
    }, {
        title: 'hit英文名',
        field: 'por_hitnameE',
        valign: 'middle'
    }, {
        title: 'hit id',
        field: 'por_hitID',
        valign: 'middle'
    }, {
        title: '事件ID',
        field: 'por_hitEventID',
        valign: 'middle'
    }, {
        title: '行为类型',
        field: 'por_actiontype',
        valign: 'middle',
        formatter: function(value, row, index) {
            var value = parseInt(value);
            switch (value) {
                case 1:
                    return "user_click";
                    break;
                case 2:
                    return "user_pageview";
                    break;
                case 3:
                    return "user_system";
                    break;
                case 4:
                    return "ad_impression";
                    break;
                case 5:
                    return "ad_click";
                    break;
                case 6:
                    return "error_device";
                    break;
                case 7:
                    return "error_cloud";
                    break;
                case 8:
                    return "business_feedback";
                    break;
                default:
                    return "-";
            }
        }
    }, {
        title: '描述',
        field: 'por_describe',
        valign: 'middle'
    }, {
        title: '状态',
        field: 'por_status',
        valign: 'middle',
        formatter: function(value, row, index) {
            var value = parseInt(value);
            switch (value) {
                case 1:
                    return "已下线";
                    break;
                case 2:
                    return "正常使用";
                    break;
                case 3:
                    return "新增打点";
                    break;
                default:
                    return "-";
            }
        }
    }, {
        title: '扩展字段说明',
        field: 'por_col1',
        valign: 'middle'
    }, {
        title: 'refhit',
        field: 'por_refhitid',
        valign: 'middle',
        /*formatter : function(value, row, index) {
            var value = parseInt(value);
            switch (value) {
                case 1: return "是";
                    break;
                case 2: return "否";
                    break;
                default: return "-";
            }
        }*/
    }],
    onLoadSuccess: function() {
        var $table = $('#table-portal');
        TableIDArray = [];
        $table.find('input[name="btSelectItem"]').each(function() {
            $(this).removeAttr('checked');
        })
        //全选复选框触发
        $table.find('input[name="btSelectAll"]').click(function() {
            //判断是否选中
            if ($table.find('input[name="btSelectAll"]').prop("checked") == true) {
                $table.find('input[name="btSelectItem"]').each(function() {
                    TableIDArray.push(parseInt($(this).val()));
                })
                TableIDArray = unique(TableIDArray);
            } else {
                $table.find('input[name="btSelectItem"]').each(function() {
                    if ($(this).prop("checked") == false) {
                        TableIDArray.splice(TableIDArray.indexOf(parseInt($(this).val())), 1);
                    }
                })
            }

        })
        //遍历复选框
        $table.find('input[name="btSelectItem"]').each(function() {
            if (TableIDArray.indexOf(parseInt($(this).val())) != -1) {
                $(this).attr('checked', true);
            }
        })
        $table.find('input[name="btSelectItem"]').change(function() {
            if ($(this).prop("checked") == true) {
                TableIDArray.push(parseInt($(this).val()));
                // $(this).parent().parent().addClass('selectedBg');
                $(this).parent().parent().find('td').addClass('active');
            } else {
                TableIDArray.splice(TableIDArray.indexOf(parseInt($(this).val())), 1);
                // $(this).parent().parent().removeClass('selectedBg');
                $(this).parent().parent().find('td').removeClass('active');
            }
        })
        TableIDArray = unique(TableIDArray);
    }
}
var TableIDArray = new Array();
$('#table-portal').bootstrapTable(_temp);
$("#portal_del").click(function() {
    if (TableIDArray.length != 0) {
        BootstrapDialog.confirm({
            title: '删除确认提醒',
            message: '是否确认删除所选择信息？',
            closable: true,
            draggable: true,
            btnCancelLabel: '取消',
            btnOKLabel: '确认',
            callback: function(result) {
                if (result) {
                    var data = "";
                    data = "ids=" + String(TableIDArray);
                    $.ajax({
                        type: "post",
                        url: TempUrl + "hit/removePortal.action",
                        timeout: 60000,
                        dataType: "json",
                        data: data,
                        success: function(jsonResult) {
                            if (jsonResult["result"] == 600002) {
                                $('#table-portal').bootstrapTable('refreshOptions', { pageNumber: 1 });
                                errorNotify('', jsonResult["message"], "info");
                            } else if (jsonResult["result"] == 600009) {
                                Message = jsonResult["message"];
                                errorNotify('', Message);
                            } else {
                                Message = jsonResult["message"];
                                errorNotify('', Message);
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
                }
            }
        });
    } else {
        errorNotify(null, "请勾选需要删除的数据！");
    }
});

$("#copy_button_portal").click(function() {
    if (TableIDArray.length != 0) {
        $.ajax({
            type: "get",
            url: TempUrl + "hit/getVersions.action?app_or_por=2",
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            success: function(jsonResult) {
                var strVersions = "";
                $.each(jsonResult, function(i, item) {
                    strVersions += '<option value="' + item["id"] + '">' + item["v_name"] + '</option>';
                });
                var strHtml = "";
                strHtml += '<div class="row"><div class="col-sm-12"><div class="form-horizontal" id="FormValidator2">';
                strHtml += '<div class="form-group"><div class="col-sm-1"></div><div class="col-sm-7"><select id="versionId" name="versionId" class="selectpicker form-control" data-live-search="true"><option value="">复制已有版本</option>' + strVersions + '</select></div><div class="col-sm-2"><a id="add_versionId" class="btn btn-primary">复制到已有版本</a></div></div>';
                strHtml += '<div class="form-group"><div class="col-sm-1"></div><div class="col-sm-7"><input type="text" id="versionName" name="versionName" class="form-control" placeholder="复制到新版本"></div><div class="col-sm-2"><a id="add_versionName" class="btn btn-primary">复制到新增版本</a></div></div>';
                strHtml += '</div></div></div>';
                BootstrapDialog.show({
                    title: '复制到新版本',
                    message: strHtml,
                    onshown: function(dialog) {
                        $('.selectpicker').selectpicker('refresh');
                        $('#add_versionId').click(function() {
                            if ($('#versionId').val() == "") {
                                errorNotify(null, "请选择版本号！");
                                return false;
                            }
                            var obj = new Object();
                            obj.versionId = $("#versionId").val();
                            obj.appIds = String(TableIDArray);
                            obj.app_or_por = 2;
                            $.ajax({
                                type: "post",
                                url: TempUrl + "hit/copy.action",
                                timeout: 60000,
                                dataType: "json",
                                data: obj,
                                success: function(jsonResult) {

                                    var Message = "";
                                    Message = jsonResult["message"];

                                    if (jsonResult["result"] == 600027) {
                                        errorNotify("", Message, "info");
                                        $('#table-portal').bootstrapTable('refreshOptions', { pageNumber: 1 });
                                        dialog.close();
                                    } else {
                                        Message = jsonResult["message"];
                                        errorNotify("", Message);
                                        return 1;
                                        return false;
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
                        })
                        $('#add_versionName').click(function() {
                            if ($('#versionName').val() == "") {
                                errorNotify(null, "请输入版本！");
                                return false;
                            }
                            var obj = new Object();
                            obj.versionName = $("#versionName").val();
                            obj.appIds = String(TableIDArray);
                            obj.app_or_por = 2;
                            $.ajax({
                                type: "post",
                                url: TempUrl + "hit/copy.action",
                                timeout: 60000,
                                dataType: "json",
                                data: obj,
                                success: function(jsonResult) {

                                    var Message = "";
                                    Message = jsonResult["message"];

                                    if (jsonResult["result"] == 600027) {
                                        errorNotify("", Message, "info");
                                        $('#table-portal').bootstrapTable('refreshOptions', { pageNumber: 1 });
                                        dialog.close();
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
                        })
                    },
                });
            },
            error: function() {
                errorNotify(null, "无法获取版本信息！");
            }
        });
    } else {
        errorNotify(null, "请勾选需要复制的数据！");
    }

});

$("#portal_version_button").click(function() {
    var strHtml = "";
    var $_table;
    var _TableIDArray = [];
    strHtml = '<table id="portal_gl"></table>';

    var _status = {
        method: "get",
        contentType: "application/x-www-form-urlencoded",
        url: TempUrl + "hit/getVersions.action?app_or_por=2",
        dataType: "json",
        striped: false,
        // toolbar : "#toolbar",
        uniqueId: "id",
        singleSelect: false,
        idField: "id",
        //search : true,
        height: 400,
        sortable: false,
        columns: [{
            idfield: 'state',
            checkbox: true,
            valign: 'middle',
        }, {
            title: '版本',
            field: 'v_name',
            align: 'center',
            valign: 'middle'
        }, {
            title: '状态',
            align: 'center',
            valign: 'middle',
            field: 'v_type',
            editable: {
                type: 'select',
                title: '状态',
                disabled: false,
                source: [{ value: "1", text: "新增版本" }, { value: "2", text: "稳定版本" }, { value: "3", text: "下线版本" }, { value: "4", text: "删除版本" }]
            }
        }],
        onLoadSuccess: function() {
            $_table.find('input[name="btSelectItem"]').each(function() {
                $(this).removeAttr('checked');
            })
            // 全选复选框触发
            $_table.find('input[name="btSelectAll"]').click(function() {
                // 判断是否选中
                if ($_table.find('input[name="btSelectAll"]').prop("checked") == true) {
                    $_table.find('input[name="btSelectItem"]').each(function() {
                        _TableIDArray.push(parseInt($(this).val()));
                    })
                    _TableIDArray = unique(_TableIDArray);
                } else {
                    $_table.find('input[name="btSelectItem"]').each(function() {
                        if ($(this).prop("checked") == false) {
                            _TableIDArray.splice(_TableIDArray.indexOf(parseInt($(this).val())), 1);
                        }
                    })
                }

            })
            //遍历复选框
            $_table.find('input[name="btSelectItem"]').each(function() {
                if (_TableIDArray.indexOf(parseInt($(this).val())) != -1) {
                    $(this).attr('checked', true);
                }
            })
            $_table.find('input[name="btSelectItem"]').change(function() {
                if ($(this).prop("checked") == true) {
                    _TableIDArray.push(parseInt($(this).val()));
                    $(this).parent().parent().find('td').addClass('active');
                } else {
                    _TableIDArray.splice(_TableIDArray.indexOf(parseInt($(this).val())), 1);
                    $(this).parent().parent().find('td').removeClass('active');
                }
            })
        }
    };
    BootstrapDialog.show({
        title: '版本管理',
        message: strHtml,
        onshown: function(dialog) {
            $_table = $('#portal_gl');
            $_table.bootstrapTable(_status);
            $_table.on('all.bs.table', function(e, name, args) {
                if (name == "editable-hidden.bs.table") {
                    if (args[3] == "save") {
                        var obj = new Object();
                        obj.id = args[1].id;
                        obj.v_type = args[1].v_type;
                        $.ajax({
                            type: "post",
                            url: TempUrl + "hit/updateVersion.action",
                            timeout: 60000,
                            dataType: "json",
                            data: obj,
                            success: function(jsonResult) {
                                var Message = "";
                                Message = jsonResult["message"];

                                if (jsonResult["result"] == 600005) {
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
                    }
                }
            })
        },
        buttons: [{
            label: '新增',
            cssClass: 'btn-primary',
            action: function(dialog) {
                $.ajax({
                    type: "post",
                    url: TempUrl + "hit/getVersions.action?type=1&app_or_por=2",
                    dataType: "json",
                    contentType: "application/x-www-form-urlencoded",
                    success: function(jsonResult) {
                        var version_list = "";
                        $.each(jsonResult, function(i, item) {
                            version_list += '<option value="' + item["id"] + '">' + item["v_name"] + '</option>';
                        });
                        appPor = 2;
                        var _strHtml = "";
                        _strHtml += '<div class="row"><div class="col-sm-12"><div class="form-horizontal" id="FormValidator2">';
                        _strHtml += '<div class="form-group"><label class="col-sm-3 control-label">版本名称</label><div class="col-sm-8"><input type="text" id="versionName3" name="versionName3" class="form-control" placeholder="请输入版本名称"></div></div>';
                        _strHtml += '<div class="form-group"><label class="col-sm-3 control-label">继承版本</label><div class="col-sm-8"><select id="versionState3" name="versionState3" class="selectpicker form-control" data-live-search="true">' + version_list + '</select></div></div>';
                        _strHtml += '</div></div></div>';
                        BootstrapDialog.show({
                            title: '新增版本',
                            message: _strHtml,
                            onshown: function(dialogIt) {
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
                                        errorNotify(null, "选择继承版本！");
                                        return false;
                                    }
                                    var v_name = $("#versionName3").val();
                                    var v_type = $("#versionState3").val();
                                    $.ajax({
                                        type: "get",
                                        url: TempUrl + "hit/extendVersion.action?sonVName=" + v_name + "&parentVId=" + v_type,
                                        contentType: "application/x-www-form-urlencoded",
                                        dataType: "json",
                                        timeout: 60000,
                                        success: function(jsonResult) {
                                            var Message = "";
                                            Message = jsonResult["message"];
                                            if (jsonResult["result"] == 600000) {
                                                errorNotify("", Message, "info");
                                                dialog.close();
                                            } else {
                                                Message = jsonResult["message"];
                                                errorNotify("", Message);
                                            };
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
                    error: function(request, status, err) {
                        errorNotify(null, "获取版本失败");
                    }
                });

            }
        }, {
            label: '删除',
            cssClass: 'btn-primary',
            action: function(dialog) {
                if (_TableIDArray.length != 0) {
                    BootstrapDialog.confirm({
                        title: '删除确认提醒',
                        message: '是否确认删除所选择信息？',
                        closable: true,
                        draggable: true,
                        btnCancelLabel: '取消',
                        btnOKLabel: '确认',
                        callback: function(result) {
                            if (result) {
                                var data = "";
                                del_id = String(_TableIDArray);
                                $.ajax({
                                    type: "post",
                                    url: "http://42.159.123.51:8087/hit/removeOption.action?ids=" + del_id + "&order=1",
                                    timeout: 60000,
                                    contentType: "application/x-www-form-urlencoded",
                                    success: function(jsonResult) {
                                        if (jsonResult["result"] == 600002) {
                                            $('#portal_gl').bootstrapTable('destroy').bootstrapTable(_status);
                                            errorNotify('', jsonResult["message"], "info");
                                        } else if (jsonResult["result"] == 600009) {
                                            Message = jsonResult["message"];
                                            errorNotify('', Message);
                                        } else {
                                            Message = jsonResult["message"];
                                            errorNotify('', Message);
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
                                errorNotify('', "取消删除");
                            }
                        }
                    });
                } else {
                    errorNotify(null, "请勾选需要删除的数据！");
                }

            }
        }]
    });
});

function portal_edit(id) {

    Obligate_4_Array = [];
    var Obligate_4_ArrayData = [];
    var strVersions = "";
    var strColNum = "";
    var strObligate_1 = "";
    var allObj = new Object();
    for (var i = 1; i <= 10; i++) {
        strColNum += '<option value="' + i + '">' + i + '个</option>';
    }
    $.ajax({
        type: "get",
        url: TempUrl + "hit/getPortal.action?id=" + id,
        contentType: "application/x-www-form-urlencoded",
        dataType: "json",
        success: function(jsonResult) {
            allObj = jsonResult;
            Obligate_4_ArrayData = [allObj.por_col1, allObj.por_col2, allObj.por_col3, allObj.por_col4, allObj.por_col5, allObj.por_col6, allObj.por_col7, allObj.por_col8, allObj.por_col9, allObj.por_col10];
            for (var i = 1; i <= allObj.por_colnum; i++) {
                Obligate_4_Array.push(i);
            }
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
                            strHtml += '<br><div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i>hit版本</label><div class="col-sm-6"><select id="HitV2" name="HitV2" class="selectpicker form-control" data-live-search="true"><option value="">选择版本</option>' + strVersions + '</select></div><div class="col-sm-2"><p class="form-control-static" style="display:inline-block;margin-right:15px;"><i class="fa fa-plus-circle" onclick="version_add(2)" data-toggle="tooltip" data-placement="top"></i></p><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i v-on:click="version_del(1)" class="fa fa-minus-circle"></i></p></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">版本日期</label><div class="col-sm-6"><div class="input-group date" id="datetimepicker"><input type="text" id="versiondate2" class="form-control" readonly><span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i> 页别</label><div class="col-sm-3"><select id="Obligate_1_2" name="Obligate_1_2" class="selectpicker col-sm-4 form-control" data-live-search="true"><option value="">选择页别</option>' + strObligate_1 + '</select></div><div class="col-sm-3"><input  id="Obligate_1_2_en"  type="text" class="form-control" readonly="readonly"></div><div class="col-sm-3"><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i v-on:click="style_add(\'1\')" class="fa fa-plus-circle"></i></p><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i v-on:click="version_del(3)" class="fa fa-minus-circle"></i></p><p class="form-control-static"  style="display:inline-block;margin-right:15px;"><i class="fa fa-exclamation-circle"  data-toggle="tooltip" data-placement="top" title="页别，类别，预留维度要有1,2,3级菜单级联关系"></i></p></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i>hit名称</label><div class="col-sm-3"><input type="text" id="HitName2" name="HitName2" class="form-control" placeholder="请输入名称"></div><div class="col-sm-3"><input type="text" id="HitNameE2" name="HitNameE2" class="form-control" placeholder="请输入英文名"></div><div class="col-sm-2"><p class="form-control-static"><i class="fa fa-exclamation-circle"  data-toggle="tooltip" data-placement="top" title="不超过10个的字母，需验证版本号和该字段组合唯一"></i></p></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">hit id</label><div class="col-sm-6"><input type="text" id="HitId2" name="HitId2" class="form-control" readonly></div><div class="col-sm-3"><button v-on:click="dadian_add()" class="btn btn-primary">生成事件</button></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">事件ID</label><div class="col-sm-6"><input type="text" id="HitEventID2" name="HitEventID2" class="form-control" readonly></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label"><i class="fa fa-asterisk"></i>行为类型</label><div class="col-sm-6"><select id="ActionType2" name="ActionType2" class="selectpicker form-control" data-live-search="true"><option value="">选择类型</option><option value="1">user_click</option><option value="2">user_pageview</option><option value="3">user_system</option><option value="4">ad_impression</option><option value="5">ad_click</option><option value="6">error_device</option><option value="7">error_cloud</option><option value="8">business_feedback</option></select></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">描述</label><div class="col-sm-6"><textarea type="textarea" class="form-control" id="Describe2" name="Describe2"></textarea></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">状态</label><div class="col-sm-6"><select id="Status2" name="Status2" class="selectpicker form-control" data-live-search="true"><option value="1">已下线</option><option value="2">正常使用</option><option value="3">新增打点</option></select></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">扩展字段说明</label><div class="col-sm-6"><textarea id="por_col1" type="textarea" class="form-control"></textarea></div></div>';
                            strHtml += '<div class="form-group"><label class="col-sm-3 control-label">refhit</label><div class="col-sm-6"><select id="Refhitid2" name="Refhitid2" class="selectpicker form-control">' + strIs + '</select></div></div>';
                            strHtml += '</div></div></div>';
                            BootstrapDialog.show({
                                title: '修改项信息',
                                message: strHtml,
                                draggable: true,
                                closable: false,
                                onshown: function(dialogRef) {
                                    //$('.selectpicker').selectpicker('refresh');
                                    new Vue({
                                        el: '#VueDiv',
                                        data: {
                                            todos: Obligate_4_Array
                                        },
                                        mounted: function() {
                                            $('.selectpicker').selectpicker('refresh');
                                            $('#HitV2').selectpicker('val', allObj.por_hitV);
                                            $('#Obligate_1_2').selectpicker('val', allObj.por_page);
                                            $("#versiondate2").val(allObj.por_versiondate);
                                            $('#Obligate_1_2_en').val(allObj.pageEname);
                                            $('#HitName2').val(allObj.por_hitname);
                                            $('#HitNameE2').val(allObj.por_hitnameE);
                                            $('#HitId2').val(allObj.por_hitID);
                                            $('#HitEventID2').val(allObj.por_hitEventID);
                                            $('#Describe2').val(allObj.por_describe);
                                            $('#ActionType2').selectpicker('val', allObj.por_actiontype);
                                            $('#Status2').selectpicker('val', allObj.por_status);
                                            $('#por_col1').val(allObj.por_col1);
                                            $('#Refhitid2').selectpicker('val', allObj.por_refhitid);
                                            $('.selectpicker').selectpicker('refresh');

                                            $('[data-toggle="tooltip"]').tooltip();
                                            $("#ShowList").on('click', function() {
                                                $(this).hide();
                                                $("#isList").show();
                                            });
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
                                                                            dialogRef.close();
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
                                                    $("#HitId2").val(strHitID);
                                                } else {
                                                    errorNotify("", "请选择页别");
                                                }
                                                var data = "app_hitV=" + app_hitV + "&hitId=" + strHitID + "&app_or_por=2";
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
                                        }
                                    });
                                    $('#Obligate_1_2').change(function() {
                                        $('#Obligate_1_2_en').val($(this).find("option:selected").attr("data-support"));
                                        $('#HitId2,#HitEventID2').val('');
                                    });
                                },
                                buttons: [{
                                    label: '提交',
                                    cssClass: 'btn-primary',
                                    action: function(dialogRef) {
                                        var obj = new Object();
                                        obj.id = id;
                                        obj.por_hitV = $("#HitV2").val();
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
                                        obj.por_versiondate = $("#versiondate2").val();
                                        obj.por_createtime = moment().format("HH:mm:ss");
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
                                            url: TempUrl + "hit/editPortal.action",
                                            timeout: 60000,
                                            dataType: "json",
                                            data: obj,
                                            success: function(jsonResult) {
                                                var Message = "";
                                                Message = jsonResult["message"];
                                                if (jsonResult["result"] == 600005) {
                                                    $('#table-app').bootstrapTable('refreshOptions', { pageNumber: 1 });
                                                    errorNotify("", Message, "info");
                                                    dialogRef.close();
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
                                    }
                                }, {
                                    label: '取消',
                                    cssClass: 'btn-primary',
                                    action: function(dialogRef) {
                                        dialogRef.close();
                                    },
                                }]
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
        },
        error: function() {
            errorNotify(null, "无法获取版本信息！");
        }
    });

}

function version_add(appPor) {
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
}
var Obligate_4_Array = new Array;

$('#portal_start_add').click(function() {
    window.open("add.html");
});

$("#portal_serach_button").click(function() {
    $('#table-portal').bootstrapTable('refreshOptions', { pageNumber: 1 });
});

$("#portal_download_button").click(function() {
    var ids = 1;
    var por_hitVs = String($('#portal_Versions').val());
    if (por_hitVs == "null") {
        por_hitVs = "";
    }
    var por_page = $('#portal_Obligate_1').val();
    var por_actiontype = $('#portal_Obligate_3').val();
    var por_hitname = $('#portal_hitName').val();
    var por_hitID = $('#portal_hitId').val();
    var por_status = $('#portal_Obligate_4').val();
    if (por_hitVs == "" && por_page == "" && por_actiontype == "" && por_hitname == "" && por_hitID == "" && por_status == "") {
        ids = 0;
    }
    window.open(TempUrl + "hit/exportPortal.action?ids=" + ids + "&por_hitVs=" + por_hitVs + "&por_page=" + por_page + "&por_actiontype=" + por_actiontype + "&por_hitname=" + por_hitname + "&por_hitID=" + por_hitID + "&por_status=" + por_status)
});

function queryParams_portal(params) {
    var _por_hitVs = String($('#portal_Versions').val());
    if (_por_hitVs == "null") {
        _por_hitVs = "";
    }
    var temp = {
        limit: params.limit,
        offset: params.offset,
        por_hitVs: _por_hitVs,
        por_page: $('#portal_Obligate_1').val(),
        por_actiontype: $('#portal_Obligate_3').val(),
        por_hitname: $('#portal_hitName').val(),
        por_hitID: $('#portal_hitId').val(),
        por_status: $('#portal_Obligate_4').val(),

    };
    return temp;
}