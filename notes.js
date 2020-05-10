// First thing that happens when user opens page:
// See the page with the generateBtn
// User will click generateBtn
// ====== STEP 1 ========= //
// Then the prompt will come up
 // var lower = confirm("Do you want lowercase characters?") (Store this in a variable)
 // confirm("Do you want uppercase characters?")
 // confirm("Do you want special characters?")
 // confirm("Do you want numbers?")
 // prompt("How many characters do you want?(Must be between 8 and 128 characters");
   // if passwordLength is less than 8 characters && passwordLength is greater than 128 characters{
     // alert("Hey you wrong. Please enter a number greater than 8 and less than 128")
   // }
// ======== STEP 2 ========== //
// GENERATING THE PASSWORD
// How do we use all these callings in the prompts and confirms to create a randomized password?
// Create more if statements but for different scenarios
// If I have special characters and numbers, return a password with special characters and numbers
// Four if statements:
 // If lower === true, return some lowercase from var lowercase
 // If uppercase, return some characters from var uppercase
 // If special, return some characters from var specialchar
 // If numbers, return some characters from var numbers

 //gonna need a for loop & an array of all the variables//

// ======== STEP 3 ========== //
// WRITING PASSWORD TO THE PAGE
// Hint: this has already been done for you, don't change it


function generatePassword(uppercase, lowercase, numbers, symbols, passwordLength) {
    var generateArray = []
    for (var counter = 0; counter < passwordLength; counter++){
      var upperC = generateduppercase();
      var lowerC = generatedlowercase();
      var nums = generatednumbers();
      var syms = generatedsymbols();
    }
  }

  return "password";