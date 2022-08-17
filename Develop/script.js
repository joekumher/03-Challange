
function createPassword(length=8) {
  let password = ''; 
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = length;

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  for (i=0; i<length; i++) {
    password += chars[array[i] % chars.length]

  }
  console.log(password)
  return password;


}

document.getElementById('generate').addEventListener('click',createPassword );

var length = Number(prompt("Enter a password length between 8 and 128")),
  chars = prompt("Enter a character type: special, numeric, uppercase, lowercase."),

  password = createPassword();
  document.getElementById("password").value = password;


