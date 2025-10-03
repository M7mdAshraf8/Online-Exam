function checkRequired(value){
    if(value != ""){
        return true;
    }
}
/* fullname validation */ 
function checkFullname(value){
    let fullnamePattern=/^[A-Z][a-z]+ [A-Z][a-z]+$/; 
    return fullnamePattern.test(value);
}
/* email validation */ 
function checkEmail(value){
    let emailPattern=/^[A-za-z0-9]+@[A-za-z0-9]+\.[a-zA-Z]{2,}$/; 
    return emailPattern.test(value);
}
/* phone validation */ 
function checkPhone(value){
    let phonePattern=/^(010|012|015|011)[0-9]{8}$/; 
    return phonePattern.test(value);
}
/* password validation */ 
function checkPassword(value){
    //let passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    let passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; 
    return passPattern.test(value);
}
/* conf password validation */ 
function checkConfPass(value){
    //let confPassPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    let confPassPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; 
    return confPassPattern.test(value);
}


function checkRequiredStyle(inputId,spanId,message,color){
    $(inputId).css("borderColor",color)
    $(spanId).text(message);
}