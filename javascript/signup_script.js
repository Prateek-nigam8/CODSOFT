function toggle_password() {
    const passwordField = document.getElementById("password");
    const passwordField2 = document.getElementById("confirm-password");
	const showPasswordCheckbox = document.getElementById("show-password");

	showPasswordCheckbox.addEventListener("change", function() {
		if (showPasswordCheckbox.checked) {
			passwordField.type = "text";
            passwordField2.type = "text";
		} else {
				passwordField.type = "password";
                passwordField2.type = "password";
		}
	});
}

function validateForm() {
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirm_password").value;
if (password != confirmPassword) {
alert("Passwords do not match!");
return false;
}
return true;
}