// LENGTH IS NOT A FUNCTION
// SPACES ARE ALSO CALCULATED IN LENGTH

let fname = "NEHAL";

// N   E   H   A   L
// 0   1   2   3   4

var index = fname[1];
console.log(index); // PRINT USING VARIABLE

console.log(fname[5]); // DIRECT PRINT WITHOUT VARIABLE
// OUT OF INDEX : UNDEFINED

console.log(fname.length); // TOTAL LENGTH OF FNAME VARIABLE

var str = "QWERTYUIOPASDFGHJKLMNBVCXZ";

let x = str.length; // x = 26
console.log(str[x-1]); // PRINT LAST CHARACTER


// ~~~~~~~~~~~~~~~~~~~~~~~~ STRING METHODS ~~~~~~~~~~~~~~~~~~~~~~~~~

// 1) trim() : REMOVE WHITE SPACES FROM START AND THE END OF THE STRING. (GIVE NEW STRING)
// 2) toUpperCase(): CONVERT THE GIVEN STRING INTO UPPER CASE. (GIVE NEW STRING)
// 3) toLowerCase(): CONVERT THE GIVEN STRING INTO LOWER CASE. (GIVE NEW STRING)
// 4) slice(start index, end index): GIVE SPECIFIC PART OF THE STRING.
// 5) charAt(2): GIVE CHARACTER AT GIVE INDEX


// STORE IN SAME VARIABLE IS ONLY POSSIBLE WHEN YOU DECLARED THAT VARIABLE USING VAR KEYWORD OTHERWISE YOU WILL NEED TO DECLARE DIFFERENT VARIABLE (IN CASE OF LET)
var str1 = "   nehal   ";
console.log(str1.length);
// ---------------------
var str1 = str1.trim();
console.log(str1.length);
// ---------------------
var a = str1.toUpperCase();
console.log(a);

let newSlice = "NEHAL PANCHAL";

let s1 = newSlice.slice(0,7); // NEHAL P
let s2 = newSlice.slice(2) // HAL PANCHAL 
console.log(s1);
console.log(s2); 

var s3 = str1.charAt(2);
console.log(s3); 
var s4 = str1.charCodeAt(2);
console.log(s4);
var s5 = str1.concat(" panchal");
console.log(s5);
var s6 = str1.includes("h"); // return boolean TERUE or FALSE
console.log(s6);
var s7 = str1.indexOf("a"); // return Index number of give char
console.log(s7);
var s8 = str1.endsWith("o"); // return boolean value 
console.log(s8);
var s9 = str1.replace("nehal","pintu");// replace nehal with pintu
console.log(s9);


// ~~~~~~~~~~~~~~~~ TYPEOF OEPRATEOR ~~~~~~~~~~~~~~~
// TO KNOW THE DATATYPE OF DECLARED VARIABLES

let num = 10;
let strr = "Nehal panchal";
let boo = true; 

console.log(typeof num); // Number
console.log(typeof strr); // String
console.log(typeof boo); // Boolean
console.log(typeof 10); // Number

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~ CONVERT NUMBER INTO STRING ~~~~~~~~~~~~~~~~~~

var n1 = 10;
var convert = 10 + ''; // add blanck quote with number to convert into string

console.log(typeof (n1 + "")); // TYPE IS STRING

      // OR

let num2 = 10;
num2 = String(10); // Using non primitive datatype

console.log(typeof num2); // string

// ~~~~~~~~~~~~~~~ CONVERT STRING INTO NUMBER ~~~~~~~~~~~~~~~~~~

var str2 = "18";
console.log(typeof str2); // String

var str3 = + "18"; // add plus(+) before string to convert into number
console.log(typeof str3) //Number

      // OR

var str4 = "pintu";
str4 = Number(str4); // Using non primitive datatype

console.log(typeof str4); // Number
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var myName = "nehal";
var age = 25;

var box = myName + age;
console.log(typeof box); // String

console.log("my name is "+ myName + " & my age is " + age); // BORING TO DO

//TEMPLATE STRING '${}' USING BACK TICS ONLY (``)

var aboutMe = `my name is ${myName} & my age is ${age}`; // EFFICIENT WAY
console.log(aboutMe);
