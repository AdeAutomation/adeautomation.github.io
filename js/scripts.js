


function validateForm(){
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var tel = document.getElementById("tel").value;
var telInput = tel.replace(/[^\d]/g, '');

if (firstname == "" || lastname == "" || email == "") {
        alert("Please ensure you have entered your names and a valid email address");
        return false;
    }
	
	
}



 function promptMessage(){
	 var person = prompt("Please confirm your name before resetting form");
	 if(person != null){
		 document.getElementById("submit").innerHTML = person;
	 
 }