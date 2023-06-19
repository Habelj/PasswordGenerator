// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //querySelector to target text area
//var passwordTextarea = document.getElementById("password"); //getElementByID methid to target textarea
  //document.getElementById("password").value = password; // Using value attribute to display password generated.

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var charsNumbers = "0123456789"
  var charsLowercase ="abcdefghijklmnopqrstuvwxyz"
  var specialCharacters ="!@#$%^&*()";
  var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLength = parseInt(prompt("enter password length"))
  if(passwordLength < 8 || passwordLength > 126 || isNaN(passwordLength)){
    alert ("Please enter a valid length between 8 and 126")
 
    return "";
  }
  
  var passwordLength = 8 - 128;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

}
// generatePassword();