


/**
INDEX PAGE - This function is used in the loop game to display multiplication table for input numbers and validate input fields
 **/
function add() {
	var x = parseInt(document.getElementById("x").value);
	var y = parseInt(document.getElementById("y").value);
	var xField = document.getElementById("x").value;
	var yField = document.getElementById("y").value;
	var totalOutput = "";

	if (xField == "" || yField == "" || isNaN(xField) || isNaN(yField)) {
		alert("Please enter a number in both fields");
		return false;
	}

	var j = 1;
	for (i = 1; i <= y; i = x * j) {
		var c = i;
		totalOutput = totalOutput + x + " * " + j + " = " + i + "<br>";
		j = j + 1;
	}
	document.getElementById("demo").innerHTML = totalOutput;
}

/**
This function gets that user enters username and password to login
 **/
function validateLoginForm() {

	var email = document.getElementById("loginemail").value;
	var password = document.getElementById("password").value;
	localStorage.setItem("storageName", email);
	var limit = 20;

	if (email == "" || password == "" || email.length > limit) {
		alert("Please note: Username and/or password cannot be blank and username cannot be more than 20 characters");
		return false;
	}

	return true;

}

/**
This function validates that the password field on login page only accepts alphanumeric inputs
**/
function alphanumeric() {
	var regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
	var password = document.getElementById("password").value;

	if (password.match(regex)) {
		return true;
	} else {
		alert("Your password must be between 8 and 10 characters, contains at least one digit and one alphabet, and must not contain special characters. If your password is correct, ensure that your username is also correct");
		return false;
	}
}

/**
This function identifies invalid login credentials throws an error
**/
function loginPageLoad() {
	var url_string = window.location.href;
	var params = window.location.search.substring(1);
	var paramKeyValue = params.split("&")[0];
	var paramKey = decodeURIComponent(paramKeyValue.split("=")[0]);
	var paramValue = decodeURIComponent(paramKeyValue.split("=")[1]);
	if (paramKey === 'invalidCredentials' && paramValue === 'true') {
		$('.error').show();
		$('.success').hide();
		$('.info').hide();
	}
	
	if (paramKey === 'firstname' && paramValue !== '') {
		$('#registerSuccessMessage').html('Welcome ' + paramValue + ', Please check your email inbox to complete your registration.');
		$('.error').hide();
		$('.success').hide();
		$('.info').show();
	}
}

/**
This function validates that the expected login credentials are submitted
**/
function validateLoginCredentials() {

	var c = "xyzabc";
	var d = c.substring(1, 3);
	console.debug("value of d is : " + d);

	var url_string = window.location.href;
	console.log("search: " + window.location.search);
	console.log("search: " + window.location.search.substring(0));
	console.log("search: " + window.location.search.substring(1));
	var params = window.location.search.substring(1);
	var fullUserName = params.split("&")[0];
	var fullPassword = params.split("&")[1];
	console.log("User: " + fullUserName);
	console.log("password: " + fullPassword);
	var userName = decodeURIComponent(fullUserName.split("=")[1]);
	var password = fullPassword.split("=")[1];
	console.log("User Name : " + userName);
	console.log("Password : " + password);

	if (userName == "testuser@email.com" && password == "password12") {

		document.getElementById("loginemail").innerHTML = "Welcome, " + userName;

		$(document.body).show();
	} else {
		window.location = "login.html?invalidCredentials=true";
	}

}

/**
This function gets the username of the user and displays it on the 'My Account' page
 **/
function loggedInUser(email) {
	document.getElementById("loggedinuser").innerHTML = "Welcome, " + localStorage.getItem("storageName");

}

/**
This function validates registration form inputs
 **/

function validateForm() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;

	if (firstname == "" || lastname == "" || email == "") {
		alert("Please ensure you have entered your names and a valid email address");
		return false;
	}

	var tel = document.getElementById("tel").value;
	var regex = /^\d{10}$/;
	if (tel.match(regex)) {
		return true;
	} else {
		alert("Please enter a valid mobile number");
		return false;
	}

}

