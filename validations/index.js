document.getElementById("myForm").addEventListener('submit', function (event) {
    if (!validate(event)) {
        event.preventDefault();
    } else {
        console.log(formData);
        var formData = new FormData(event.target);
        for (var ele of formData.entries()) {
            if(ele[0]==='hob'){
                continue;
            }
            localStorage.setItem(ele[0], ele[1]);
        }
        var hobbies=[];
        formData.getAll('hob').forEach((val)=>{
            hobbies.push(val);
        })
        localStorage.setItem("hobbies",hobbies.join(","));
        var selectedDegree=formData.get('deg');
        localStorage.setItem("degree",selectedDegree);
        event.preventDefault();
        window.location.href="result.html";
    }
})
function validate(event) {
    console.log(event);
    var validF=validateFirstName();
    var validL=validateLastName();
    var validA=validateAge();
    var validE=validateEmail();
    var validP=validatePassword();
    return validF&& validL && validA && validE && validP;
}
function validateFirstName() {
    var fval = document.getElementById("fname").value;
    if (fval === "") {
        document.getElementById("fnameErr").style.display = "block";
        return false;
    }
    else {
        document.getElementById("fnameErr").style.display = "none";
        return true;
    }
}
function validateLastName() {
    var lval = document.getElementById("lname").value;
    if (lval === "") {
        document.getElementById("lnameErr").style.display = "block";
        return false;
    } else {
        document.getElementById("lnameErr").style.display = "none";
    }
    return true;
}
function validateAge() {
    var age = document.getElementById("age").value;
    if (age === "") {
        document.getElementById("ageErr").style.display = "block";
        return false;
    } else {
        document.getElementById("ageErr").style.display = "none";
       
    }
    return true;
}
function validateEmail() {
    var mail = document.getElementById("email").value;
    if (mail === "") {
        document.getElementById("emailErr").style.display = "block";
        document.getElementById('emailFormatErr').style.display = "none";
        return false;
    } if (!mail.match("^[a-z].*@gmail.com$")) {
        document.getElementById("emailErr").style.display = "none";
        document.getElementById('emailFormatErr').style.display = "block";
        return false;
    }
    document.getElementById("emailErr").style.display = "none";
    document.getElementById('emailFormatErr').style.display = "none"
    return true;

}
function validatePassword() {
    var pass = document.getElementById("pass").value;
    if (pass === "") {
        document.getElementById("passErr").style.display = "block";
        document.getElementById("passFormatErr").style.display = "none";
        return false;
    }
    if(!pass.match("^[A-Z].{7,}$")){
        document.getElementById("passErr").style.display = "none";
        document.getElementById("passFormatErr").style.display = "block";
        return false;
    }
    document.getElementById("passErr").style.display = "none";
    document.getElementById("passFormatErr").style.display = "none";
    return true;
}
// function validateGender() {
//     console.log("inside checkgender()")
//     var radios = document.getElementsByClassName("gender");
//     var flag = false;
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             console.log(true)
//             flag = true;
//             break;
//         }
//     }
//     if (!flag) {
//         document.getElementById("genErr").style.display = "block";
//         return false;
//     } else {
//         document.getElementById("genErr").style.display = "none";
//         return true;
//     }
// }