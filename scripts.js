
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
function switchCase(){

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


