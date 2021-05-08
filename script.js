// Assignment code here
var generatePassword = function () {
    var getLength = function () {
        passwordLength = prompt("Please enter a length for your password. Minimum of 8 characters, maximum of 128 characters.");
        passwordLength = parseInt(passwordLength);

        // Checks that input is a number
        if (!passwordLength) {
            alert("Please enter a number.");
            getLength();
        }

        // Checks that input is correct length
        if (passwordLength < 8) {
            alert("Password must be at least 8 characters long.");
            getLength();
        } else if (passwordLength > 128) {
            alert("Password cannot be more than 128 characters long.");
            getLength();
        }

        return passwordLength;
    }
    
    // Get parameters for password
    var length = getLength();
    var lowerCase = confirm("Include lowercase characters?");
    var upperCase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");

    console.log(length);
    console.log(lowerCase);
    console.log(upperCase);
    console.log(numeric);
    console.log(special);

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
