$(document).ready(function(){
    getUsers=JSON.parse(localStorage.getItem("user"));
    function isEqual(arr, key, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][key] === value) {
                return true;
            }
        }
        return false;
    }

    $(".form-container").submit(function(){
        let usernameVal=$("#username").val();
        let passwordValue=$("#password").val();
        let isValid=true;
        if(!checkFullname(usernameVal)){
            isValid=false;
        }

        if(!checkPassword(passwordValue)){
            isValid=false;
        }

        if(isValid == true){
            if(isEqual(getUsers,"usernameLS",$("#username").val()) && isEqual(getUsers,"passwordLS",$("#password").val())){
                personName = sessionStorage.setItem("username",$("#username").val());
                $("#username").val("");
                $("#password").val("");
            }
        }
        return isValid;
    })

    $("#username").blur(function(){
        if(!checkFullname($("#username").val())){
            checkRequiredStyle("#username","#username-error","Please enter a valid fullname.","red");
        }else if(!isEqual(getUsers, "usernameLS",$("#username").val())){
            checkRequiredStyle("#username","#username-error","Username not found , please register.","red");
        }else{
            checkRequiredStyle("#username","#username-error","","green");
        }
    });
    $("#password").blur(function(){
        if(!checkPassword($("#password").val())){
            checkRequiredStyle("#password","#password-error","Password isn't valid.","red");
        }else if(!isEqual(getUsers,"passwordLS",$("#password").val())){
            checkRequiredStyle("#password","#password-error","Password isn't correct","red");
        }else{
            checkRequiredStyle("#password","#password-error","","green");
        }
    });

    $(".showPass").click(function(){
        if ($("#password").attr("type") === "password") {
            $("#password").attr("type", "text");
            $(".showPass").removeClass("fa-eye")
            $(".showPass").addClass("fa-eye-slash")
        } else {
            $("#password").attr("type", "password");
            $(".showPass").removeClass("fa-eye-slash")
            $(".showPass").addClass("fa-eye")
        }
    })

    $("#register").click(function(){
        location.assign("form.html");
    })
})