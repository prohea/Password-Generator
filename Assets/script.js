// Assignment code here
var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getPasswordOpt() {
  var length = parseInt(
    prompt('How many characters would you like your password to have?'),
    10
  );

  if(Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if(length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if(length > 128) {
    alert('Password length must be less than 129 characters');
    return null;
  }

  var hasSpecialChar = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericChar = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var hasUpperCasedChar = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  if (
    hasSpecialChar === false &&
    hasNumericChar === false &&
    hasLowerCasedChar === false &&
    hasUpperCasedChar === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordOpt = {
    length: length,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasLowerCasedChar: hasLowerCasedChar,
    hasUpperCasedChar: hasUpperCasedChar,
  };

  return passwordOpt;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr [randIndex];

  return randElement;
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