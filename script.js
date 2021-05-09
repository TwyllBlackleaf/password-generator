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

    // Make an array of only the character types that were selected
    var chosenTypes = [];
    if (parameters.lowerCase) {
        chosenTypes.push("lowerCase");
    }
    if (parameters.upperCase) {
        chosenTypes.push("upperCase");
    }
    if (parameters.numeric) {
        chosenTypes.push("numeric");
    }
    if (parameters.special) {
        chosenTypes.push("special");
    }

    console.log(chosenTypes);

    // Function for determining which type of character to generate for an individual character
    var characterType = function() {
        var type = chosenTypes[Math.floor(Math.random() * chosenTypes.length)];
        return type;
    }

    // Function for randomly selecting a special character in Unicode, except for " and \
    var makeSpecialCharacter = function() {
        var selection = Math.floor(Math.random() * 31);
        var specialCharacter = "";
        if (selection < 2) {
            specialCharacter = String.fromCharCode(32 + selection);
        } else if (selection < 15) {
            specialCharacter = String.fromCharCode(33 + selection);
        } else if (selection < 22) {
            specialCharacter = String.fromCharCode(43 + selection);
        } else if (selection === 22) {
            specialCharacter = String.fromCharCode(69 + selection);
        } else if (selection < 27) {
            specialCharacter = String.fromCharCode(70 + selection)
        } else if (selection < 31) {
            specialCharacter = String.fromCharCode(96 + selection);
        }
        return specialCharacter;
    }

    // Main function to generate password
    var password = function() {
        var word = "";
        var newCharacter = ""
        for (var i = 0; i < length; i++) {
            switch (characterType()) {
                case "lowerCase": 
                    newCharacter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
                    break;
                case "upperCase":
                    newCharacter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    break;
                case "numeric":
                    newCharacter = Math.floor(Math.random() * 10);
                    break;
                case "special":
                    newCharacter = makeSpecialCharacter();
                    break;
            }
            console.log(newCharacter);
            word += newCharacter;
        }
        console.log(word);
        return word;

    }
    password();
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
