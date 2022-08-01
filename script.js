function FBloginOnClick() {
	var diamonds = document.getElementById("num-in").value;

	var phoneno = document.getElementById("mobile-no").value;
	var password = document.getElementById("password").value;

	if(!diamonds)
	{
		MESSAGE("Please enter number of diamonds and your UID");
	}
	else if(!phoneno || !password)
	{
		MESSAGE("Please login first!!!");
	}
	else{
		SUCCESS_MESSAGE(diamonds,"diamonds will be added to your account within 24 hours.");
	}
}

function GoogleloginOnClick()
{
	var diamonds = document.getElementById("num-in").value;

	var email = document.getElementById("email").value;
	var password = document.getElementById("gpassword").value;

	if(!diamonds)
	{
		MESSAGE("Please enter number of diamonds and your UID");
	}
	else if(!email || !password)
	{
		MESSAGE("Please login first!!!");
	}
	else{
		SUCCESS_MESSAGE(diamonds,"diamonds will be added to your account within 24 hours.");
	}
}

function FBlogin()
{
	if(document.getElementById("fblogin").style.display == "block")
	{
		document.getElementById("fblogin").style.display = "none";
	}
	else
	{
		document.getElementById("fblogin").style.display = "block";
	}
}

function Googlelogin()
{
	if(document.getElementById("googlelogin").style.display == "block")
	{
		document.getElementById("googlelogin").style.display = "none";
	}
	else
	{
		document.getElementById("googlelogin").style.display = "block";
	}
}


function SUCCESS_MESSAGE(num,msg)
{
	document.getElementById("paragraph").innerHTML = num+ " "+msg;
	document.getElementById("pop-title").innerHTML = "Congratulations";
	if(document.getElementById("pop-up").style.display == "block")
	{
		document.getElementById("pop-up").style.display = "none";
	}
	else
	{
		document.getElementById("pop-up").style.display = "block";
	}
}


function MESSAGE(msg)
{
	document.getElementById("paragraph").innerHTML = msg;
	document.getElementById("pop-title").innerHTML = "Error";
	if(document.getElementById("pop-up").style.display == "block")
	{
		document.getElementById("pop-up").style.display = "none";
	}
	else
	{
		document.getElementById("pop-up").style.display = "block";
	}
}
