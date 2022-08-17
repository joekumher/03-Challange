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

  var passwordLengthUser = prompt("How long would you like your password to be? It must be between 8-124 character.");
  passwordLengthUser = parseInt(passwordLengthUser);

if (passwordLengthUser < 8) {
alert("Password must have more than 7 characters!");
return ("");
}
if (passwordLengthUser > 128) {
  alert("Password must be below 128 Characters");
  return ""
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

//Password Character Criteria Prompts

//Password Length Prompts plus under-min and over-max alerts

//Display Generated Password in Text Area


