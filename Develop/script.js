// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Generation
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charsetUpper = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
  var charsetLower = "abcdefghijklmnopqrstuvwxyz";
  var charsetSpecial =  "!#$%&'()*+-./:;<=>?@[_`{|}~";
  var charsetNumber = "0123456789";

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Character Criteria Prompts

//Password Length Prompts plus under-min and over-max alerts

//Display Generated Password in Text Area


