//array of special char to be included in pw
var specialChar = [
	"@",
	"%",
	"+",
	"\\",
	"/",
	"'",
	"!",
	"#",
	"$",
	"^",
	"?",
	":",
	",",
	")",
	"(",
	"}",
	"{",
	"]",
	"[",
	"~",
	"-",
	"_",
	".",
];

//array of numeric char to be included in pw
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];

//array of lowercase char to be included in pw
var lowerCasedChar = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

//array of uppercase char to be included in pw
var upperCasedChar = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

//function to prompt user for pw options
function getPwOptions() {
	//variable to store length of pw from user input
	var length = parseInt(
		prompt("How many characters would you like your password to contain?"),
		12
	);

	//conditional statement to check if pw length is a number. Prompts end if this evaluates false
	if (Number.isNaN(length)) {
		alert("Password length must be provided as a number.");
		return null;
	}

	//conditional statement to check if pw length is at least 12 char long. Prompts end if this evaluates false
	if (length < 12 ) {
		alert("Password length must be at least 12 characters.");
		return null;
	}

	//conditional statement to check if pw length is less than 128 characters long. Prompts end if this evaluates false {
		if (length > 128) {
			alert("Password length must be less than 129 characters.");
			return null;
		}

		//variable to store boolean regarding the inclusion of special char
		var hasSpecialChar = confirm(
			"Click OK to confirm including special characters."
		);

		//variable to store boolean regarding the inclusion of numeric char
		var hasNumericChar = confirm(
			"Click OK to confirm including numeric characters."
		);

		//variable to store boolean regarding the inclusion of lowercase char
		var hasLowerCasedChar = confirm(
			"Click OK to confirm including lowercase characters."
		);

		//variable to store boolean regarding the inclusion of uppercase char
		var hasUpperCasedChar = confirm(
			"Click OK to confirm including uppercase characters."
		);

		//conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
		if (
			hasSpecialChar === false &&
			hasNumericChar === false &&
			hasLowerCasedChar === false &&
			hasUpperCasedChar === false
		) {
			alert("Must select at least one character type.");
			return null;
		}

		//object to store user input
		var pwOptions = {
			length: length,
			hasSpecialChar: hasSpecialChar,
			hasNumericChar: hasNumericChar,
			hasLowerCasedChar: hasLowerCasedChar,
			hasUpperCasedChar: hasUpperCasedChar
		};

		return pwOptions;
	}

	//function for getting a random element from an array
	function getRan(arr) {
		var ranInd = Math.floor(Math.random() * arr.length);
		var ranEle = arr[ranInd];

		return ranEle;
	}

	//function to generate pw with user input
	function genPw() {
		var options = getPwOptions();
		//variable to store pw as it's being concatenated
		var result = [];

		//array to store types of char to include in pw
		var possChar = [];

		//array to contain one of each type of chosen char to ensure each will be used
		var guaranteedChar = [];

		//check if an options object exists, if not exit the function
		if (!options) return null;

		//conditional statement that adds array of special char into array of possible char based on user input
		//push new random special char to guaranteed char
		if (options.hasSpecialChar) {
			possChar = possChar.concat(specialChar);
			guaranteedChar.push(getRan(specialChar));
		}

		//conditional statement that adds array of numeric char into array of possible char based on user input
		//push new random numeric char to guaranteed char
		if (options.hasNumericChar) {
			possChar = possChar.concat(numericChar);
			guaranteedChar.push(getRan(numericChar));
		}

		//conditional statement that adds array of lowercase char into array of possible char based on user input
		//push new random lowercase char to guaranteed char
		if (options.hasLowerCasedChar) {
			possChar = possChar.concat(lowerCasedChar);
			guaranteedChar.push(getRan(lowerCasedChar));
		}

		//conditional statement that adds array of upper char into array of possible char based on user input
		//push new random uppercase char to guaranteed char
		if (options.hasUpperCasedChar) {
			possChar = possChar.concat(upperCasedChar);
			guaranteedChar.push(getRan(upperCasedChar));
		}

	}
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
