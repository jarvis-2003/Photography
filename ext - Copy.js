function validate(event){
    var namevalidate = validatename();
    var numbervalidate= validatenumber();
    var emailvalidate= validatemail();
    var agevalidate= validateage();
    var filevalidate= validatefilesize();

    console.log(namevalidate);
    console.log(numbervalidate);
    console.log(emailvalidate);
    console.log(agevalidate);
    console.log(filevalidate);

    if(namevalidate == false || numbervalidate == false || emailvalidate == false || agevalidate == false || filevalidate == false)
    {
        event.preventDefault();
        return false;
    }

}

function validatename(){
    var name = document.forms["form"]["name"].value;
    if(name == null || name == "")
    {
        alert("name cannot be blank");
        return false;
    }
    else if((name < 'a' && name >'z') || (name < 'A' && name < 'Z'))
    {
        alert("input valid characters only");
        return false;
    }
}

function validatenumber(){
var number = document.forms["form"]["contact-number"].value;
if(number == null || number == "")
    {
        document.getElementById("numloc").innerHTML = "number field cannot empty";
        return false;
    }
else if(isNaN(number))
{
        document.getElementById("numloc").innerHTML = "Enter Numeric values only";
        return false;
}
else if((number.toString().length) != 10)
{
    document.getElementById("numloc").innerHTML = "Enter 10 digit number.";
    return false;
}

}
function validatemail()
{
    var email = document.forms["form"]["emailid"].value;
    if(email == null || email == "")
    {
        document.getElementById("emailloc").innerHTML="Email field cannot be empty";
        return false;
    }
}
function validateage()
{
    var age = document.forms["form"]["age"].value;
    if(isNaN(age))
    {
        document.getElementById("ageloc").innerHTML="enter numeric value";
        return false;
    }
    else if((age.toString().length) > 2)
    {
        document.getElementById("ageloc").innerHTML="Enter age below 100";
        return false;
    }
    else if(age == null || age == "")
    {
        document.getElementById("ageloc").innerHTML="field cannot be empty";
        return false;
    }
}

function validatefilesize()
{
    var size = document.getElementById("filesize")
    if(size.files.length == 0)
    {
        alert("please upload your file");
        return false;
    }

    size = document.getElementById('filesize').files[0].size;      //this returns the size of file in bytes.
    if(size >= 26214400)
    {
        alert("File size too big limit:25mb");
        return false;
    }
}



function validatelogin()
{
    var username = document.forms["login_form"]["username"].value;
    if(username == "" || username == null)
    {
        alert("Can't be left empty.");
        return false;
    }

    var password = document.forms["login_form"]["password"].value;
    if(password.toString().length == 0)
    {
        document.getElementById("pass").innerHTML="enter the password field";
        return false;
    }
    else if(password.toString().length > 6)
    {
        document.getElementById("pass").innerHTML="Enter six digit password only..!"
        return false;
    }
}



function validateSignup(event)
{
    if( validatesignup_name() == false ||  validatesignup_number() == false || validatesignup_matchpass() == false)
    {
        event.preventDefault();
        return false;
    }

}
function validatesignup_name()
{
    var nameRegex = /^[a-zA-Z\-0-9@._]+$/;
    var username = document.forms["Signup_form"]["username"].value;
    if(username == null || username == "")
    {
        alert("Please enter username");
        return false;
    }
    else if((username.match(nameRegex)) == null)
    {
        alert("enter valid username.");
        return false;
    }
}
function validatesignup_number()
{
var num = document.forms["Signup_form"]["spnumber"].value;
if(num == null || num == "")
    {
        document.getElementById("numlock").innerHTML = "number field cannot empty";
        return false;
    }
else if(isNaN(num))
{
        document.getElementById("numlock").innerHTML = "Enter Numeric values only";
        return false;
}
else if((num.toString().length) != 10)
{
    document.getElementById("numlock").innerHTML = "Enter 10 digit number.";
    return false;
}

}
function validatesignup_matchpass()
{
    var password1 =  document.forms["Signup_form"]["password"].value;
    var password2 =  document.forms["Signup_form"]["confpass"].value;
    if((password1.toString()).match(password2.toString()) == null)
    {
        document.getElementById("validate_pass").innerHTML="Password doesnot match."
        return false;
    }
    else if(password1.toString().length >6 || password2.toString().length >6)
    {
        document.getElementById("validate_pass").innerHTML="password length max 6.";
        return false;
    }
    else if(password1.toString().length == 0 || password2.toString().length == 0)
    {
        document.getElementById("validate_pass").innerHTML="password field can't be null";
        return false;
    }

}

function show_pass()
{
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if (pass1.type === "password") {
        pass1.type = "text";
      } else {
        pass1.type = "password";
    }
    if (pass2.type === "password") {
        pass2.type = "text";
      } else {
        pass2.type = "password";
    }


}