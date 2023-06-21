// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
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
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert ("Please enter a valid length between 8 and 128")
 
    return "";
  }

  var validCharacterSelection =[]

  var acceptUpper = confirm("Would you like to include Upper case characters?");
  var acceptSpecial = confirm("Would you like to include Special Characters?");
  var acceptNumbers = confirm("Would you like to include Numbers?");
  var acceptLower = confirm("Would you like to include lower case characters?");
  if(acceptLower){
    validCharacterSelection += charsLowercase //validCharacterSelection = validCharacterSelection + charsLowercase
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