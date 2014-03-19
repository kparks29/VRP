
var welcomeFormValidation = function() {
	var validation = document.getElementById("agree").checked;
	if (validation) {
		window.location.href = "/videos/demo";
	}
	else {
		alert("please agree to terms before proceeding");
	}

}