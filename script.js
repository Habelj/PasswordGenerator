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

  var validCharacterSelection =[]

  var acceptUpper = confirm("Do you like to have Upper case characters?");
  var acceptSpecial = confirm("Do you like to have Special Characters?");
  var acceptNumbers = confirm("Do you like to have Numbers?");
  var acceptLower = confirm("Do you like to have Lower case characters?");
  if(acceptLower){
    validCharacterSelection += charsLowercase // validCharacterSelection = validCharacterSelection + charsLowercase
  }
  if(acceptSpecial){
    validCharacterSelection += specialCharacters
  }
  if(acceptUpper){
    validCharacterSelection += upperCase
  }
  if(acceptNumbers){
    validCharacterSelection += charsNumbers
  }
  console.log(validCharacterSelection)
  if(validCharacterSelection.length === 0){
    alert("Please choose a minimum of one option to generate password")
    return "";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * validCharacterSelection.length);
    password += validCharacterSelection.substring(randomNumber, randomNumber + 1);
  }
  console.log(password)
  return password;
}
// generatePassword();