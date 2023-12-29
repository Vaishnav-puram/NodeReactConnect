function validate(){
    var fval=document.getElementById("fname").value;
    if(fval ===""){
        document.getElementById("fnameErr").style.display="block";
    }
    else{
        document.getElementById("fnameErr").style.display="none";
    }
    var lval=document.getElementById("lname").value;
    if(lval ===""){
        document.getElementById("lnameErr").style.display="block";
    }else{
        document.getElementById("lnameErr").style.display="none";
    }
    var age=document.getElementById("age").value;
    if(age ===""){
        document.getElementById("ageErr").style.display="block";
    }else{
        document.getElementById("ageErr").style.display="none";
    }
    var mail=document.getElementById("email").value;
    if(mail===""){
        document.getElementById("emailErr").style.display="block";
    }else{
        document.getElementById("emailErr").style.display="none";
    }
}