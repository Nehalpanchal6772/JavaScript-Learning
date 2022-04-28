// ~~~~~~~~PRIMITIVE DATA TYPES~~~~~~~~~~

// 1) string : "NEHAL"
// 2) number : 1234
// 3) boolean : TRUE / FALSE
// 4) null : NULL VALUE '\O'
// 5) undefined : WITHOUT INITIALIZATION
// 6) BigInt : 1234n

var fName; 
console.log(fName); // UNDEFINED
console.log(typeof fName); // UNDEFINED

var s1 = null;
console.log(s1); // NULL
console.log(typeof s1); // OBJECT (BIGGEST BUG IN JAVASCRIPT)

var number = 123;
console.log(Number.MAX_SAFE_INTEGER) // MAXIMUM SAFE INTERGER VALUE

var bigIn = BigInt(3243535435465476576453424325); // WAY 1 TO DECLARE BIGINT
var bigIn = 3243535435465476576453424325n; // WAY 2 TO DECLARE BIGINT
console.log(typeof bigIn); //BigInt

// WE CAN WRITE SMALL NUMBER IN BIGINT.

var no = BigInt(12);
var no = 12n;
console.log(typeof no); //BIGINT
console.log(no); // 12n

// YOU CANNOT ADD SMALL NUMBER WITH BIGINT NUMBER 

var n1 = 12; // SMALL NO
var n2 = 12n; // BIGINT NO
var n3 = n1 + n2;
console.log(BigInt (n3)); // ERROR: USE EXPLICIT CONVERSION --> make both BigInt