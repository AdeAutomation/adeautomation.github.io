

/**
This function gets that user enters username and password to login
**/
function validateLoginForm(){
	
    var email = document.getElementById("loginemail").value;
	var password = document.getElementById("password").value;
	localStorage.setItem("storageName", email);
	
	

if (email == "" || password == "") 
    {
		alert("Username and/or password cannot be blank");
		return false;
	}

 return true;

}


/**
This function gets the username of the user and displays it on the 'My Account' page 
**/
function loggedInUser(email){
//var username = document.getElementById("loginemail").value;
document.getElementById("loggedinuser").innerHTML = "Welcome, " + localStorage.getItem("storageName");

}


/**
This function validates contact form inputs
**/

function validateForm(){
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;


if (firstname == "" || lastname == "" || email == "") {
		alert("Please ensure you have entered your names and a valid email address");
		return false;
	}
	
var tel = document.getElementById("tel").value;	
var regex = /^\d{10}$/;
if(tel.match(regex))
{
return true;
}
else
{
alert("Please enter a valid mobile number");
return false;
}

	
}








/**
This function uses if else method to peform arithmetic operations and validate input
**/
function calculateifelse(){

alert("This is a calculator. Click OK to continue");

var a = prompt("Enter the first number: ");
if(a == "" || isNaN(a))
{
alert("Please enter a valid number and try again")
return false;
}


var b = prompt("Enter the second number: ");	
if(b == "" || isNaN(b))
{
alert("Please enter a valid number and try again")
return false;		
}

var operator = prompt("Enter Operator Symbol: ");


if(operator == "+")
{
var result = parseInt(a) + parseInt(b);
}
else
{
if(operator == "-")
{
	var result = parseInt(a) - parseInt(b);	
}
else
{
	if(operator == "/")
	{
		var result = parseInt(a) / parseInt(b);	
	}
	else
	{
		if(operator == "*")
		{
			var result = parseInt(a) * parseInt(b);	
		}
		else
		{
			alert("Operator Not Allowed");
		}
	}
}
}

alert("Answer is: " + result);

}




/**
This function uses if else-if method to peform arithmetic operations and validate input
**/
function calculateIfElseIF(){

alert("This is a calculator. Click OK to continue");

var a = prompt("Enter the first number: ");
if(a == "" || isNaN(a))
{
alert("Please enter a valid number and try again")
return false;
}


var b = prompt("Enter the second number: ");	
if(b == "" || isNaN(b))
{
alert("Please enter a valid number and try again")
return false;		
}

var operator = prompt("Enter Operator Symbol: ");

if(operator == "+")
{
	var result = parseInt(a) + parseInt(b);
}

else if (operator == "-")
{
	var result = parseInt(a) - parseInt(b);
}

else if (operator == "/")
{
	var result = parseInt(a) / parseInt(b);
}

else if(operator == "*")
{
	var result = parseInt(a) * parseInt(b);
}

else
{
	var result= "Operator Not Permitted";
}


alert("THE RESULT is : " + result);
}







/**
This function uses switch-case method to peform arithmetic operations and validate input
**/
function calculateSwitchCase(){

alert("This is a calculator. Click OK to continue");

var a = prompt("Enter the first number: ");
if(a == "" || isNaN(a))
{
alert("Please enter a valid number and try again")
return false;
}


var b = prompt("Enter the second number: ");	
if(b == "" || isNaN(b))
{
alert("Please enter a valid number and try again")
return false;		
}


var operator = prompt("Enter Operator Symbol: ");

switch(operator)
{
case "+":
	var result = parseInt(a) + parseInt(b);
	break;
	
case "-":
	var result = parseInt(a) - parseInt(b);
	break;
	
case "/":
	var result = parseInt(a) / parseInt(b);
	break;
case "*":
	var result = parseInt(a) * parseInt(b);
	break;
default:
	var result = "Operator Not Permitted";
}

alert("MY ANSWER IS : " + result);
}


