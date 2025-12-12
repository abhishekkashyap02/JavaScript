// JavaScript -- js is a programming language. We use it to give instruction to the computer
// Input ( code ) -> Computer -> Output ( result )

// Ctrl + K to Clear console 
// Ctrl + L to Open console

// How to run JavaScript code in browser
// 1. Open browser
// 2. Right click on the browser
// 3. Click on inspect
// 4. Click on console
// 5. Write your code in console and press enter





// Now how to connect the JavaScript code with the HTML code
// 1. Open any text editor
// 2. Write your HTML code
// 3. Write your JavaScript code in script tag
// <script src = "firstcode.js"></script> // this is the way to connect the javascript code with the html code
// 4. Save the file with .html extension
// 5. Open the file in the browser








// 1st JavaScript code
// console.log("Hello World");
// Console.log is a function which is used to print the output in the console
// ; is used to terminate the statement in JavaScript
// JavaScript is case sensitive language
// JavaScript is dynamically typed language



 




// Variables in JavaScript
// Variables are used to store data like container
// Rules to declare variables in JavaScript
// 1. Cannot start with a number
// 2. Can start with a letter, $, _
// 3. Are case sensitive
// 4. Cannot use reserved keywords
// 5. Should be meaningful
// 6. Cannot use space in between the variable name
// 7. Cannot use special characters
// 8. Cannot use hyphen in between the variable name
// 9. Cannot use the same variable name which is already declared
// 10. Cannot use the same variable name which is already declared in the same scope







 
// var, let, const are used to declare variables
// var is a global variable
// example for var 
// var name = "Abhishek";
// console.log(name);
// we will not use var in our javascript code because it is a global variable and it can be used anywhere in the code
// Variable can be re-declared and updated. 


// After 2016 we got es6 version of javascript in which we got let and const keyword
// full form of es6 is ECMAScript 6




// let is a block level variable
// example for let
// let name = "Abhishek";
// console.log(name);
// Variable cannot be re-declared but can be updated. 
// if we are declaring any variables inside the { } then it will be a block level variable





// const is a constant variable ( whose value cannot be changed )
// example for const
// const name = "Abhishek";
// console.log(name);
// const declaration is mandatory.






// Data types in JavaScript

// 1. Primitive Data Types
//Primitive data types are the data types which are predefined in the language.
// 1. Number
// Example of Number data type 
// let num = 10;
// console.log(num);
// console.log(typeof num); // typeof is a function which is used to check the data type of the variable
// Output will be 10 and number


// 2. String
// Example of String data type
// let name = "Abhishek";
// console.log(name);
// console.log(typeof name);
// Output will be Abhishek and string


// 3. Boolean
// Example of Boolean data type
// let isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);
// Output will be true and boolean


// 4. Undefined
// Example of Undefined data type
// let x;
// console.log(x);
// console.log(typeof x);
// Output will be undefined and undefined


// 5. Null
// Example of Null data type
// let y = null;
// console.log(y);
// console.log(typeof y);
// Output will be null and object


// 6. Symbol
// Example of Symbol data type
// let sym = Symbol("This is a symbol");
// console.log(sym);
// console.log(typeof sym);
// Output will be Symbol(This is a symbol) and symbol


// 7. BigInt
// Example of BigInt data type
// let bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);
// console.log(typeof bigInt);
// Output will be 1234567890123456789012345678901234567890n and bigint
// BigInt is used to store large numbers
// In bigInt we have to write n at the end of the number



// 2. Non-Primitive Data Types
// Non-Primitive data types are the data types which are user defined data types.
// 1. Object
//  We store the data in the form of key value pair in the object.
// Example of Object data type
// let student = {
//     name: "Abhishek",
//     age: 21,
//     cgpa: 8,
//     isPass: true,
// };
// console.log(student);
// console.log(typeof student);
// Output will be { name: 'Abhishek', age: 21, cgpa: 8, isPass: true } and object
// To find only the keys of the object we use Object.keys(student)
// To find only the values of the object we use Object.values(student)
// To find both keys and values of the object we use Object.entries(student)
// Example of Object.keys(student)
// console.log(Object.keys(student));
// Output will be [ 'name', 'age', 'cgpa', 'isPass' ]
// Example of Object.values(student)
// console.log(Object.values(student));
// Output will be [ 'Abhishek', 21, 8, true ]
// Example of Object.entries(student)
// console.log(Object.entries(student));
// Output will be [ [ 'name', 'Abhishek' ], [ 'age', 21 ], [ 'cgpa', 8 ], [ 'isPass', true ] ]





// 2. Array
// Array is a collection of items in a linear way.
// Example of Array data type
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof arr);
// Output will be [ 1, 2, 3, 4, 5 ] and object
// Array is a type of object




// 3. Function
// Example of Function data type
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));
// console.log(typeof add);
// Output will be 5 and function




//    Arrays and Functions are comes under the object data type




// 4. Date 
// 5. RegExp
// 6. Set
// 7. Map
// 8. WeakSet
// 9. WeakMap
// 10. Promise
// 11. Proxy
// 12. Reflect
// 13. Error






// Comments in JavaScript
// Single line comment
// Single line comment is used to write a single line of comment
// Example of single line comment
// console.log("Hello World");


// Multi line comment
// Multi line comment is used to write multiple lines of comment
// Example of multi line comment
/*
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
*/





// Operators in JavaScript
// Operators are used to perform operations on variables and values
// 1. Arithmetic Operators
// Arithmetic operators are used to perform arithmetic operations on numbers
// 1. Addition
// Example of Addition
// let a = 10;
// let b = 20;
// console.log(a + b);
// Output will be 30

// 2. Subtraction
// Example of Subtraction
// let a = 20;
// let b = 10;
// console.log(a - b);
// Output will be 10


// 3. Multiplication
// Example of Multiplication
// let a = 10;
// let b = 20;
// console.log(a * b);
// Output will be 200


// 4. Division
// Example of Division
// let a = 20;
// let b = 10;
// console.log(a / b);
// Output will be 2


// 5. Modulus ( Remainder )
// Example of Modulus
// let a = 20;
// let b = 10;
// console.log(a % b);
// Output will be 0


// 6. Increment
// Example of Increment
// let a = 10;
// console.log(++a); // Pre-Increment means first increment then print
// Output will be 11
// console.log(a++); // Post-Increment means first print then increment
// Output will be 11



// 7. Decrement
// Example of Decrement
// let a = 10;
// console.log(--a); // Pre-Decrement means first decrement then print
// Output will be 9
// console.log(a--); // Post-Decrement means first print then decrement
// Output will be 9


// 8. Power
// Example of Power
// let a = 2;
// let b = 3;
// console.log(a ** b);
// Output will be 8



// 2. Assignment Operators
// Assignment operators are used to assign values to variables
// 1. =
// Example of Assignment Operator
// let a = 10;
// console.log(a);
// Output will be 10


// 2. +=
// Example of +=
// let a = 10;
// a += 5; // a = a + 5
// console.log(a);
// Output will be 15


// 3. -=
// Example of -=
// let a = 10;
// a -= 5; // a = a - 5
// console.log(a);
// Output will be 5


// 4. *=
// Example of *=
// let a = 10;
// a *= 5; // a = a * 5
// console.log(a);
// Output will be 50


// 5. /=
// Example of /=
// let a = 10;
// a /= 5; // a = a / 5
// console.log(a);
// Output will be 2


// 6. %=
// Example of %=
// let a = 10;
// a %= 5; // a = a % 5
// console.log(a);
// Output will be 0


// 7. **=
// Example of **=
// let a = 10;
// a **= 5; // a = a ** 5
// console.log(a);
// Output will be 100000


// 8. <<=
// Example of <<=
// let a = 10;
// a <<= 5; // a = a << 5
// console.log(a);
// Output will be 320






// Comparison Operators
// Comparison operators are used to compare two values
// 1. == ( Equal to )
// Example of ==
// let a = 10;
// let b = 20;
// console.log(a == b);
// Output will be false


// 2. === ( Strict Equal to )
// Example of ===
// let a = 10;
// let b = 10;
// console.log(a === b);
// Output will be true


// 3. != ( Not Equal to )
// Example of !=
// let a = 10;
// let b = 20;
// console.log(a != b);
// Output will be true


// 4. !==  ( Strict Not Equal to )
// Example of !==
// let a = 10;
// let b = 20;
// console.log(a !== b);
// Output will be true


// Other comparison operators are <, >, <=, >=



// Logical Operators
// Logical operators are used to determine the logic between variables or values
// 1. && ( AND )
// in this both the condition should be true
// Example of &&
// let a = 10;
// let b = 20;
// console.log(a > 5 && b < 30);
// Output will be true


// 2. || ( OR )
// in this any one condition should be true
// Example of ||
// let a = 10;
// let b = 20;
// console.log(a > 5 || b > 30);
// Output will be true


// 3. ! ( NOT ) 
// in this if the condition is true then it will return false and if the condition is false then it will return true
// Example of !
// let a = 10;
// let b = 20;
// console.log(!(a > 5));
// Output will be false



// Conditional Statements in JavaScript
// Conditional statements are used to perform different actions based on different conditions



// 1. if statement
// if statement is used to execute a block of code if a condition is true
// Example of if statement
// let age = 16;
// if (age > 18)
// {
//     console.log("You are eligible for voting");
// }
// Output will be nothing because the condition is false




// 2. if else statement
// if else statement is used to execute a block of code if a condition is true and another block of code if the condition is false
// Example of if else statement
// let age = 16;
// if (age > 18)
// {
//     console.log("You are eligible for voting");
// }
// else
// {
//     console.log("You are not eligible for voting");
// }
// Output will be You are not eligible for voting because the condition is false




// 3. else if statement
// else if statement is used to execute multiple conditions
// Example of else if statement
// let num = prompt("Enter the score of the student ");
// if (num >= 90 && num<= 100)
// {
//     console.log("Student secured grade A");
// }
// else if (num>= 70 && num <= 89)
// {
//     console.log("Student secured grade B");
//  }
// else if (num>= 60 && num <= 69)
// {
//     console.log("Student secured grade C");
// }
// else if (num>= 50 && num <= 59)
// {
//     console.log("Student secured grade D");
// }
// else if (num>= 0 && num <= 49)
// {
//     console.log("Student secured grade F");
// }
// else
// {
//     console.log("Please enter the score between 0 to 100");
// }
// Output will be the grade of the student



// Ternary Operator
// Ternary operator is used to write the if else statement in a single line
// condition ? expression1 : expression2
// or 
// condition ? true output : false output
// Example of Ternary Operator
// age > 18 ? "adult" : "minor";
// Output will be adult if the condition is true and minor if the condition is false




// Switch Statement
// Switch statement is used to perform different actions based on different conditions
// Example of Switch Statement
// let day = 3;
// switch (day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
//         break;
// }
// Output will be Wednesday because the day is 3


// Practice Question
// Get user to input a number using prompt ( " Enter a number " ). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number ");
// if (num % 5 === 0)
// {
//     console.log("The number is a multiple of 5");
// }
// else
// {
//     console.log("The number is not a multiple of 5");
// }




// Alert Box
// Alert box is used to display a message in a dialog box
// Example of Alert Box
// alert("Hello World");
// Output will be a dialog box with the message Hello World


// Prompt Box
// Prompt box is used to take input from the user
// Example of Prompt Box
// let name = prompt("Enter your name ");
// console.log(name);
// Output will be the name which is entered by the user


// Confirm Box
// Confirm box is used to take confirmation from the user
// Example of Confirm Box
// let isAdult = confirm("Are you an adult?");
// console.log(isAdult);
// Output will be true if the user clicks on OK and false if the user clicks on Cancel






// let age = 16;
// if (age > 18)
// {
//     console.log("You are eligible for voting");
// }
// else
// {
//     console.log("You are not eligible for voting");
// }









// now write a code which can give grades to students according to their scores:
// 80 - 100 A
// 70 - 89 B
// 60 - 69 C
// 50 - 59 D
// 0 - 49 F

// let num = prompt("Enter the score of the student ");
// if (num >= 90 && num<= 100) 
// {
//     console.log("Student secured grade A");
// }
// else if (num>= 70 && num <= 89)
// {
//     console.log("Student secured grade B");
// }
// else if (num>= 60 && num <= 69)
// {
//     console.log("Student secured grade C");
// }
// else if (num>= 50 && num <= 59)
// {
//     console.log("Student secured grade D");
// }
// else if (num>= 0 && num <= 49)
// {
//     console.log("Student secured grade F");
// }
// else
// {
//     console.log("Please enter the score between 0 to 100"); 
// }









// Loops in JavaScript



// Loops are used to execute a piece of code again and again
// for loop 
//print Hello bhai 5 times


// for (initialization; condition; increment/decrement)
// for (let i = 1; i <= 5; i++)
// {
//     console.log("Hello bhai");
// }



// Calculate sum of 1 to 5

// let sum = 0;
// for (let i = 0; i <= 5; i++)
// {
//     sum = sum + i;
// }
// console.log("Sum of the number 1 to 5 is: ", sum);





// Infinite loop : A loop never ends
// try to avoid it




// while loop

// while ( condition )
// {
//     // code
// }


// let i = 1;
// while (i <= 10)
// {
//     console.log("Apna College");
//     i++;
// }



// Do while loop
// do
// {
//     // code
// }
// while ( condition );



// let i = 20;
// do
// {
//     console.log("Apna College");
//     i++;
// }
// while(i<=10);




//  for - of - loop
// used to run loop on strings and arrays dont use it for objects


//for ( let val of iterable)


// let name = "JavaScript";
// for ( let i of name)
// {
//     console.log("i =", i);

// }





// now for the above code if we want to check the size of the string

// let str = "JavaScript";
// let size = 0;
// for (let val of str)
// {
//     console.log("val=", val);
//     size ++;
// }
// console.log("string size = ", size);





// for in loop
// used to run loop on objects

// let student = {
//     name: "Abhishek",
//     age: 21,
//     cgpa: 8,
//     isPass: true,
// };
// for (let i in student)
// {
//     console.log("Key:", i,"Value:", student[i]);
// }


// Print all even numbers from 0 to 100

// for (let num = 0; num <= 100; num++)
// {
//     if (num % 2 === 0)
//     {
//         console.log("Even numbers are: ", num);
//     }
// }






// Create a game where you start with any random game number. ASk the user to keep guessing the game number untill the user enter correct value:

// let gameNum = 30;
// let guessNum = prompt("Guess the game number: ");

// while(gameNum != guessNum)
// {
//     guessNum = prompt("You entered a wrong number. Please guess again 😭");
// }
// console.log("Congratulations 😎, you have guessed the right number: ");


// Prompt return the string value so we have to convert it into the number





// Strings in Javascript
// String is a sequence of characters used to represent Text

// Create String
// let str = "Apnacollege";
// let str1 = 'Apnacollege';






// inbuilt properties and function of Javascript

// String length
// str.length
// str1.length




// String Indices ( Index ):
// str[0], str[1], str[2], str[3]...







// Tempelate literals:
// Tempelate literals are used to create strings with the help of backticks
// Tempelate literals are used for string interpolation
// String interpolation is used to substitute the placeholder with the value
// means we can use the variable inside the string
// Example of Tempelate literals 
// let str = `This is a tempelate literals`;
// console.log(str);
// console.log(typeof str);

// to create strings by doing substitution of placeholder
// `string text ${expression} string text`


// let str = `This is a tempelate literals`;
// console.log(str);
// console.log(typeof str);


// let obj = {
//     item : "Pen",
//     price : 25
// };

// let res = `The cost of the ${obj.item} is ${obj.price}`;
// console.log(res);




// String Interpolation
// TO create strings by doing substitution of placeholder.
//  `string text ${expression} string text`





// let specialString = `This is a tempelate literal ${1 + 2 + 3}`;
// it will first add the element then it will print 
// console.log(specialString);





// Escape characters are \n for new line \t for tab spacing





// Strings method in JavaScript
// These are built in functions to manipulate a string.





//str.toUpperCase() use to make the string in uppercase format
//example 

// let str = "abhishek";
// console.log(str.toUpperCase());

// it will not change the original string it will just return the string in uppercase format
// because strings are immutable




// same for the lower case we use str.toLowerCase();
// let str = "AbhishekKASHYAP";
// console.log(str.toLowerCase());
 





// for trim or to remove the whitespace (space before or after the text is called whitespace       abhishek      , the space before and after abhishek is called whitespace)
// let str = "             abhishek             ";
// console.log(str);
// console.log(str.trim()); // extraspace will be removed






// str.slice(start, end?) // return part of string 
// let str = "0123456789";
// console.log(str.slice(2,5)); // here index 2 is inclusive and index 5 is excusive





// srr1.concat(str2) // used to joins str2 with str1 
// let str1 = "abhi";
// let str2 = "shek";

// let result = str1.concat(str2);
// console.log(result);

// we can also use different method to concatinate the strings
// let str1 = "abhi";
// let str2 = "shek";

// result = str1 + str2;
// console.log(result);






//str.replace(search val, new val)
// suppose a string is given as "abcdefghijk" and we want to remove ef and in place of ef i have to write ws
//  let str = "abcdefghij";
//  console.log(str.replace("ef", "zx"));



// now suppose there is a word name honolulu and i want to replace lu and put tu 
// let str = "honolulu";
// console.log(str.replace("lu", "tu"));   // it will replace only the fisrt lu and replace it with tu
// console.log(str.replaceAll("lu", "tu")); // it will replace all lu with tu 







// str.charAt(index) ( used to print the element with the help of index )

// let str = "ilovejavascript";
// console.log(str.charAt(3)); // it will print the char at index 3 which is v






// prompt the user to enter their full name. generate a username for them based on the input , start username with @ , followed by their full name and ending with the fullname length.
// eg : username = "AbhishekKashyap"
// output username will be "@abhishekkashyap15"

// let username = prompt("Enter your username without spaces :");
// fullname = "@" + username.toLowerCase() + username.length;
// console.log(fullname);







//Arrays and its methods 
// collection of items in a liner way 
// same type ki information ko store krwane ke liye use krte h 
// array ke andar position matter krta h index matter krta h 
// likhne ke liye array ka naam fir square bracket ke andar sab store krwate h 


//creation of array
// let heroes = ["ironman", "hulk", "thor", "banner", "mightyraju"];
// console.log(heroes);
// console.log(heroes.length); // to print the length of the array
// console.log(typeof heroes); // array is a type of object 





// Array Indices ( Plural of Index is called indices )
// arr[0], arr[1], arr[2], arr[3], arr[4]...





// Value updation can be done in array
// Array is mutealbe means value can be changed and update.





// let arr = [0,1,2,3,4,5,6];
// console.log(arr);
// arr[3] = 23;
// console.log(arr);




// Looping over an array 
// loops are iterable (strings, objects, arrays)




// for loop ko use krne ke liye length property use krte h 
// Print all the element of an array
// arr = [1,2,3,4,5] ab 1 jo h woh index 0 pe h wahi 5 jo h woh index 4 pe h 
// array ka length jo hota h woh hota h index + 1 ( kyuki length jo hota h woh hota h total no of element stored in an array aur index 0 se start hota h toh issi liye array length jo hota h woh index + 1 hota h )
// for loop : length of array ( index + 1)




// let arr = [1,2,3,4,5,6];

// for (let index = 0; index < arr.length; index++ ) // index ke jagha pe kuch bhi likh skte h jaise ki i or index or idx kuch bhi 
// {
//     console.log(index);
// }


// array ko print krwane ke liye for - of loop bhi use kr skte h for for - in loop bhi use kr skte h dono valid h 
// generally humlog for - of loop prefer krenge array ke liye 




//for - of loop in array 
// let arr = ["hello", "my", "name", "is", "Abhishek", "Kashyap"];
// for(let el of arr)
// {
//     console.log(el);
// }


// if we want to print all the things in uppercase then
// let arr = ["hello", "my", "name", "is", "Abhishek", "Kashyap"];
// for(let el of arr)
// {
//     console.log(el.toUpperCase());
// }







// Practice question
// for a given array with marks of students - [85, 97, 44, 37, 76, 60]
// find the average marks of the entire class 

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks)
// {
//     sum = sum + i;
// }
// console.log("The average marks of the class is: ", sum / marks.length);
// console.log(`The average marks of the class is ${sum / marks.length}`);










// Practice question 2
// For a given array with prices of 5 items - [250, 645, 300, 900, 50] 
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.



//using for of loop

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let value of items)
// {
//     let offer = value / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after the offer is ${items[i]}`);
//     i++;
// }
// console.log(items);










// using for loop 

// let items = [250, 645, 300, 900, 50];

// for (let i = 0; i < items.length; i++)
// {
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`The value of the item after the offer applied is ${items[i]}`);
// }








// Array methods in Javascript



// Push() : add to the end
// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
// foodItems.push("Chips", "Burger");
// console.log(foodItems);









// Pop () : delete from the end and return
// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];

// console.log(foodItems.pop()); // it will remove the last item which is tomato and give output as tomato
// console.log(foodItems); // it will give the array without tomato 









// toString() : converts array to string 
// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
// console.log(foodItems.toString());
// console.log(foodItems);










//Concat() : joins multiple array and return result
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman", "flash"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);










// to add more than two array 
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman", "flash"];
// let indianHeroes = ["krish", "Shaktiman"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);  // if we want to add more than two array we can directly write the name with the comma 
// console.log(heroes);










//unshift() : add to start  it is equivalent to the push method but it will add in the starting 
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("munnabhai");
// console.log(marvelHeroes);









//shift() : delete from start and return
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// console.log(marvelHeroes.shift());
// console.log(marvelHeroes);
// it will remove the first element and return the first element
// Output will be thor








//slice() : return a piece of the array 
// it will not change in the original array 

// slice(startIndex , endIndex)
// let marvelHeroes = ["thor", "spiderman", "ironman", "batman", "flash", "superman", "flyingjaat"];
// console.log(marvelHeroes.slice(1,4));  // 1 is inclucive and 4 is exclusive in the given string 
// Output will be [ 'spiderman', 'ironman', 'batman' ]










// splice() : change original array (add, remove, replace)

//splice(startIndex, delCount, newElement...)

// if the array is given then we have to give the starting array and the no of element which we have to delete from the starting index and 
// in third position we have to give the element which we have to add it from the starting index

// let array = [1,2,3,4,5,6,7,8];
// array.splice(2,1,101,102); // 2 starting index h , 1 means kitna element delete krna h starting index se aur 101,102 means kitne element add krna h starting index se 
// console.log(array);
// Output will be [1,2,101,102,4,5,6,7,8]






//  Add element using splice 
// let array = [1,2,3,4,5,6,7,8];
// array.splice(2,0,101);
// console.log(array);
// it will add 101 at the index 2
// Output will be [1,2,101,3,4,5,6,7,8]








// Delete element using splice
// let array = [1,2,3,4,5,6,7,8];
// array.splice(3,1);
// console.log(array);








// Replace element using splice 
// let array = [1,2,3,4,5,6,7,8];
// array.splice(3,1,101);
// console.log(array);







// sirf ek index pass krne se jo index diye the waha se baki ka sab delete ho jayega aur value return kr dega 
// let array = [1,2,3,4,5,6,7,8];
// array.splice(2);
// console.log(array);








// Practice question 
// Create an array to store companies "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array 
// b. Remove Uber and add ola in its place 
// c. Add Amazon at the end








// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift(); // Delete the first element in an array
// companies.splice(1,1,"Ola");
// companies.push("Amazon");
// console.log(companies);








// Functions in javascript
// Block of code that performs a specific task, can be invoked whenever needed 


// Function Definition 
// function functionName() 
// {
//      if we write something inside the curley brackets then it will be a block of code.
//      Do some work
// }

// Function Call
// functionName();








//eg 
// function myFunction() {
//     console.log("Hello ");
//     console.log("bhai ");
//     console.log("Kaise ho");
// }
// myFunction(); // funtion call or function invoke






// agar mann lo humko koi ek msg print krwana h toh usko function me dal ke print krwa skte h 
// function myFunction(msg) { // yeh message jo h woh parameter h ya isko input bhi bol skte h 
// console.log(msg);
// }

// myFunction(); // aab yeh undefined return krega kyuki abhi msg me koi value nhi h 
// myFunction("Hello bhai"); // iss message ko argument bolte h   --  ab yeh hello bhai return krega 




// Functions are used to avoide redundancy which means we can use the same function again and again



// sum of two number using function
// function sum(x, y){     // x and y are the parameter or local variables 
// x and y will work only inside the function
//     s = x + y;
//     return s; // This will return the value of s
//     console.log("Hello"); // This will not print because the return statement is already there
// }
// console.log(sum(2,3));








// Arrow Function ( introduced in Modern JavaScript)
// arrow function is a compact way of writing a function 

// for normal function we can write it as 
// function sum(a,b){
//     return a + b;
// }
// for arrow function we can write it as 
// const arrowSum = (a, b) => {
//     console.log(a + b);
// }
// This is a part of modern JacaScript so we prefer this but only for small piece of work 






// Create an Arrow Function for multiplication of 2 numbers
// const arrowMulti = (a, b) => {
//     console.log(a * b);
// }









// Practice question 1 
// Create a function using the "function" keyword that takes a String as an 
// argument & returns the number of vowels in the string.


// function countVowels(str) {
//     let newvar = str.toLowerCase(); // it will change the string into lower case and store that string in the newvar variable
//     let count = 0;   // count will be zero at the begining if it satisfy the condition then it will automatically increase
//     for (let char of newvar) {   // for loop to check the string one by one 
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         {
//             count++;  // if the condition is statisfied then it will automatically increase the count 
//         }
//     }
//     console.log(count); // now it will print the count of no of vowels present in the string
// }
// countVowels(prompt()); // we can directly give the input but here we take prompt to take input from the user 




// for the above question 
// Create an arrow function to perform the same task.


// const vari = (str) => {
//     let variSmall = str.toLowerCase();
//     let count = 0;
//     for (let char of variSmall) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }
// vari(prompt());












// forEach Loop in Arrays 
// forEach loop is a method
// suppose "abc".toUpperCase() so here toUpperCase is a method
// function yu man lo ki ek blackbox hota h jo input ke basis pe output deta h 
// wahi function ko kisi bhi object ke sath associate kr dete h toh woh method ban jata h 
// toUpperCase sirf aur sirf string ke sath use kr skte h uske alwa kisi ke sath nhi kr skte
// waise hi forEach loop h toh function hi lekin jur gya h arrays ke sath ya fir isko string ke sath bhi use kr skte h humlog



// forEach is a function or method which is use to create a loop.

// forEach loop use krne ke liye pehle hum 
// arr ke sath forEach likhte h fir brackets ke under parameter pass krte h aur iss parameter ko hum callBackFunction bhi bolte h)
// aur functions jo h woh javaScript ke under parameter ke tarah bhi pass ho skte h 


// function javasript ke under normal variable ke trh pass bhi kiye jaa skte h


// eg
// function abc() {
//     console.log("hello");
// }

// function myFunction(abc) { // yeh abc bhi function hi h lekin idhar parameter ke tarah pass ho rha h
//     return abc;
// }


// A callback is a function passed as an argument to another function.

// arr.forEach( callBackFunction )
// CallbackFunction : Here, it is a function to execute for each element in the array matlab idhar callbackfunction array ke har element ke liye execute hota h 


// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {  // idhar for each loop laga diye aur ek printVal nam ka function create kr diye h jisme ek parameter diye h val naam ka ab yeh val ek ek krke for each loop me array ke har element ko print krwa dega
//     console.log(val); // for each loop ke karan jo bhi element ek ek krke val me gye the usko console.log krke print krwa denge
// })
// Output will be 1,2,3,4,5



// for each ke andar yeh jo callback function hum pass krte h yeh pass krte h in the form of an arrow function 


// another example of forEach loop
// let arr = ["delhi", "mumbai", "kolkata", "chennai", "bangalore"];
// arr.forEach(function printCity(value) {  // idhar for each loop laga diye aur ek printCity nam ka function create kr diye h jisme ek parameter diye h val naam ka ab yeh val ek ek krke for each loop me array ke har element ko print krwa dega
//     console.log(value); // for each loop ke karan jo bhi element ek ek krke val me gye the usko console.log krke print krwa denge
// })
// Output will be delhi, mumbai, kolkata, chennai, bangalore



// let array = ["pune", "mumbai", "delhi", "kolkata", "chennai"];
// array.forEach((value, index, array) => {
//     console.log(value, index, array);
// })
// Output will be 
// pune 0 [ 'pune', 'mumbai', 'delhi', 'kolkata', 'chennai' ]
// mumbai 1 [ 'pune', 'mumbai', 'delhi', 'kolkata', 'chennai' ]
// delhi 2 [ 'pune', 'mumbai', 'delhi', 'kolkata', 'chennai' ]
// kolkata 3 [ 'pune', 'mumbai', 'delhi', 'kolkata', 'chennai' ]
// chennai 4 [ 'pune', 'mumbai', 'delhi', 'kolkata', 'chennai' ]
// yeh array ke har element ke sath uska index aur array print krwa dega




// Higher Order Function
// A function that takes another function as an argument or returns a function is called a higher order function.
// forEach is a higher order function because it takes a function as an argument.
 


// Practice question
// Create an array of 5 elements and print the square of each element using the forEach loop.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((value) => {
//     console.log(value * value);
// })




// Some more Array Methods
// Map function
// Map function is used to create a new array with the results of calling a function for every array element.
// Creates a new array with the results of some operation. The value its callback returns are used to form new array.

// arr.map( callbackFunction ( value, index, array ))
// callbackFunction : Function that produces an element of the new array. It takes three arguments: value, index, array.

// let newArray = arr.map((value) => {
//     return value * 2;
// })


// Create an array of 5 elements and print the square of each element using the map function.
// let numbers = [1, 2, 3, 4, 5];
// let newArray = numbers.map((value) => {
//     return value * value;
// });
// console.log(newArray);




// Filter function
// Filter function is used to create a new array with all elements that pass the test implemented by the provided function.
// Creates a new array with the elements that pass the test.
// Creates a new array of elements that give true for a condition / filter.

// arr.filter( callbackFunction ( value, indes, array ))

// all even elements from the array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.filter((value) => {
//     return value % 2 === 0;
// })

// console.log(newArr);



// Reduce function
// Reduce function is used to reduce the array to a single value.
// Executes a provided function for each value of the array (from left to right).
// The return value of the function is stored in an accumulator.
// The accumulator is remembered between each iteration.
// The final result is returned.

// Performs some operations and reduces the array to a single value. It returns that single value.
// Matlab input me toh bahut sari values rahengi lekin output me ek hi value aayegi.
// jaise ki sum ho gya , product ho gya , average ho gya etc.


// arr.reduce( callbackFunction ( accumulator, value, index, array ))
// accumulator : A value that is used to store the result of the operation.
// value : The current value being processed.
// index : The index of the current value being processed.
// array : The array reduce was called upon.

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((accumulator, value) => {
//     return accumulator + value;
// });
// console.log(sum);
// Output will be 15



// To find the maximum value in an array
// let arr = [1, 2, 3, 4, 5];
// let max = arr.reduce((accumulator, value) => {
//     return accumulator > value ? accumulator : value; // if accumulator is greater than value then return accumulator otherwise return value
// });
// console.log(max);
// Output will be 5





// Practice question
// We are given an array of marks of students. Filter out all the students who have scored more than 90 marks.

// let marks = [87, 93, 64, 99, 86];
// let topper = marks.filter((value) => {
//     return value > 90;
// })
// console.log(topper);
// Output will be [ 93, 99 ]





// Practice question
// Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate the sum of all numbers in the array. 
// Use the reduce method to calculate the product of all the numbers in the array.

// let input = prompt("Enter a number: ");
// let array = [];
// for (let i = 1; i <= input; i++)
// {
//     array[i-1] = i; // yaha i - 1 isliye kiya h kyuki array 0 se start hota h toh agar humne i ki jagha i - 1 kiya toh 1 se start ho jayega
// }
// console.log(array);
// let sum = array.reduce((accumulator, value) => {
//     return accumulator + value;
// })
// console.log("Sum of the array is : ", sum);

// let product = array.reduce((accumulator, value) => {
//     return accumulator * value;
// })
// console.log("Product of the array is : ", product);






// Window Object
// The window object represents an open window in a browser. It is browser's object ( not JavaScript's ) & is automatically created by browser.
// It is a global object with lots of properties and methods.
// The window object represents the browser window.
// It is the top level object in the DOM.
// It represents the browser window or tab.
// It is the parent of all objects in the browser.




// DOM ( Document Object Model )
// Document Object Model is a programming interface for web documents.
// It represents the structure of the web page.
// It is a tree-like structure of nodes.
// It is used to manipulate the content of the web page.

// Apna college (statement ) - When a web page is loaded, the browser creates a Document Object Model ( DOM ) of the page


// Dom ki help se hum JavaScript ke through HTML ko access kr skte h
// Means hum JS ke code se HTML ke elements ko access kr skte h aur unko manipulate kr skte h
// JS ke code se HTML ke elements ko access krne ke liye hume DOM ki help leni padti h
// DOM ek programming interface h jo web documents ko represent krta h
// DOM ek tree like structure h jisme nodes hote h

// console.dir(document);
// console.log(document);
// console.log(document.body);
// console.dir(document.body);




// DOM Manipulation
// DOM Manipulation is the process of changing the content of a web page using JavaScript.
// It is used to change the content, style, and structure of the web page.
// It is used to add, remove, and modify the elements of the web page.




// DOM Manipulation Methods



// Selecting with id
// document.getElementById("id") // Returns the element with the specified id.

// Example : console.dir(document.getElementById("demo"));
// Output will be the complete structure of the element with the id demo.

// Example : console.log(document.getElementById("demo"));
// Output will be the element with the id demo.





// Selecting with class
// document.getElementsByClassName("class") // Returns a collection of elements with the specified class.

// Example : console.dir(document.getElementsByClassName("demo"));
// Output will be the complete structure of the elements with the class demo.

// Example : console.log(document.getElementsByClassName("demo"));
// Output will be the elements with the class demo.





// Selecting with tag name
// document.getElementsByTagName("tag") // Returns a collection of elements with the specified tag.

// Example : console.dir(document.getElementsByTagName("p"));
// Output will be the complete structure of the elements with the tag p.

// Example : console.log(document.getElementsByTagName("p"));
// Output will be the elements with the tag p.





// Query Selector

// document.querySelector("myID / myClass / myTag") // Returns the first element that matches the specified selector.
// returns the first element that matches a specified CSS selector in the document.


// Example : console.dir(document.querySelector("#demo"));
// Output will be the complete structure of the element with the id demo.


// document.querySelectorAll("myID / myClass / myTag") // Returns all elements that matches the specified selector.
// returns all elements that matches a specified CSS selector in the document.
// isme id use nhi krenge all ke liye




// Properties
// tagName : Returns tag for element nodes
// Example : console.log(document.getElementById("demo").tagName);
// Output will be the tag of the element with the id demo.


// innerText : Returns the text content of the element and all its children
// Example : console.log(document.getElementById("demo").innerText);
// Output will be the text content of the element with the id demo.


// innerHTML : Returns the plain text or HTML contents in the element
// Example : console.log(document.getElementById("demo").innerHTML);
// Output will be the HTML content of the element with the id demo.




// textContent : Returns textual content even for hidden elements
// Example : console.log(document.getElementById("demo").textContent);
// Output will be the text content of the element with the id demo.



// Practice Questions

// 1st question
// Create a H2 heading elements with text - "Hello JavaScript". Append "from Apna College students" to the text using Js

// HTML code me hum body ke andar ek h2 tag create krenge usme Hello JavaScript likh denge
// ab JS ke through isko access krna h toh selecting with id ya class ya tag kr skte h 
// lekin hume sirf h2 tag hi pta h toh selecting with tag krenge isme

// let h2 = document.getElementsByTagName("h2");
// console.dir(h2.innerText); //  ab yaha bhi innerText ya innerHTML use kr skte the isilye yeh use kr liye
// h2.innerText = h2.innerText + " from Apna College students"; // yaha h2.innerText me jo bhi text h woh append ho jayega from Apna College students ke sath isme concatinate kr diye h aur usko ussi variable me store krwa diye.
// console.log(h2.innerText); // ab yaha print krwa diya h jo bhi text h woh print ho jayega
// Output will be Hello JavaScript from Apna College students




// Attributes
// Attributes are the additional information about an element like id , class, tag.
// Attributes are key-value pairs.

// getAttribute("attribute") : Returns the value of the specified attribute.
// jaise html code me ek div create krenge aur usko ek id denge toh ussi ko attribute bolte h 
// jaise div ko id de diye box krke ya usko koi class de diye toh yeh attribute hota h 
// aab issi ko access krne ke liye getAttribute ka use krte h
// ab jab bhi hum div ke attribute ko likhnege ki id btao div ka toh bol dega ki box diye the div ka id ko

// Example : let div = document.querySelector("div");
// console.log(div.getAttribute("id"));  
// Output will be the class of the element with the id demo.


// setAttribute("attribute", "value") : Sets the value of the specified attribute.
// ab set attribute ka use krte h jab hume koi attribute set krna ho
// agar koi id pehle se diya ho toh usko change krne ke liye setAttribute ka use krte h
// Example : document.querySelector("p");
// console.log(setAttribute("class", "newClass"));
// yaha pehle se jo class di h usko change kr diya h newClass me
// Output will be the newClass



// Style
// Style is an object that represents the CSS properties of an element.
// We can change the style of an element using JavaScript.
// We can change the color, font-size, background-color, etc.



// Style Properties
// node.syle
// html me koi bhi element ko id de denge box for example
// ab usko style.css me jake kuch properties de denge like height, width, background color , color etc 
// ab isko javascript ke code se access krenge
// let div = document.querySelector("div");
// console.log(div);
// ab isko change krne ke liye
// div.style.backgroundColor = "red";
// ab yeh div ka background color red ho jayega
// div.style.fontSize = "20px";
// ab yeh div ka font size 20px ho jayega
// div.style.color = "white";
// ab yeh div ka color white ho jayega

// div.style.visibility = "hidden";
// ab yeh div hide ho jayega
// div.style.visibility = "visible";
// ab yeh div show ho jayega
// div.style.display = "none";
// ab yeh div hide ho jayega
// div.style.display = "block";
// ab yeh div show ho jayega





// Insert Elements
// Insert krne ke liye two step process hota h 
// Create the element
// jaise ki paragraph bana diye , div bana diye , h1 bana diye
// add the element 
// jaise ki body ke andar insert kr diye



// let newButton = document.createElement("button");
// newButton.innerText = "Click Me";
// console.log(newButton);
// ab button create to ho gya h lekin abhi yeh dikhega nhi isko dikhane ke liye
// add krne ke liye dom ke tree like structure me add krna hota h aur total 4 methods hote h add krne ke liye
// node.append( element ) : Adds an element as the last child of a node. or adds at the end of the node ( inside ).
// node.prepend( element ) : Adds an element as the first child of a node. or adds at the start of the node ( inside ).
// node.after( element ) : Adds an element after the node. or adds after the node ( outside ).
// node.before( element ) : Adds an element before the node. or adds before the node ( outside ).




// ab man lo ki div create kiye aur usme ek unordered list create kiye 
// uss unordered list me 2 se 3 new element create kiye 
// css me usko div ko ek border de diye aur color de diye 

// ab jab node.append(newButton); node ke jagha div likhenge kyuki div ko access kr rhe h na isliye 
// let div = document.querySelector("div"); // isse div select ho jayega
// div.append(newButton); // isse button div under unordered list ke baad dikhega 
// let div = document.querySelector("div"); // isse div select ho jayega fir koi bhi code perform krenge
// div.prepend(newButton); // isse button div ke under lekin unordered list se pehle show hoga
// let div = document.querySelector("div");
// div.after(newButton); // yeh ab div ke baad button show hoga
// let div = document.querySelector(div);
// div.before(newButton); // yeh ab div ke bahar lekin div se pehle show hoga 



// Delete Element 
// pehle node ko access krenge fir delete perform krenge
// let div = document.querySelector(div);
// div.remove(); // ab yeh remove ho jayega 




// khud se padh le append child and remove child




//Practice question 

// Create a new button element. Give it a text "click me", background color of red and text color of white.
// Insert the button as the first element inside the body tag.


// ab is code ko perform krne ke liye 
// let newButton = document.createElement("button");
// newButton.innerText = "click me!";
// newButton.style.color = "white";
// newButton.style.backgroundcolor = "red";

// document.querySelector("body").prepend(newButton);



// Create a <p> tag in html, give it a class and some styling. 
// Now create a new class in CSS and try to append this class to the <p> element

// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using ClassList.




// HTML ke under a <p> create krenge aur usko koi class de denge :--  <p class ="content"> I am a Paragraph.</p>
// Abb css me styling de denge .content { color : red};

// Now create a new class in CSS and try to append this class to the <p> element.
// ab new class banayenge aur usko background color de denge
// .newClass {background-color : red};

// ab JS se p ko access krna h 
// let para = document.querySelector("p");
// para.getAttribute("class");
// Output - content
// para.setAttribute("class", "newClass");
// isse class ka naam change kr diya aur purani class hat gyi toh uska styling bhi hat jayega





// Events in JavaScript 
// The change in the state of an object is known as an Events
// jaise button ko click kr diya woh bhi event h double click krte h woh bhi ek event hota 
// agar click krte h button ko toh new page khul jata h , ya final submit ke button pe click krte h toh woh bhi submit ho jata h 
// issi event handle krne ko event handlelling bolte h 

// Events are fired to notify code of "interesting changes" that may affect code execution.
// Mouse event ( click, double click, etc )
// Keyboard events ( keypress, keyup, keydown )
// Form events ( submit etc ) 
// Print event and many more




// mdn ke website se padh skte h humlog code ko 
// agar maan lo hum html me inline styling add kiye means html me krte h <p ke sath likh dete h waise hi agar html code inline event handleling kiye aur fir javascript code se event handling kiye toh first priority js ke code ko dega 
// agar same event handling bar bar kar rhe h toh latest wale ka first priority hoga 






// For example :--
// HTML code 
// <button id = "btn1" onclick = "console.log('hello')"> btn1 </button>
// uper wale line me hello single quotes me likhe h kyuki woh already double quotes me h 

// JS code 
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//      console.log("Handler1")
//      let a = 25;
//      a++;
//      }
//btn1onclick = () => {
//      console.log("Handler2");      (yeh latest wala print hoga uper wala nhi)
//      };







// Event Object 
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.
// node.event = (e) => {    // event object is denoted by e
//      handle here
//}
// e.target, e.type, e.clientX, e.clientY

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//      console.log(evt);               // Pure event ko print krwa dega
//      console.log(evt.type);          // Kis type ka event h woh print krega Output == mouse event
//      console.log(evt.target);        // kaha pe yeh event hua h woh print krwa dega Output == div 
//      console.log(event.clientX);     // Screen pe x co ordinates ko print krwa dega 
//      console.log(event.clientY);     // Screen pe y co ordinates ko print krwa dega 
// }





// Two methods se event ko handle krte h humlog
// 1st. Inline handling lekin isse HTML code bahut bulky ho jata h 
// 2nd. Js me code kr ste h but isse ek baar me bas ek hi event handle krwa skte h 
// that's why event listeners are introduced 



// Event Listeners
// node.addEventListener(event, callback)   // yaha event double click single click kuch bhi ho skta h aur callback ek function hoga jaise hi event hit hoga callback function ko recall kr dega 



// uper wala same kaam ko eventlistener se krwa skte h 
// btn1.addEventListener("click", () => {
//      console.log("button1 was clicked by Handler1");
// });
// btn1.addEventListner("click", () => {
//      console.log("butthon1 was clicked by Handler2")
// });
// ab iss case me dono print hoga kyuki eventlistener use kiye h na




// abb eventlistener se baki kaam bhi krwa skte h 
// btn1.addEventListener("click", (evt) => {   // abb evt se event ko access kr diye 
//      console.log("button1 was clicked by Handler1");
//      console.log(evt);
//      console.log(evt.type);
// });
// iss eventlistener me hum event object ka bhi task perform kr denge




// jaise event create kiye h waise hi delete bhi kr skte h 
// node.removeEventListener(event, callback)
// NOTE == The callback reference should be same to remove



// agar mann lo ki kisi bhi eventlistener ko delete krna h toh usko ek variable me store krwa denge tabhi delete krenge toh hoga
// for example

// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler1");
// });
//
//
// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler2");
// });
//
//
//
// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler3");
// });
//
//
//
//
// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler4");
// });
// 
// yaha pe 4 eventlistener bana diye toh isko agar remove krenge toh remove nhi hoga
//
//
// btn1.removeEventListener("click", () => {
//      console.log("button was clicked - handler3");
// });
// isse kuch bhi delete nhi hoga 




// delete krne ke liye==
// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler1");
// });
//
//
// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler2");
// });
//
//
//
// const handler3 = () => {
//      console.log("button was clicked - handler3");
// };
//
// btn1.addEventListener("click", handler3); // uper me const me assign krke function bana diye aur idhar call kr diye function ko 
//
//
//
// btn1.addEventListener("click", () => {
//      console.log("button was clicked - handler4");
// });
//
// btn1.removeEventListener("click", handler3);
// ab wahi function ko wapis call kiye h taki remove kr ske usse 






// Let's Practice 
// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.



// ( taggle ) == ek state se dusre me jana aur fir wapis ussi me aa jana ko toggle kehte h 


// HTML code se button bana denge
// <button id = "mode"> Change mode </button>


// JS code me ab 
// let modeBtn = document.querySelector("#mode");
// let currMode = "light"; // current mode light rakhe h taki bad me isko dark kr de
// modeBtn.addEventListener("click", () => {
//      if (currMode === "light")
//          {
//              currMode = "dark";
//              document.querySelector("body").style.backgroundColor = "black";
//          }
//      else {
//              currMode = "dark";
//              document.querySelector("body").style.backgroundColor = "white";
//          }
//
//      console.log(currMode);
// });


















// Classes and Objects in JavaScript

// A javaScript object is an entity having state and behaviour ( properties and method ).
// JS objects have a special property called prototype


// jab bhi hum class banate h toh usme apne aap ek prototype object ban jata h 
// prototype khud me ek object h 
// jab bhi koi array banate h toh usme bhi ek prototype object ban jata h aur usko hum access kr skte h through our code


// for example
// const student = {
//     fullName: "Abhishek", 
//     marks: 8,
//     printMarks: function () {
//         console.log("marks =", this.marks); // marks ko access krne ke liye
//     },
// }


// aaise hi array me bhi prototype hota h har jagha hota h 
// jo bhi object banti h woh apne aap ek prototype create krti h 





// abb mann lo ek function bana rhe h object ke under toh 


// const employee = {
//     calculateTax1() {
//         console.log("tax rate is 10%");
//     },
//     calculateTax2 : function () {
//         console.log("tax rate is 10%");
//     }
// };
// Dono hi methods function ko define krne ke liye correct h 




// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// };


// abb man lo ek new employee aaya aur uska salary defined h toh 


// const karanArjun = {
//     salary: 40000,
// };

// ab karan ko toh nhi pta employee wale me kitna tax lag rha h krke 
// toh uss object ke function ko isme use krne ke liye prototype function ka use krte h 


// karanArjun.__proto__ = employee;


// We can set prototype using __proto__




// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// };

// const karanArjun = {
//     salary: 40000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// }; 

// karanArjun.__proto__ = employee;


// output will be tax rate is 20% because
// if object and prototype have same method, object's method will be used.







// Classes in JavaScript
// Class is a program- code template for creating objects.
// Those objects will have some state (variables) and some behaviour (functions) inside it.

// class MyClass{
//     constructor(){...}
//     myMethod(){...}
// }

// Class bas ek blueprint h object ko store krwane ke liye 



// man lo ek Toyota car ka class bana diye 
// class ToyotaCar {
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brandName = brand; // this = Each individual object , yaha pe brandName ko brand bhi likh skte h dono brand alag alag hote h this wala alag aur dusra wala alag
//     }
// }


// ab yaha pe comma se seperate nhi kiye kyuki class me khud pta chal jata h 2 alag alag funcion h 
// abb iss class se object create krna h toh uske liye template use krenge
// let myObj = new MyClass(),


// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexux = new ToyotaCar();



// Constructor() method is 
// constructor class ek andar ek method hota h 
// agar hum constructor create nhi krte toh woh automatically create ho jata h 
// let object = new MyClass();
// ab jaise hi yaha new likhe waise hi constructor ko create kr dega 
// lekin humlog khud ka bhi constructor bana skte h bas usko likhna h js ke under





// class ToyotaCar {
//     constructor() {
//         console.log("creating a new object");
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brandName = brand; // this = Each individual object , yaha pe brandName ko brand bhi likh skte h dono brand alag alag hote h this wala alag aur dusra wala alag
//     }
// }
// let fortuner = new ToyotaCar(); //constructor print hoga creating a new object
// let lexux = new ToyotaCar(); //constructor print hoga creating a new object




// class ToyotaCar {
//     constructor() {
//         console.log("creating a new object");
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brandName = brand; // this = Each individual object , yaha pe brandName ko brand bhi likh skte h dono brand alag alag hote h this wala alag aur dusra wala alag
//     }
// }
// let fortuner = new ToyotaCar(); //constructor print hoga creating a new object
// let lexux = new ToyotaCar(); //constructor print hoga creating a new object







// ussi tarah agar hum set brand ko constructor ke under pass on krte toh 
// class ToyotaCar {
//     constructor(brand) {
//         console.log("Creating new object");
//         this.brand = brand;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner"); // constructor pass hoga
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus"); // constructor pass hoga
// console.log(lexus);






// Inheritance in JavaScript
// Inheritance is passing down properties and methods from parent class to child class.
// jo cheez humare ek class me h usko dusre class me use krnenge 

// code for writing this .. 
// class Parent{
// }
// class Child extends Parent {
// }


// For example
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let object = new Child();





// class Person {
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problem, build something");
//     }
// }


// let Abhishek = new Engineer();



// class Person {
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problem, build something");
//     }
// }

// // abb uper me parent me work ko define kiye h do nothing wahi child me define kiye kiye solve problem, build something
// // yaha pe abhi sirf child wala ka work hi kaam krega 
// let Abhishek = new Engineer();


// If child and Parent have same method, child's method will be used. [ Method Overriding]


// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problem, build something");
//     }
// }

// // yaha pe constructor create kr diye h person me 
// // kyuki hum parent ka property inherit kr rhe h toh yeh species sab me aa jayega
// let Abhishek = new Engineer();




// SUPER KEYWORD
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
// super(argument) // calls parent's constructor
// super.parentMethod(arguments)



// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         super();   // to invoke parent class constructor kyuki hum child me constructor create kr rhe h toh woh parent ke constructor ko dhund rha h isliye isko invoke kr diye 
//         this.branch = branch; 
//     } 
//     work() {
//         console.log("solve problem, build something");
//     }
// }

// let engobj = new Engineer("chemical engineering");




// ab check krna h ki kaunsa constructor pehle kaam karta h sequence kaunsa kya h toh uske liye bas constructor ke under console.log wala statement ko print krwa denge aur dekh lenge ki kaunsa kaam pehle ho rha h

// class Person {
//     constructor() {
//         console.log("Enter the parent constructor");
//         this.species = "homo sapiens";
//         console.log("Exit from parent constructor");
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         console.log("Enter the child constructor");
//         super();   // to invoke parent class constructor kyuki hum child me constructor create kr rhe h toh woh parent ke constructor ko dhund rha h isliye isko invoke kr diye 
//         this.branch = branch; 
//         console.log("Exit from child constructor");
//     } 
//     work() {
//         console.log("solve problem, build something");
//     }
// }

// let engobj = new Engineer("chemical engineering");

// Output will be 
// Enter the child constructor
// Enter the parent constructor
// Exit from parent constructor
// Exit from child constructor





// agar maan lo ki humne ek code likha aur usme class banai person naam ka aur her person ka khud ka ek naam hoga 


// class Person {
//     constructor(name) { // har aadmi ka khud na name passon krne ke liye
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(name) {

//         super(name);   // to invoke parent class constructor kyuki hum child me constructor create kr rhe h toh woh parent ke constructor ko dhund rha h isliye isko invoke kr diye 
//     }              // ab agar hum super me name nhi likhenge toh value parent tak passon nhi hoga aur undefined aa jayega isliye jab bhi aisa create krte h toh super me bhi passon kr dete h 
//     work() {
//         super.eat(); ab pehle eat print hoga fir console wala statement aur agar super nhi likhte direct eat function use krte toh error aa jata 
//         console.log("solve problem, build something");
//     }
// }

// let engobj = new Engineer("Abhishek");







// Lets Practice :
// You are creating a website for your college. Create a class User with properties, name and email. It also has a method called viewData() that allows user to view website data.



// let DATA = "secret information";
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// let student1 = new User("Abhishek", "thisisabhishek@gmail.com");
// let student2 = new User("Kashyap", "thisiskashyap@gmail.com");




// Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.


// let DATA = "secret information";
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data = ", DATA);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "Some new value";
//     }
// }

// let student1 = new User("Abhishek", "thisisabhishek@gmail.com");
// let student2 = new User("Kashyap", "thisiskashyap@gmail.com");

// let admin = new Admin("admin", "admin@college.com");






// Error Handling


// try-catch method

// try {
// .... normal code
// } catch( error ) { // error is error object
//  ..... handling error
// }

// mann lo ki code likh rhe h bahut lamba h aur fir error aa gya code me toh use baki ka code run nhi krta h toh usko handle krne ke liye

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b", a + b);
// console.log("a + b", a + b);
// console.log("a + b", a + b);
// console.log("a + b", a + c); // aab yaha c defined nhi h toh error aa jayega aur baki ka line print nhi hoga usse bachne ke liye error handling lagate h
// console.log("a + b", a + b);
// console.log("a + b", a + b);
// console.log("a + b", a + b);




// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b", a + b);
// console.log("a + b", a + b);
// console.log("a + b", a + b);
// try {
//     console.log("a + b", a + c); // yeh error h 
// } catch (err) {
//     console.log(err); // abb jo error aane wala hoga woh print ho jayega
// }

// console.log("a + b", a + b);
// console.log("a + b", a + b);
// console.log("a + b", a + b);
                                







// Sync in Javascript

// Synchronous Programming
// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// means jaise jaise code likhte jayenge waise waise execute hote jayega line by line

// Example for Synchronous programming :--
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");

// Output will be in sequence :--
// One
// Two
// Three
// Four
// Five



// Asynchronous Programming
// Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. 
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
// Iss scenario me kya hoga ki agar man lo koi line execute hone me time le rha h toh usse chakkar me sab wait nhi krega isliye jo time le rha h usko parallel execute krega aur fir output provide krega.

// Example me :--
// console.log("one");
// console.log("two");

// setTimeout(() => {             // settimeout ek function hota h code ko delay se print ya time of execution ko aage piche krke
//     console.log("hello");
// }, 4000);                      // 4000 yaha milisecond h, 1 sec me 1000 milisecond hota h 

// console.log("three");
// console.log("four");





// Callbacks :
// A callback is a function passed as an argument to another function.

// Example :--
// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);

// Explanation:==
// Let's break down the code step by step.



// Code Explanation:

// 1. Function sum(a, b)

// function sum(a, b) {
//     console.log(a + b);
// }
// This is a function named sum that takes two parameters: a and b.
// It calculates their sum (a + b) and prints the result to the console using console.log.



// 2. Function calculator(a, b, sumCallback)

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// This function is named calculator, which takes three parameters:
// a: First number.
// b: Second number.
// sumCallback: A function passed as a parameter (callback function).
// Inside the function, sumCallback(a, b) is called, which means it will execute the function passed as sumCallback and pass a and b as arguments.


// 3. Function Call

// calculator(1, 2, sum);

// Here, the function `calculator` is called with:
// 1 as the first argument (a).
// 2 as the second argument (b).
// sum function as the third argument (sumCallback).



// How the Code Works Step-by-Step:
// 1. calculator(1, 2, sum) is called.
// 2. Inside calculator, the sumCallback function (which is sum) is called with arguments 1 and 2:

//    sum(1, 2);

// 3. This executes the sum function, which calculates:
//    console.log(1 + 2);  // Outputs: 3

// 4. The number 3 is printed in the console.

// Key Concepts in the Code:
// 1.Callback Functions:
// sum is passed as an argument to calculator, making it a callback function.
// Callback functions are used to execute a function inside another function dynamically.

// 2.Higher-Order Functions:
// calculator is a higher-order function because it takes another function (sum) as a parameter.

// Output of the Code:
// 3

// This is printed to the console.


// Why Use This Approach?
// This approach makes the code flexible because we can pass different functions instead of sum if needed.
// Example:
//   function multiply(a, b) {
//       console.log(a * b);
//   }
//   calculator(3, 4, multiply);  // Outputs: 12
// Now, the `calculator` function works with different operations like multiplication.





//Callback Hell
// nested callbacks stacked below one another forming a pyramid structure ( Pyramid of Doom )
// this style of programming becomes difficult to understand and manage
// Pehli baar me smjh nhi aayega yeh... dusri baar bhi shayad hi aayega 



// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// // this is called callback hell :-- 
// getData(100, () => {
//     getData(200, () => {
//         getData(300, () => {
//             getData(400);
//         });
//     });
// });



// To solve callback hell we use promises
// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.



// let promise = new Promise((resolve, reject) => {...})
// yaha pe resolve , reject 1st handler h 
// aur {} iske under wala 2nd handler h 



// Promise has three states :==
// Pending   // amazon se koi confirmation nhi aaya ki product deliver hoga ya nhi  
// Fulfilled  means  resolve  // amazon ke taraf se aa gya ki order deliver ho chuka h 
// Rejected  // amazon ke taraf se confirmation aa gya ki offer reject ho gya h



// Pending Code for promise
// let promise = new Promise((resolve, reject) => {
//     console.log("Promise");
// })



// resolve code 
// let promise = new Promise((resolve, reject) => {
//     console.log("Promise");
//     resolve(123);
// })


// Rejected code
// let promise = new Promise((resolve, reject) => {
//     console.log("Promise");
//     reject(123); // 123 ke jagha jo likhenge wahi error me show krega
// });

// in promises, resolve and reject are callbacks provided by JS.




// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
// let promise = getData();

// yaha iss code me return krwa rhe h promise ko aur data ko ab data jo h woh toh 5sec ke baad hi aayega tab tak ke liye promise pending rahega lekin jaise hi getData wala code 5sec ke baad aayega tabhi humara promise fullfilled ho jayega aur promise resolve ho jayega...
// yaha bas humlog promise wala use kr rhe h lekin promise api ke taraf se hi aayega ...


// A javaScript promise object can be :
// Pending : the result is undefined
// Resolved : the result is a value ( fulfilled )   resolve ( result ) // resolve krte h toh result print krwa dete h 
// Rejectd : the result is an error object       reject( error ) // reject  krte h toh error print krwa dete h 


// Promise has state (pending, fullfilled) and some result ( result for resolve and error for reject).






// Promise agar mil rha h toh usko use kaise krte h 
// .then() and .catch()


// agar promise ke fullfill hone ke baad kuch kaam krwana ho toh promise.then use krte h 
// jayda yahi use krenge
// promise.then((res) => {...})

// agar promise ke reject hone ke baad kuch kaam krwana ho toh promise.catch ka use krte h
// promise.catch((err) => {...})


// use of promise.then
// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("I am a Promise");
//         //resolve("success");  // dono resolve aur reject me se kisi ko bhi commentout krke print krwa skte h 
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled");
// }); // yeh block of code tabhi chalega jab humara promise resolve hoga 


// // agar reject hua toh promise.catch use krna padega
// promise.catch(() => {
//     console.log("rejected ");
// })



// yeh same hi code h uper wala 
// let promise = getPromise();
// promise.then((res) => { // same hi h bas ek result function me pass karwa diye aur print krwa diye
//     console.log("Promise fulfilled", res);
// });
// promise.catch((err) => { // same ussi tarah error function me pass krwa diye aur print krwa diye
//     console.log("rejected ", err);
// })







// Promise Chain  
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// console.log("fetching data1 ..... ");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });


// console.log("fetching data2 ..... ");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });

// iss code me dono ek sath print hoke aayega woh bhi 4 sec ke baad
// ab hum chahte h pehle data1 aaye 4 sec ke baad fir data 2 aaye uske 4 sec ke baad 
// iske liye hum chaining kr skte h means ek then ke under me dusra then use kr skte h 

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// console.log("fetching data1 ..... ");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2 ..... ");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });

// p1 ke under hi p2 ko fetch krne ke liye laga diye ab pehle data 1 fetch hoga uske baad 4 sec ke baad hi data 2 fetch hoga 
// console.log waha result hata bhi skte h 
// ab uper me maan lo ki pehle asyncfunc1 ko pehle p1 me store krwaye fir p1 pr jake then function use kiye toh hum isko direct bhi kr skte h 





// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// console.log("fetching data1 ..... ");
// asyncFunc1().then((res) => {
//     console.log("fetching data2 ..... ");
//     asyncFunc2().then((res) => {});
// });



// ab yeh toh ho gya promise chain ka ab issi ke jagha pe callback hell wale me promise chain laga skte h 






// Async Await
// async function always returns a promise.
// async function myFunc() { ... }
// await pauses the execution of its surrounding async function until the promise is settled.

// kisi bhi function ke samne agar async likh dete h toh woh async function ban jata h aur automatically promise return krke deta h.
// await agar kisi function ke samne likh diye aur hume pata h ki uss function se promise aane wala h toh await wait krta h aur baki sare execution ko rok deta h 
// await function sirf async function ke under hi use kr skte h 


// function api() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200); // 200 represents success 
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api(); // ab yeh pehli baar data print krwayega 2 sec ke baad fir dusra await api data print krwayega 2 sec ke baad 

// }

// ab pehle wale question ko async await se solve krke dekhenge

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // Async Await
// async function getAllData() {
//     console.log("getting data 1 ....");
//     await getData(1);
//     console.log("getting data 2 ....");
//     await getData(2);
//     console.log("getting data 3 ....");
//     await getData(3);
//     console.log("getting data 4 ....");
//     await getData(4);
// }
// yaha pe isko call krne ke liye getAllData() krenge 



// jaha pe async await ka use krte h waha pe .then() and .catch() ka use nhi krte aur jaha pe .then() and .catch() ka use krte h waha pe async await ka use nhi krte


// ab uper wale code me bar bar function ko call krna padta h iske liye hum IIFE ( Immediately Invoked Function Expression ) ka use krenge



// IIFE ( Immediately Invoked Function Expression )
// IIFE is a function that is called immediately as soon as it is defined.

// (function)(); bas inder koi bhi ek function hona chahiye bracket ke under fir bahar se ek aur toh woh uss function ko immediately execute kr deta h 

// some structure to write IIFE 
// 1st  (function () {
//      .... })();

//2nd arrow function 
// (() => {
//      ...})();

// 3rd async function
// (async () => {
//      ...})();


// ab yaha pe IIFE use krenge niche wale code me 
// yeh normal h aur fir niche me IIFE wala code h 
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // Async Await
// async function getAllData() {
//     console.log("getting data 1 ....");
//     await getData(1);
//     console.log("getting data 2 ....");
//     await getData(2);
//     console.log("getting data 3 ....");
//     await getData(3);
//     console.log("getting data 4 ....");
//     await getData(4);
// }

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // Async Await
// (async function getAllData() {
//     console.log("getting data 1 ....");
//     await getData(1);
//     console.log("getting data 2 ....");
//     await getData(2);
//     console.log("getting data 3 ....");
//     await getData(3);
//     console.log("getting data 4 ....");
//     await getData(4);
// })(); // bas starting me ek bracket fir last me ek bracket aur sabse last me () yeh lga do apne aap kaam krega IIFE.
// bas iska drawback yahi h ki isko bas ekbar hi call kr skte h wapis se krne ke liye copy paste krna hoga 









// Fetch API ( Application Programming Interface ) with Project 

// The Fetch API provides an interface for fetching (sending / receiving) resources.
// It uses Request and Response objects.
// The fetch() method is used to fetch a resource (data).


// let promise = fetch(url, [options])
// jaise hi hum ek fetch api wala code likhte h aur usme url paste krte h toh woh ussi time uss link pe request bhej deta h 
// aur wo link ek promise return krke deta h 



// const URL = "https://cat-fact.herokuapp.com/facts";


// const getFacts = async() => {
//     let response = await fetch(URL);
//     console.log(response);
// };




// ab humlog ko json format me data chahiye toh uske liye response ko ek alag variable me store krwa denge 



// Free API website link 
// free-apis.github.io/#/browse

// Understanding Terms
// AJAX : AJAX is Asynchronous JS and XML


// JSON : JSON is JavaScript Object Notion


// fetch first promise return krega aur json second promise return krega
// json() method: returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS Object)



// const URL = "https://cat-fact.herokuapp.com/facts";


// const getFacts = async() => {
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
// };








// Request and Response

// HTTP Verbs ( HyperText Transfer Protocol )
// Response Status Code :-- Jaise 404 ko bolte h page not found waise hi agar code 5 se start ho rha hoga toh server issue hota h 
// yeh sab ko mdn ke website se padh skte h 


// Some response status code like : ==
// Informational responses(100 to 199)
// Successfull responses(200 to 299)
// Redirection messages(300 to 399)
// Client error responses(400 to 499)
// Server error responses(500 to 599)



// jab bhi hum request bhejte h ya receive krte h tab ke header bhi aata h jisme extra infromation hota h 
// HTTP response header also contain details about the responses, such as content type, HTTP status code etc. 


// Get request : jab hum data ke liye request krte h toh get request krte h 
// Post request : jab bhi hum data ko post kr rhe hote h ya upload kr rhe hota h tab post request krte h 
// Delete request : jab bhi hum kisi cheez ko delete krna chahte h tab delete request ka use krte h . // Jaise man lo ki Instagram pe hum apna id delete kr rhe hote h toh delete pe button pe jaise hi click krte h toh proper delete request jata h
// Patch request : jab bhi hum data ko update krna chahte h tab patch request ka use krte h . // Jaise ki instagram me user id update kr diye ya password update kr diye toh proper ek patch request send krte h 


// Home work task 
// Sending POST Resquest





