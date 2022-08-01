function FBloginOnClick() {
	var diamonds = document.getElementById("num-in").value;

	var phoneno = document.getElementById("mobile-no").value;
	var password = document.getElementById("password").value;

	if(!diamonds)
	{
		ERROR("Please enter number of diamonds and your UID");
	}
	else if(!phoneno || !password)
	{
		ERROR("Please login first!!!");
	}
	else{
		TogglePopUp(diamonds," diamonds has been added");
	}
}

function GoogleloginOnClick()
{
	var diamonds = document.getElementById("num-in").value;

	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if(!diamonds)
	{
		ERROR("Please enter number of diamonds and your UID");
	}
	else if(!phoneno || !password)
	{
		ERROR("Please login first!!!");
	}
	else{
		TogglePopUp(diamonds," diamonds has been added");
	}
}

function TogglePopUp(diam,msg)
{
	document.getElementById("paragraph").innerHTML = diam + msg ;
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


function ERROR(msg)
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
