/////////////////////////////////////////////////////////////////////////////
//



function validation(){
var firstname = document.getElementById("firstname").value;
if (firstname == "") {
        alert("Name must be filled out");
        return false;
    }
}


function submitForm(){
	document.getElementById('cform').submit();
	alert("Thank you. Your form has been successfully submitted");

}

