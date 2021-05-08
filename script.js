// Assignment code here
var generatePassword = function () {
    // Function for getting password length
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
    };

    // Function for getting parameters for password
    var getParameters = function() {
        var useLowerCase = confirm("Include lowercase characters?");
        var useUpperCase = confirm("Include uppercase characters?");
        var useNumeric = confirm("Include numeric characters?");
        var useSpecial = confirm("Include special characters?");

        var parametersObj = {
            lowerCase: useLowerCase,
            upperCase: useUpperCase,
            numeric: useNumeric,
            special: useSpecial,
            total: useLowerCase + useUpperCase + useNumeric + useSpecial
        }

        return parametersObj;  
    };
  
    // Get parameters for password
    var length = getLength();
    var parameters = getParameters();

    // Check that at least one character type has been selected
    while (parameters.total === 0) {
        alert("Password must have at least one type of character.");
        parameters = getParameters();
    }

    console.log(length);
    console.log(parameters);
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
