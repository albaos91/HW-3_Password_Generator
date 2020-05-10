//Declare variables, prompts and confirms//

var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var password = ""

var lowercase = confirm("Do you want lowercase characters?");
//console.log (lowercase);//

var uppercase = confirm("Do you want uppercase characters?");
//console.log (uppercase);//

var symbols = confirm("Do you want special characters?");
//console.log (symbols);//

var numbers = confirm("Do you want numbers?");
//console.log (numbers);//

var passwordLength = prompt("How long do you want the password to be? (Choose 8-128 characters)");
//console.log (passwordLength);//

if (passwordLength < 8 || passwordLength > 128){
  alert("Nope. Try again! You must enter 8-128 characters");
}

//Generate the password//

  function writePassword() {
    var password = generatePassword();
     var passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   }
   
   generateBtn.addEventListener("click", writePassword);
   
   




