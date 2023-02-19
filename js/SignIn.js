function checkSignIn(el) {
  var em_data = el.em_data.value;
  var pas_data = el.pas_data.value;
  var save_data = el.save_data.checked;
  var error = "";
  if (pas_data.length <= 4) error = "Enter a valid password";

  if (error != "") {
    document.getElementById("error").innerHTML = error;
  } else {
    window.location = "./lastpage.html";
  }
  return false;
}
console.log("check");
if (localStorage.email) {
  document.getElementById("em_data").value = localStorage.email;
} else {
  localStorage.email = prompt("Write your value");
}
