var alertInfo = function(str) {
    if ($('.alertify-log-show').length == 0){
        alertify.set({ delay: 2000});
        alertify.error(str);
    }
};

var validateForm = function(){
    var type = $('#problem_form [name="problem_types"]')[0].value;
    var name = $('#problem_form [name="name"]')[0].value;
    var phone = $('#problem_form [name="phone"]')[0].value;;
    var email = $('#problem_form [name="email"]')[0].value;;
    var describe = $('#problem_form [name="describe"]')[0].value;;
    //不为空
    if (type == null || type == ''){
        alertInfo("请选择类型")
        return false;
    }
    if (name == null || name == ''){
        alertInfo("请填写您的姓名")
        return false;
    }
    if ((phone == null || phone == '') && (email == null || email == '')){
        alertInfo("请填写您的手机号或者邮箱")
        return false;
    }
    if (describe == null || describe == ''){
        alertInfo("请填写情况说明")
        return false;
    }
    //判断电话 
    if(!(/^1[3|4|5|8|9][0-9]\d{4,8}$/.test(phone))){
        alertInfo("请填写正确的手机号")
        return false;
    }
    return true;
};
