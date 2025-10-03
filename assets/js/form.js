$(document).ready(function(){
    function LocalStorage(){
        let usernameVal=$("#name").val();
        let passwordValue=$("#password").val();
        let phoneValue=$("#phone").val();
        let emailValue=$("#email").val();
        const UserName = {
            usernameLS : usernameVal,
            passwordLS : passwordValue,
            phoneLS    : phoneValue,
            emailLS    : emailValue
        };
        function isEqual(arr, key, value) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][key] === value) {
                    return true;
                }
            }
            return false;
        }
        function Empty(){
            $("#name").val("");
            $("#phone").val("");
            $("#email").val("");
        }
        getUsers=JSON.parse(localStorage.getItem("user"));
            if(localStorage.getItem('user') === null){
                alert("You successfully registered ");
                arrUsers=[];
                arrUsers.push(UserName);
                Users=JSON.stringify(arrUsers);
                localStorage.setItem("user" , Users);
                Empty();
            }else if(isEqual(getUsers,"usernameLS",usernameVal) && isEqual(getUsers,"emailLS",emailValue)){
                alert("The account already exists");
                Empty();
            }else{
                alert("You successfully registered ");
                getUsers.push(UserName);
                UsersLS=JSON.stringify(getUsers);
                localStorage.setItem("user" , UsersLS);
                Empty();
            }
        
    }

    $("#RegForm").submit(function(){
        let usernameVal=$("#name").val();
        let passwordValue=$("#password").val();
        let confPassValue=$("#conf-password").val();
        let phoneValue=$("#phone").val();
        let emailValue=$("#email").val();
        let isValid=true;

        if(!checkFullname(usernameVal)){
            isValid=false;
        }
        
        if(!checkEmail(emailValue)){
            isValid=false;
        }
        
        if(!checkPhone(phoneValue)){
            isValid=false;
        }
        
        if(!checkPassword(passwordValue)){
            isValid=false;
        }
        
        if(!checkConfPass(confPassValue)){
            isValid=false;
        }

        if(confPassValue != passwordValue){
            isValid=false;
        }

        if(isValid == true){
            LocalStorage();
        }
        return isValid;
    })

    $("#name").blur(function(){
        if(!checkFullname($("#name").val())){
            checkRequiredStyle("#name","#username-error","Please enter a valid fullname.","red");
        }else{
            checkRequiredStyle("#name","#username-error","","green");
        }
    });
    $("#email").blur(function(){
        if(!checkEmail($("#email").val())){
            checkRequiredStyle("#email","#email-error","Please enter a valid email address.","red");
        }else{
            checkRequiredStyle("#email","#email-error","","green");
        }
    });

    $("#phone").blur(function(){
        if(!checkPhone($("#phone").val())){
            checkRequiredStyle("#phone","#phone-error","Please enter a valid 11-digit phone number.","red");
        }else{
            checkRequiredStyle("#phone","#phone-error","","green");
        }
    });

    $("#password").blur(function(){
        if(!checkPassword($("#password").val())){
            checkRequiredStyle("#password","#password-error","Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter and one number.","red");
        }else{
            checkRequiredStyle("#password","#password-error","","green");
        }
    });

    $("#conf-password").blur(function(){
        if(!checkConfPass($("#conf-password").val())){
            checkRequiredStyle("#conf-password","#confPass-error","confirm password isn't valid.","red");
        }else if($("#conf-password").val() != $("#password").val()){
            checkRequiredStyle("#conf-password","#confPass-error","Passwords don't match.","red");
        }else{
            checkRequiredStyle("#conf-password","#confPass-error","","green");
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

    $(".showCPass").click(function(){
        if ($("#conf-password").attr("type") === "password") {
            $("#conf-password").attr("type", "text");
            $(".showCPass").removeClass("fa-eye")
            $(".showCPass").addClass("fa-eye-slash")
        } else {
            $("#conf-password").attr("type", "password")
            $(".showCPass").removeClass("fa-eye-slash")
            $(".showCPass").addClass("fa-eye")
        }
    })
});