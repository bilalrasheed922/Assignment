//Chapter 21 (Changing Case)
//QUESTION 1
var allLower = userInput.toLowerCase();
//In the corrected code, I added parentheses () after toLowerCase to properly call the function and applied it to the userInput variable.

//QUESTION 2
var x = "Some String";
x = x.toLowerCase();

//QUESTION 3
var y = "Some String";
y = y.toUpperCase();

//QUESTION 4
var originalString = "Original String";
var lowercaseString = originalString.toLowerCase();

//QUESTION 5
var myArray = ["Apple", "Banana", "Orange"];
var index = 2; // The index of the element to convert
var convertedString = myArray[index].toLowerCase();

//QUESTION 6
var myString = "Hello, World!";
var uppercaseString = myString.toUpperCase();

alert(uppercaseString);

//QUESTION 7
var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedName);
//Chapter 22 - 25 (Strings)
//QUESTION 1
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

console.log(slicedPart);

//QUESTION 2
var sameWords = "captain";
var numberOfCharacters = sameWords.length;

console.log(numberOfCharacters);

//QUESTION 3
var animal = "elephant";
var startIndex = Math.floor((animal.length - 4) / 2); 
var seg = animal.slice(startIndex, startIndex + 4);

console.log(seg);

//QUESTION 4
var myString = "Hello, World!";
var numberOfCharacters = myString.length;

console.log(numberOfCharacters);

//QUESTION 5
var myString = "ExampleString";

var numberOfCharacters = myString.length;
console.log("Number of characters:", numberOfCharacters);

var slicedString = myString.slice(1, -3);
console.log("Sliced string:", slicedString);

//QUESTION 6
// the value of indx is 3.
//QUESTION 7
//"To be or not to be.", the substring "be" last appears at index 16, so the value of indx is 16.
//QUESTION 8
var text = "You gotta go, go, go!";
var lastInstanceIndex = text.lastIndexOf("go");
var indx = lastInstanceIndex !== -1 ? lastInstanceIndex : -1;

console.log(indx);

//QUESTION 9
if (indexNum >= 0 && indexNum < str.length) {
   
} else {
    
}

//QUESTION 10
var str ="abcde"
var result = str.charAt(2);
//QUESTION 11
var text = "This is a sample text.";
var cha = text.charAt(9);

console.log(cha);

//QUESTION 12
var str = "Hello, World!";
var lastIndex = str.length - 1; 
var x = str.charAt(lastIndex);

console.log(x);

//QUESTION 13
var input = "SomeExampleString";
var index = 4; 
var cha = input.charAt(index);

console.log(cha);

//QUESTION 14
if (str.charAt(2) === 'X') {
    
} else {
   
}

//QUESTION 15
var inputString = "Hello, World!";
var charArray = [];

for (var i = 0; i < inputString.length; i++) {
    charArray.push(inputString.charAt(i));
}

console.log(charArray);
//Replacing the first instance of "no" with "yes" in a string:

var reply = "no, I don't think so.";
var indexOfNo = reply.indexOf("no");

if (indexOfNo !== -1) {
    var revisedReply = reply.slice(0, indexOfNo) + "yes" + reply.slice(indexOfNo + 2);
    console.log(revisedReply);
} else {
    console.log(reply);
}

//QUESTION 16
var str = "I have 1 apple and 2 oranges.";
var indexOf1 = str.indexOf("1");

if (indexOf1 !== -1) {
    var newStr = str.slice(0, indexOf1) + "one" + str.slice(indexOf1 + 1);
    console.log(newStr);
} else {
    console.log(str);
}

//QUESTION 17
var y = x.replace(/a/g, "z");

//Chapter 26 (Rounding Numbers)

//QUESTION 1
var roundedNumber = Math.round(7.8); 

//QUESTION 2
var origNum = 5.3;
var roundNum = Math.ceil(origNum);

//QUESTION 3
var origNum = 7.9;
var roundNum = Math.floor(origNum);

//QUESTION 4
var originalNumber = 3.7;
var roundedNumber = Math.round(originalNumber);

console.log(roundedNumber);


//QUESTION 5
var roundedValue = Math.round(0.5);

console.log(roundedValue);

//Chapter 27 (Random Numbers)
//QUESTION 1
var randomInRange = Math.floor(Math.random() * 50) + 1;

console.log(randomInRange);

//QUESTION 2
var randomNumber = Math.random();

console.log(randomNumber);

//QUESTION 3
// Generate a random number between 1 and 6 to simulate a dice roll
var diceRoll = Math.floor(Math.random() * 6) + 1;

console.log("You rolled:", diceRoll);

//QUESTION 4

var coinToss = Math.random();
var result = coinToss < 0.5 ? "Heads" : "Tails";
console.log("Coin toss result:", result);

//Chapter 28, 29 (Converting Strings)

//QUESTION 1
var stringValue = "123";
var integerValue = parseInt(stringValue);

console.log(integerValue); // This will output: 123

//QUESTION 2
function stringToInteger(str) {
    return parseInt(str);
}

var stringValue = "123";
var integerValue = stringToInteger(stringValue);

console.log(integerValue); // This will output: 123

//QUESTION 3
var decimalString = "3.14";
var floatingNumber = parseFloat(decimalString);

console.log(floatingNumber); // This will output: 3.14

//QUESTION 4
//for integer
function isStringConvertibleToInteger(str) {
    return !isNaN(parseInt(str));
}

var inputString = "123";
var isConvertible = isStringConvertibleToInteger(inputString);
console.log(isConvertible); // This will output: true
//for decimal
function isStringConvertibleToDecimal(str) {
    return !isNaN(parseFloat(str));
}

var inputString = "3.14";
var isConvertible = isStringConvertibleToDecimal(inputString);
console.log(isConvertible); // This will output: true

//QUESTION 5
var numberValue = 42;
var stringValue = numberValue.toString();

console.log(stringValue); // This will output: "42"


//QUESTION 6
function numberToString(num) {
    return num.toString();
}

var numberValue = 42;
var stringValue = numberToString(numberValue);

console.log(stringValue); // This will output: "42"

//QUESTION 7
var decimalString = "3.14";
var integerValue = parseInt(decimalString);

console.log(integerValue); // This will output: 3
//=====chapter 30=====
//Q.1
let num = 3.14159265;
let newNum = num.toFixed(4);
//Q.2
let Num = 2.71828183;
num = parseFloat(Num.toFixed(2));
//Q.3
if (num.toFixed(2).toString().length > 4) {
    // Your code here
}
//Q.4
let number = 12.3456789;
alert(number.toFixed(2).toString());
//=====chapter 31-34=====
//Q.1
let dObj = new Date();
//Q.2
let d = new Date();
let dStr = d.toString();
//Q.3
let day = d.getDay();
//Q.4
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = dayNames[day];
alert(currentDay);
//Q.5
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let Day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
//Q.6
let later = new Date(2020, 11, 31);//Note: JavaScript months are zero-based, so December is represented by index 11.
//Q.7
let date1992 = new Date(1992, 1, 2);//Note: Similarly, February is represented by index 1.
//Q.8
let referenceDate = new Date(1980, 0, 1);
let elapsedMilliseconds = new Date() - referenceDate;
alert(elapsedMilliseconds);//In this code, the difference between the current date and time (new Date()) and the referenceDate is calculated, representing the milliseconds that elapsed between those two dates. The alert function then displays this value.
//Q.9
let date = new Date(); // current date
date.setFullYear(2023); // changing the year to 2023
//Q.10
function changeMonthToJanuary(inputDate) {
    inputDate.setMonth(0); // 0 represents January
    return inputDate;
}

let originalDate = new Date(2023, 7, 15); // August 15, 2023
let updatedDate = changeMonthToJanuary(originalDate); // January 15, 2023
//Q.12
function changeMinutesToSpecificValue(inputTime) {
    let newMinutes = prompt("Enter new minutes:");
    inputTime.setMinutes(newMinutes);
    return inputTime;
}

let originalTime = new Date(); // current time
let updatedTime = changeMinutesToSpecificValue(originalTime);
//Q.13
function addHours(inputTime, hoursToAdd) {
    inputTime.setHours(inputTime.getHours() + hoursToAdd);
    return inputTime;
}

let OriginalTime = new Date(); // current time
let UpdatedTime = addHours(originalTime, 3); // adding 3 hours
//Q.14
function calculateAge(birthdate) {
    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    
    if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

let birthdate = "1990-05-15"; // Example birthdate in "YYYY-MM-DD" format
let age = calculateAge(birthdate);
console.log("Age:", age);
//=====chapter 35-37=====
//Q.1
function displayAlert() {
    alert("ola");
}
//Q.2
function askName() {
    const userName = prompt("Enter name");
}
//Q.3
function callTwoFunctions() {
    // Call the first function
    displayAlert();

    // Call the second function
    askName();
}
//Q.4
function promptAndAlertName() {
    const name = prompt("Enter name");
    alert("Name: " + name);
}

// Call the function
promptAndAlertName();
//Q.5
function concat(a, b, c) {
    console.log("hello");
}
//Q.6
function concatenateAndAssign(param1, param2) {
    const result = param1 + param2;
}
//Q.7
function multiplyAndAssign(a, b, c) {
    const result = a * b * c;
}
//Q.8
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Avoid division by zero
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;
    return average;
}
//Q.9
function getSum(a, b) {
    return a + b;
}
//Q.10
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Avoid division by zero
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;
    return average;
}
//Q.11
const result = getSum(5, 3); // Assuming getSum is defined
console.log(result); // This will output 8
//Q.12
function letterCount(word) {
    return word.length;
}
//Q.13
function setDateYear(date, year) {
    date.setFullYear(year);
}
//Q.14
function calculateAge(dateOfBirth) {
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInMilliseconds = currentDate - birthDate;
    
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
}
//Q.15
function checkWordPresence(word, array) {
    return array.includes(word);
}

const wordArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
const searchWord = 'raza';
const isPresent = checkWordPresence(searchWord, wordArray);
console.log(isPresent); // This will output true or false
//Q.16
function repeatLetter(letter) {
    return letter.repeat(10);
}

const repeatedLetters = repeatLetter('a'); // Change 'a' to the desired letter
console.log(repeatedLetters); // This will output the repeated letter
//Q.17
function reverseArray(arr) {
    return arr.reverse();
}

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // This will output ['e', 'd', 'c', 'b', 'a']

//=====chapter 38=====
//Q.1
function demonstrateLocalVariable() {
    // This is a local variable
    const localVar = "I am local";

    console.log(localVar); // Output: I am local
}

// Trying to access localVar outside the function will result in an error
// console.log(localVar); // This will result in an error

//Q.2
const globalVar = "I am global";

function accessGlobalVariable() {
    console.log(globalVar); // Output: I am global
}

accessGlobalVariable(); // Calling the function
//=====chapter 39,40=====
//Q.1
const dayOfWeek = "Tuesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Tuesday":
        console.log("It's still the beginning of the week.");
        break;
    case "Wednesday":
        console.log("It's the middle of the week.");
        break;
    case "Thursday":
        console.log("The weekend is approaching.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's the weekend!");
}

//Q.2
const cityName = prompt("Enter a city name:");

switch (cityName) {
    case "New York":
        alert("You entered New York!");
        break;
    case "London":
        alert("You entered London!");
        break;
    case "Tokyo":
        alert("You entered Tokyo!");
        break;
    default:
        alert("City not recognized.");
}
