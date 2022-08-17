
function createPassword(length) {
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

createPassword(5);
createPassword(10);
createPassword(124);