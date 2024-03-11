function validate() {
    
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var course = document.getElementById('course');

    //for gender validation
    var gender = document.reg_form.gender;

    if (fname.value.length <= 0) {
        alert("Name is required");
        fname.focus();
        return false;
    }
    if (lname.value.length <= 0) {
        alert("Last Name is required");
        lname.focus();
        return false;
    }
    if (address.value.length <= 0) {
        alert("Address is required");
        address.focus();
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email Id is required");
        email.focus();
        return false;
    }
    if (mobile.value.length <= 0) {
        alert("Mobile number is required");
        mobile.focus();
        return false;
    }
    if (course.value == "select course") {
        alert("Course is required");
        course.focus();
        return false;
    }
    return false;
}

/*

    missing  validations
     - phone is a number
     - email in proper fortmat

    look at day 10- additional examples and try these on your own

*/