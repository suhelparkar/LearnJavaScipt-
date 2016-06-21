var validateForm = function () {
    var userFirstName = document.getElementById("firstname").value;
    var userLastName = document.getElementById("lastname").value;
    var userEmail = document.getElementById("email").value;
    var userUserName = document.getElementById("username").value;
    var userPassword = document.getElementById("password").value;
    var userConfirmPassword = document.getElementById("confirmpassword").value;
    var userDOB = document.getElementById("dob").value;
    var userMale = document.getElementById("male").checked;
    var userFemale = document.getElementById("female").checked;

    var validateName = /^[A-Za-z\s]+$/;
    var validateEmail = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validateUsername = /^[A-Za-z0-9\s]+$/;

    var currentYear = new Date().getFullYear();
    var userBirthYear = new Date(userDOB).getFullYear();
    var userAge = currentYear - userBirthYear;

    if (userFirstName === "") {
        alert("Please Enter Your Firstname");
        firstname.focus();
        return false;
    }
    else if (validateName.test(userFirstName) === false) {
        alert("Please Enter Valid Firstname...Alphabets only!");
        firstname.focus();
        return false;
    }
    else if (userLastName === "") {
        alert("Please Enter Your Lastname");
        lastname.focus();
        return false;
    }
    else if (validateName.test(userLastName) === false) {
        alert("Enter Valid Lastname...Alphabets only!");
        lastname.focus();
        return false;
    }
    else if (userEmail === "") {
        alert("Please Enter Your Email Id");
        email.focus();
        return false;
    }
    else if (validateEmail.test(userEmail) === false) {
        alert("Please Enter Valid Email Id");
        email.focus();
        return false;
    }
    else if (userUserName === "") {
        alert("Please Enter Your Username");
        username.focus();
        return false;
    }
    else if (validateUsername.test(userUserName) === false) {
        alert("Please Enter Valid Username...Alphabets & Numbers only!");
        username.focus();
        return false;
    }
    else if (userPassword === "") {
        alert("Please Enter Password");
        password.focus();
        return false;
    }
    else if (userConfirmPassword === "") {
        alert("Please Enter Your Password Again To Confirm");
        confirmpassword.focus();
        return false;
    }
    else if (userDOB === "") {
        alert("Please Enter Your Date of Birth");
        dob.focus();
        return false;
    }
    else if (userAge < 5) {
        alert("Please Enter Valid Date of Birth");
        dob.focus();
        return false;
    }
    else if (userMale === false && userFemale === false) {
        alert("Please Select Your Gender");
        return false;
    }

}
