// Assignment Code
var generateBtn = document.querySelector("#generate");
//Character sets
var passwordText = document.querySelector("#password");
var charsetUpper = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var charsetLower = "abcdefghijklmnopqrstuvwxyz";
var charsetSpecial =  "!#$%&'()*+-./:;<=>?@[_`{|}~";
var charsetNumber = "0123456789";
// Password Generation
function generatePassword(Length) {
  var password = '';
  var passwordchar ="";
//creates prompt for number of desired character
  var passwordLengthUser = prompt("How long would you like your password to be? It must be between 8-128 character.");
  passwordLengthUser = parseInt(passwordLengthUser);
// creates alerts for non fulfilled min max
if (passwordLengthUser < 8) {
alert("Password must have more than 7 characters!");
return ("");
}
if (passwordLengthUser > 128) {
  alert("Password must be below 128 Characters");
  return ""
  }
  //  confirm boolean for lowercase "yes or no"
var lowercaseCharactersChoice = confirm("Would you like for there to be lowercase letters in your password?");
if (lowercaseCharactersChoice) {
passwordchar += charsetLower;
}
//  confirm boolean for uppercase "yes or no"
var uppercaseCharactersChoice = confirm("How about a few uppercase letters?");
if (uppercaseCharactersChoice) {
passwordchar += charsetUpper;
}

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Password Character Criteria Prompts

//Password Length Prompts plus under-min and over-max alerts

//Display Generated Password in Text Area


