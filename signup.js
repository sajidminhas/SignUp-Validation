const signUpButton = document.querySelector("button");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

function validateSignUp() {
  const emailText = document.getElementById("email").value;
  const isNotEmpty = emailText !== "";
  const passwordText = password.value;
  const passwordIsGood = validatePassword(passwordText);
  if (isNotEmpty && passwordIsGood) {
    message.style.color = "green";
    message.innerText = "Welcome!" + " " + emailText;
  } else {
    message.style.color = "red";
    message.innerText = "email missing or incorrect password";
  }
}
signUpButton.addEventListener("click", validateSignUp);

function validatePassword(pw) {
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return pattern.test(pw);
}