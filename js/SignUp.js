function checkSignUp(el) {
  var em_data = el.em_data.value;
  var pas_data = el.pas_data.value;
  var log_data = el.log_data.value;
  var pas1_data = el.pas1_data.value;
  var save_data = el.save_data.checked;
  var error = "";

  if (log_data.length <= 4) error = "Enter a valid login";
  else if (pas_data.length <= 4) error = "Enter a valid password";
  else if (pas_data != pas1_data) error = "Passwords should match";

  if (error != "") {
    document.getElementById("error").innerHTML = error;
  } else {
    window.location = "./welcome.html";
  }
  return false;
}
