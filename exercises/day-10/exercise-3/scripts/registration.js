//this is the main function 
function checkForm() 
{
//collecting user inputs 
firstname = document.getElementById("firstname").value;
surname = document.getElementById("surname").value;
age = document.getElementById("age").value;
//calls another function IsNumeric 
ageNumeric = IsNumeric(age);
address = document.getElementById("address").value;
phone = document.getElementById("phone").value;
//calls another function IsNumeric 
phoneNumeric = IsNumeric(phone);
email = document.getElementById("email").value;
//calls another function checkEmail
emailResult = checkEmail(email);
password = document.getElementById("password").value;
customer = document.getElementById("customer").value;

//Enter your code here: checking for empty inputs and displaying error 
    

}


//checks via reg ex if age and phone numbers are numbers
function IsNumeric(numstr)
{
    mystring = numstr;
    if (mystring.match(/^\d+$/ ) ) {
    
        return true;
    }else{
        return false;
    }
}

//checks if email is in proper email format
function checkEmail(inputvalue){	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)) {         
        return true;
    }else{   
        return false;
    }
    
}



