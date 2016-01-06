function getdata() {
    var a = document.getElementById('userName').value;
    var b = document.getElementById('iAmount').value;
    document.getElementById('usr').innerHTML = " UserName: " + a;
    document.getElementById('amt').innerHTML = " Amount: " + b;
    alert("correct");
}

function FormValidationUser() {
    var fn = document.getElementById('userName').value;
    //Firstl Name Validation
    var isVaid = true;
    if (fn == "" || /^[A-Za-z]+$/.test(fn) || fn.length < 3) {
        document.getElementById('userName').style.borderColor = "green";
        document.getElementById('right').style.display = "block";
        document.getElementById('cross').style.display = "none";

        isValid = false;
    } else {
        document.getElementById('userName').style.borderColor = "red";
        document.getElementById('right').style.display = "none";
        document.getElementById('cross').style.display = "block";


    }
    return isValid;
}

function FormValidationAmt() {
    var amount = document.getElementById('iAmount').value;
    var isVaid = true;
    //Amount Validation   
     if (amount == "" || isNaN(amount) || amount <0 ) {

        document.getElementById('iAmount').style.borderColor = "red";
        document.getElementById('right11').style.display = "none";
        document.getElementById('cross11').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('iAmount').style.borderColor = "green";
        document.getElementById('right11').style.display = "block";
        document.getElementById('cross11').style.display = "none";
    }
    return isValid;
}

function FormValidationPwd() {
    var passwd = document.getElementById('iPassword').value;
    var isVaid = true;
    //Password Validation   
    if (passwd == "" || passwd.length < 5) {

        document.getElementById('iPassword').style.borderColor = "red";
        document.getElementById('right22').style.display = "none";
        document.getElementById('cross22').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('iPassword').style.borderColor = "green";
        document.getElementById('right22').style.display = "block";
        document.getElementById('cross22').style.display = "none";
    }

    return isValid;

}
