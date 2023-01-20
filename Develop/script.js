var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;
var enter;

lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
space = [];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    passSecure = generatePassword();
    document.getElementById("password").placeholder = passSecure;
});

function UserInput(passSecure) {
  document.getElementById("password").textContent = passSecure;

}

function generatePassword() {
    
    enter = parseInt(prompt("Password characters length of 8 to 128"));
    
    if (!enter) {
        alert("value needed");
    } else if (enter < 8 || enter > 128) {
  
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
      confirmLowercase = confirm("This will contain lowercase letters");
      confirmUppercase = confirm("This will contain uppercase letters");
      confirmNumber = confirm("This will contain numbers");
      confirmCharacter = confirm("This will contain special characters");
    };


    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria password!");
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, lowercase, uppercase);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, uppercase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowercase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowercase, uppercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowercase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowercase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowercase.concat(uppercase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowercase;
    }
    else if (confirmUppercase) {
        choices = space.concat(uppercase);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
 
    var passSecure = password.join("");
    UserInput(passSecure);
    return passSecure;
}