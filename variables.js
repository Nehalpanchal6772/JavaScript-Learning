"use strict"; // "strict mode".
//With strict mode, you can not use undeclared variables. 
// EX) firstname = "Nehal"; (undeclared variable without var keyword)

// two varibales with the same name 
// var 1)
var firstName = "Nehal"; // VARIABLE DECLARATION
console.log(firstName); // VARIABLE PRINT

// var 2)
var firstName = "Pintu"; // VARIBLE USE AND MODIFY
console.log(firstName);

var firstName = "Camel"; // Camel case writing
var first_name = "Snack"; // Snack case writing

var num1 = 10;
var num2 = 10;
console.log(num1 + num2); // Arithmatic of variable (+,-,*,/, ... )

var fname = "Nehal";
var lname = "Panchal";
console.log(fname+ ' ' +lname); // Concatenate two strings with space in between

// ~~~~~~~~ VARIABLE RULES ~~~~~~~~

// 1) you can use 2 variable with the SAME NAME in the same File. (BIG DISADVANTAGE)

// 2) you cannot start the name of variable with digit but you can use digit between and after the variable 
// EX) 1firstname (Invalid), first1name (Valid), firstname1 (valid)

// 3) you can ONLY use dollar and underscore as special symbols
// EX) $firstname (Valid), first$name (Valid), firstname$ (Valid)
// EX) _firstname (Valid), first_name (Valid), firstname_ (Valid) 

// 4) you can not put the space in between the variable
// EX) first name (Invalid)
