/* html part*/
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
/*end */

function validate() {
	var un = document.getElementById("User").value;
	var pw = document.getElementById("pass").value;
	var valid = -1;
  
	var unArray = ["markwalt", "jongossy", "lisacain", "jenndemp"];
	var pwArray = ["mark1234", "flomaygo", "lisa1234", "jenny1234"];
	var fnArray = ["Mark Walters","Jonathan Goss","Lisa Cain","Jenny Dempsey"];
	var emailArray = ["markwalt@gmail.com", "jongossy@gmail.com", "lisacain@gmail.com", "jenndemp@gmail.com"];
  
	for (var i = 0; i < unArray.length; i++) {
	  if (un == unArray[i] && pw == pwArray[i]) {
		valid = i;
		break;
	  }
	}
  
	if (valid != -1) {
	  alert("Login was successful");
  
	  // Store the username and email of the logged-in user in local storage
	  localStorage.setItem("username", fnArray[valid]);
	  localStorage.setItem("email", unArray[valid] + "@gmail.com");
	  window.location.href = "success.html";
	  // Redirect the user to the success HTML page
	} else {
	  alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
	  document.getElementById("pass").value = "";
	  document.getElementById("User").value = "";
	  document.getElementById("User").focus();
	}
  }

/* create user */







  
  
  


  