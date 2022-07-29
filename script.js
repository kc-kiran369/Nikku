function loginOnClick() {
	var diamonds = document.getElementById("num-in").value;
	var uid = document.getElementById("uid-id").value;

	var phoneno = document.getElementById("mobile-no").value;
	var password = document.getElementById("password").value;

	if(!diamonds || !uid)
	{
		ERROR("Please enter number of diamonds and your UID");
	}
	else if(!phoneno || !password)
	{
		ERROR("Please enter valid phone no or password");
	}
	else{
		TogglePopUp(diamonds,uid," diamonds has been added to ");
	}
}

function TogglePopUp(diam,uid,msg)
{
	document.getElementById("paragraph").innerHTML = diam + msg + uid;
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
