// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = Math.min(8, Math.max(128));

let lowercase = 'abcdefghijklmnopqrstuvwxyz';

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let specialchar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

let numbers = '0123456789';



function writePassword() {
    let passwordLength = prompt("Choose password length between 8 to 128 characters");
}



function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

