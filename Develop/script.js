
function createPassword(length) {
  let password = ''; 
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = length;

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  for (i=0; i<length; i++) {
    password += chars[array[i] % chars.length]

  }


}

createPassword(5);