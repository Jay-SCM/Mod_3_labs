


//////////////////////// Module 3 Labs //////////////////
/////////////////////// JS Fundamentals ////////////////




// 1). What are the results of these expressions? (answer first, then use console.log() to check)

// // "" + 1 + 0
// console.log("" + 1 + 0); // 10
// // "" - 1 + 0
// console.log("" - 1 + 0); // -1
// // true + false
// console.log(true + false); // 1
// true
// console.log(!true); //false
// // 6 / "3"
// console.log(6 / "3"); // 2
// // "2" * "3"
// console.log("2" * "3"); // 6
// // 4 + 5 + "px"
// console.log(4 + 5 + "px"); // 9px
// // "$" + 4 + 5
// console.log("$" + 4 + 5); // $45
// // "4" - 2
// console.log("4" - 2); // 2
// // "4px" - 2
// console.log("4px" - 2); // NaN
// // " -9 " + 5
// console.log(" -9 " + 5); // -95
// // " -9 " - 5
// console.log(" -9 " - 5); // -14
// // null + 1
// console.log(null + 1); // 1
// // undefined + 1
// console.log(undefined + 1); // NaN
// // undefined == null
// console.log(undefined == null); // true
// // undefined === null
// console.log(undefined === null); // false
// // " \t \n" - 2
// console.log(" \t \n" - 2); // -2

// 2). Which of the below are not giving the right answer? Why are they not correct? How can we
// fix them?
//
// let three = "3"
// let four = "4"
// let thirty = "30"
//
// //what is the value of the following expressions?
//
// let addition = three + four // 34 not 7 because strings concatenate not add
// let multiplication = three * four // 12 it  multiples the numeric value
// let division = three / four // 0.75 it divides the numeric value
// let subtraction = three - four // -1 it subtracts the numeric value
// let lessThan1 = three < four // true (works)
// let lessThan2 = thirty < four // true (works)
//
//
// // corrected code:
// let three = "3";
// let four = "4";
// let thirty = "30";
//
// let addition = parseInt(three) + parseInt(four); // 7
// let multiplication = parseInt(three) * parseInt(four); // 12
// let division = parseFloat(three) / parseFloat(four); // 0.75
// let subtraction = parseInt(three) - parseInt(four); // -1
// let lessThan1 = parseInt(three) < parseInt(four); // true
// let lessThan2 = parseInt(thirty) < parseInt(four); // false



// 3.) Which of the following console.log messages will print? Why?

// if (0) console.log('#1 zero is true') // this one will not print because it evalates to false
// if ("0") console.log('#2 zero is true') // this one will print because it is a string
// if (null) console.log('null is true')  // this one will not print because it is null
// if (-1) console.log('negative is true') // this one will print because it is a negative number
// if (1) console.log('positive is true') // this one will print because it is a positive number

// 4.) Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
//     and b. What does the ‘+=’ do?
//

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
//
// if (a + b < 10) {
//     result += 'less than 10';
// } else {
//     result += 'greater than 10';
// }

// using a ternary operator

// let a = 2, b = 3;
// let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;



// 5.) Rewrite the following function using: a) function expression syntax, and b) arrow function
// syntax. Test each version to make sure they work the same.
//
//     function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }

// a) Function Expression Syntax:

// const getGreeting = function(name) {
//     return 'Hello ' + name + '!';};
// console.log(getGreeting('Megan'));

// b) Arrow Function Syntax:

// const getGreeting = (name) => 'Hello ' + name + '!';
// console.log(getGreeting('Megan'));


// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
//     b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
//     c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
//
// const westley = {
//     name: 'Westley',
//     numFingers: 5
// }
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6
// }
// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya', // Added lastName
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//         console.log(greeting + this.getCatchPhrase(person));
//     },
//     getCatchPhrase(person) {
//         return 'Nice to meet you.';
//     }
// };
//
// inigo.greeting(westley)
// inigo.greeting(rugen)


// const westley = {
//     name: 'Westley',
//     numFingers: 5};
// const rugen = {
//     name: 'Count Rugen',
//     numFingers: 6};
// const inigo = {
//     firstName: 'Inigo',
//     lastName: 'Montoya', // Added lastName property
//     greeting(person) {
//         let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//         console.log(greeting + this.getCatchPhrase(person));},
//     // added catchphrase function for the fingers
//     getCatchPhrase: (person) => (person.numFingers === 6) ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die." : 'Nice to meet you.'
// };
// inigo.greeting(westley);
// inigo.greeting(rugen);


// 7.) The following object represents a basketball game and keeps track of the score as the
// game progresses.
//     a) Modify each of the methods so that they can be ‘chained’ together and the last line of
// the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
// increment it, similar but separate to the score. Include the foul count in the half time and
// full time console messages
// d) Test your object by chaining all the method calls together in different combinations.

//     const basketballGame = {
//     score: 0,
//     freeThrow() {
//         this.score++;
//     },
//     basket() {
//         this.score += 2;
//     },
//     threePointer() {
//         this.score += 3;
//     },
//     halfTime() {
//         console.log('Halftime score is '+this.score);
//     }
// }
// //modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();


// const basketballGame = {
//     score: 0,
//     fouls: 0, // added to track the fouls
//     freeThrow() {
//         this.score++; // increment score
//         return this; // Return function
//     },
//     basket() {
//         this.score += 2;
//         return this;},
//     threePointer() { //
//         this.score += 3;
//         return this;},
//     halfTime() {
//         console.log(`Halftime score is ${this.score}, fouls: ${this.fouls}`); //  print added fouls
//         return this;},
//     fullTime() {
//         console.log(`Full-time score is ${this.score}, fouls: ${this.fouls}`);//
//         return this;},
//     commitFoul() {
//         this.fouls++;
//         return this;}
// };
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().commitFoul().halfTime().freeThrow().commitFoul().fullTime();


// 8.) The object below represents a single city.
//     a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
//     b) Create a new object for a different city with different properties and call your function
// again with the new object.

// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'
// }

// a) Function to print object properties and values:
// function printObjectProperties(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key}: ${obj[key]}`);}
//     }
// }
// const sydney = {
//     name: 'Sydney',
//     population: 5_121_000,
//     state: 'NSW',
//     founded: '26 January 1788',
//     timezone: 'Australia/Sydney'};
// printObjectProperties(sydney);
//
// // b) Create a new city object and call the function with it:
//
// const melbourne = {
//     name: 'Melbourne',
//     population: 5_078_193,
//     state: 'VIC',
//     founded: '30 August 1835',
//     timezone: 'Australia/Melbourne'};
// printObjectProperties(melbourne);

// 9). Use the following variables to understand how JavaScript stores objects by reference.
//     a) Create a new moreSports variable equal to teamSports and add some new sport
// values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
//     e) Change the way the moreSports and cat2 variables are created to ensure the
// originals remain independent

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let dog1 = 'Bingo';
// let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift):

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports = teamSports.slice(); // Create a shallow copy of teamSports
//
// moreSports.push('Soccer');
// moreSports.unshift('Basketball');
//
// console.log(moreSports); // ['Basketball', 'Hockey', 'Cricket', 'Volleyball', 'Soccer']
// console.log(teamSports); // ['Hockey', 'Cricket', 'Volleyball']

// b) Create a new dog2 variable equal to dog1 and give it a new value:

// let dog1 = 'dog2';
// let dog2 = 'dog4'; // dog2 is now independent
//
// console.log(dog2);
// console.log(dog1);

// c) Create a new cat2 variable equal to cat1 and change its name property:

// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2 = { ...cat1 }; // Create a shallow copy of cat1
//
// cat2.name = 'Whiskers';
//
// console.log(cat2); // { name: 'Whiskers', breed: 'Siberian' }
// console.log(cat1); // { name: 'Fluffy', breed: 'Siberian' }

// 10.) The following constructor function creates a new Person object with the given name and
// age values.
//     a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
//     e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.


//     function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// }
//
// // a) Create a new person using the constructor function and store it in a variable:
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// }
//
// const person1 = new Person('Alice', 30);
//
// // b) Create a second person using different name and age values and store it in a separate variable:
//
// const person2 = new Person('Bob', 25);
//
// // c) Print out the properties of each person object to the console:
//
// console.log(person1); // { name: 'Alice', age: 30, human: true }
// console.log(person2); // { name: 'Bob', age: 25, human: true }
//
// // d) Rewrite the constructor function as a class called PersonClass and use it to create a third person
// // using different name and age values. Print it to the console as well:
//
// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
// }
//
// const person3 = new PersonClass('Charlie', 35);
// console.log(person3); // { name: 'Charlie', age: 35, human: true }
//
// // e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive:
//
// Person.prototype.canDrive = function() {
//     return this.age >= 16; // Adjust the age requirement as needed
// };
//
// console.log(person1.canDrive());
// console.log(person2.canDrive());

// Using class:

// class PersonClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;}
//     canDrive() {
//         return this.age >= 16;
//     }
// }
// console.log(person3.canDrive());






///////////////////////// Module 3 Labs //////////////////////////////
/////////////////////////JS Intermediate/////////////////////////////





// 1.) Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
//     different strings.

// console.log(ucFirstLetters("los angeles") )
// function ucFirstLetters(inputString) {
//     const words = inputString.split(' '); // Split the string into an array of words
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Capitalize the first letter of each word
//     return capitalizedWords.join(' ');}
// console.log(ucFirstLetters("los angeles"));
// console.log(ucFirstLetters("new york city"));
// console.log(ucFirstLetters("san francisco bay area"));


// 2. ) Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
//     ellipsis (...) added to the end if it was too long, or the original text otherwise.
//     b) Write another variant of the truncate function that uses a conditional operator.

// console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...

// a) Truncate function:

// function truncate(str, max) {
//     if (str.length <= max) { // If the string is already short enough, just return it
//         return str;
//     } else {
//         return str.slice(0, max) + '...';}  // truncate it
// }
// console.log(truncate('This text will be truncated if it is too long', 25));

// b) truncate function using ternary

// function truncate(str, max) {
//     return str.length <= max ? str : str.slice(0, max) + '...'; //  ternary truncate it
// }
//
// console.log(truncate('This text will be truncated if it is too long', 25));

// 3. ) Use the following animals array for the below tasks. Test each one by printing the result to
// the console.

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
//     e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

// const animals = ['Tiger', 'Giraffe']
// console.log(animals)
//
// // a) Add 2 new values to the end:
//
// animals.push('Lion', 'Elephant');
// console.log(animals);
//
// // b) Add 2 new values to the beginning:
//
// animals.unshift('Monkey', 'Kangaroo');
// console.log(animals);
//
// // c) Sort the values alphabetically:
//
// animals.sort();
// console.log(animals);
//
// // d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue:
//
// function replaceMiddleAnimal(newValue) {
//     if (animals.length % 2 === 1) {
//         const middleIndex = Math.floor(animals.length / 2);
//         animals[middleIndex] = newValue;}
// }
// replaceMiddleAnimal('Cheetah');
// console.log(animals);
//
// // e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// // containing all the animals that begin with the beginsWith string.
// // This function works regardless of upper/lower case:
//
// function findMatchingAnimals(beginsWith) {
//     beginsWith = beginsWith.toLowerCase();
//     return animals.filter(animal => animal.toLowerCase().startsWith(beginsWith));}
// console.log(findMatchingAnimals('gi'));
// console.log(findMatchingAnimals('t'));
// console.log(findMatchingAnimals('l'));


// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

// function camelCase(cssProp) {
//     let result = '';
//     let capitalizeNext = false;
//     for (let i = 0; i < cssProp.length; i++) {
//         const char = cssProp[i];
//         if (char === '-') {
//             capitalizeNext = true;
//         } else if (capitalizeNext) {
//             result += char.toUpperCase();
//             capitalizeNext = false;
//         } else {
//             result += char;}
//     }
//     return result;
// }
// console.log(camelCase('margin-left')); // 'marginLeft'
// console.log(camelCase('background-image')); // 'backgroundImage'
// console.log(camelCase('display')); // 'display'

// b) Variant of the camelCase function using a for loop and without the conditional operator:

// function camelCase(cssProp) {
//     let result = '';
//     let capitalizeNext = false;
//     for (let i = 0; i < cssProp.length; i++) {
//         const char = cssProp[i];
//         if (char === '-') {
//             capitalizeNext = true;
//         } else {
//             result += capitalizeNext ? char.toUpperCase() : char;
//             capitalizeNext = false;}
//     }
//     return result;
// }
// console.log(camelCase('margin-left')); // 'marginLeft'
// console.log(camelCase('background-image')); // 'backgroundImage'
// console.log(camelCase('display')); // 'display'

// c) Variant of the camelCase function using a for...of loop and the conditional operator:

// function camelCase(cssProp) {
//     let result = '';
//     let capitalizeNext = false;
//
//     for (const char of cssProp) {
//         if (char === '-') {
//             capitalizeNext = true;
//         } else {
//             result += capitalizeNext ? char.toUpperCase() : char;
//             capitalizeNext = false;}
//     }
//     return result;
// }
// console.log(camelCase('margin-left')); // 'marginLeft'
// console.log(camelCase('background-image')); // 'backgroundImage'
// console.log(camelCase('display')); // 'display'

// 5.) Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
//     let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004
// // We can sometimes avoid this using the toFixed function to force the number of decimal
// // places as below, but it’s not always useful:
//     let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result.
// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
//  different values as well as the below:

    // console.log(0.3 == currencyAddition(0.1, 0.2)) // true
    // console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// a) Explain why the above code returns the wrong answer
// floats are not represented exactly in binary, so there is a rounding error when adding them together.

// b) Create a function currencyAddition(float1, float2) which safely adds the two

// function currencyAddition(float1, float2) {
//     return parseFloat((float1 + float2).toFixed(2));}
// console.log(currencyAddition(0.20, 0.10));

// c) Create a function currencyOperation(float1, float2, operation) which

// function currencyOperation(float1, float2, operation) {
//     switch (operation) {
//         case '+':
//             return parseFloat((float1 + float2).toFixed(2));
//         case '-':
//             return parseFloat((float1 - float2).toFixed(2));
//         case '*':
//             return parseFloat((float1 * float2).toFixed(2));
//         case '/':
//             return parseFloat((float1 / float2).toFixed(2));
//         default:
//             return NaN;}
// }
// console.log(currencyOperation(0.1, 0.2, '+'));

// d) (Extension) Extend the above function to include a fourth argument numDecimals

// function currencyOperation(float1, float2, operation, numDecimals = 3) {
//     const multiplier = Math.pow(10, numDecimals);
//     switch (operation) {
//         case '+':
//             return parseFloat(((float1 + float2) * multiplier).toFixed(numDecimals));
//         case '-':
//             return parseFloat(((float1 - float2) * multiplier).toFixed(numDecimals));
//         case '*':
//             return parseFloat(((float1 * float2) * multiplier).toFixed(numDecimals));
//         case '/':
//             return parseFloat(((float1 / float2) * multiplier).toFixed(numDecimals));
//         default:
//             return NaN;}
// }
// console.log(currencyOperation(0.1, 0.2, '+', 1));
// console.log(currencyOperation(0.1, 0.2, '+', 3));
// console.log(currencyOperation(0.1, 0.2, '+', 4));

// 6. ) Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// function unique(duplicatesArray) {
//     return [...new Set(duplicatesArray)];}
// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
// console.log(unique(colours));
// console.log(unique(testScores));

// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.
//
//     const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
// ];
// // a) Write a function getBookTitle(bookId) that uses the find function to return the
// // title of the book object with the matching id.
// //     b) Write a function getOldBooks() that uses the filter function to return all book
// // objects written before 1950.
// // c) Write a function addGenre() that uses the map function to add a new genre property
// // to all of the above books, with the value ‘classic’.
// // d) (Extension) Write a function getTitles(authorInitial) that uses map and
// // filter together to return an array of book titles for books written by authors whose
// // names start with authorInitial.
// //     e) (Extension) Write a function latestBook() that uses find and forEach to get the
// // book with the most recent publication date.
//
// // a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
//
// function getBookTitle(bookId) {
//     const book = books.find((book) => book.id === bookId);
//     return book ? book.title : 'Book not found';}
// console.log(getBookTitle(2)); // 'To Kill a Mockingbird'
// console.log(getBookTitle(6)); // 'Book not found'
//
// // b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
//
// function getOldBooks() {
//     return books.filter((book) => book.year < 1950);}
// console.log(getOldBooks());
//
// // c) Write a function addGenre() that uses the map function to add a new genre property to all
// // of the above books, with the value 'classic'.
//
//     function addGenre() {
//     return books.map((book) => ({ ...book, genre: 'classic' }));}
// console.log(addGenre());
//
// // d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to
// // return an array of book titles for books written by authors whose names start with authorInitial.
//
//     function getTitles(authorInitial) {
//     return books
//         .filter((book) => book.author.startsWith(authorInitial))
//         .map((book) => book.title);}
// console.log(getTitles('G')); // ['The Great Gatsby', 'George Orwell']
//
// // e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
//
//     function latestBook() {
//     let latest = books[0];
//     books.forEach((book) => {
//         if (book.year > latest.year) {
//             latest = book;}
//     });
//     return latest;}
// console.log(latestBook()); // The book with the most recent publication date

// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// // a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// // b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// // c) Update the phone number for Caroline
// // d) Write a function printPhoneBook(contacts) that prints the names and phone
// // numbers in the given Map
// // e) Combine the contents of the two individual Maps into a single phoneBook Map
// // f) Print out the full list of names in the combined phone book
//
// // a) Create a new phoneBookDEF Map to store names beginning with D, E, or F:
//
// const phoneBookDEF = new Map();
//
// // b) Initialize the contents of phoneBookDEF by passing in an array of keys/values:
//
// phoneBookDEF.set('David', '0488112233');
// phoneBookDEF.set('Emily', '0433223344');
// phoneBookDEF.set('Fiona', '0466334455');
//
// // c) Update the phone number for Caroline in phoneBookABC:
//
// phoneBookABC.set('Caroline', '0477445566');
//
// // d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map:
//
// function printPhoneBook(contacts) {
//     for (let [name, phoneNumber] of contacts) {
//         console.log(`${name}: ${phoneNumber}`);}
// }
// console.log('Phone Book ABC:');
// printPhoneBook(phoneBookABC);
// console.log('Phone Book DEF:');
// printPhoneBook(phoneBookDEF);
//
// // e) Combine the contents of the two individual Maps into a single phoneBook Map:
//
// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
//
// // f) Print out the full list of names in the combined phone book:
//
// console.log('Combined Phone Book:');
// for (let name of phoneBook.keys()) {
//     console.log(name);}

// 9. Given the below salaries object, perform the following tasks.
//     let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
// };
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

// function sumSalaries(salaries) {
//     let total = 0; // Initialize the total
//     for (let salary of Object.values(salaries)) { // Object.values returns an array of values
//         total += salary;}
//     return total;}
// const salaries = { // Object of salaries
//     "Timothy": 35000,
//     "David": 25000,
//     "Mary": 55000,
//     "Christina": 75000,
//     "James": 43000};
// console.log('Total salaries:', sumSalaries(salaries));
//
// // b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
//
// function topEarner(salaries) { //
//     let topSalary = 0;
//     let topEarnerName = ''; // Initialize the top earner name
//     for (let [name, salary] of Object.entries(salaries)) { // Object.entries returns an array of key/value pairs
//         if (salary > topSalary) {
//             topSalary = salary;
//             topEarnerName = name;}
//     }
//     return topEarnerName;}
// console.log('Top earner:', topEarner(salaries));

// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
// const today = new Date(); // Create a new Date object
// console.log('Current time is ' + today.toLocaleTimeString()) // Print the current time
// console.log(today.getHours() + ' hours have passed so far today')
//
// // a) Print the total number of minutes that have passed so far today
//
// const minutesPassed = today.getHours() * 60 + today.getMinutes(); // Calculate the number of minutes
// console.log(minutesPassed + ' minutes have passed so far today');
//
// // b) Print the total number of seconds that have passed so far today
//
// const secondsPassed = minutesPassed * 60 + today.getSeconds(); // Calculate the number of seconds
// console.log(secondsPassed + ' seconds have passed so far today');
//
// // c) Calculate and print your age as: 'I am x years, y months and z days old'
//
// const birthDate = new Date('1815-10-12'); // Birth date
// const ageInMilliseconds = today - birthDate;  // Calculate the difference in milliseconds
// const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)); // Calculate the difference in years
// const ageInMonths = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)); // Calculate the difference in months
// const ageInDays = Math.floor((ageInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)); // Calculate the difference in days
// console.log(`I am ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old`); // Print the result
//
// // d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
// function daysInBetween(date1, date2) { // Calculate the difference in milliseconds between the two dates
// const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
// const daysDiff = Math.abs(date1 - date2) / millisecondsPerDay; // Calculate the difference in days
// return Math.floor(daysDiff);} // Round down to the nearest integer




///////////////////////////////////      Module 3 Labs    ////////////////////////////////////
///////////////////////////////////      JS Advanced      ///////////////////////////////////


// // 1.) makeCounter below is a decorator function which creates and returns a function that
// // increments a counter.
//
// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;};
// }
// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2
//
//
// // a) Create a second counter counter2 using the makeCounter function and test to see if
// // it remains independent to counter1
//
// let counter2 = makeCounter();
// counter2();
// counter2();
//
//
// // b) Modify makeCounter so that it takes an argument startFrom specifying where the
// // counter starts from (instead of always starting from 0)
//
// function makeCounter(startFrom) {
//     let currentCount = startFrom || 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount);
//         return currentCount;};
// }
//
// let counter1 = makeCounter(10);
// counter1();
// counter1();
//
// // c) Modify makeCounter to take another argument incrementBy, which specifies how
// // much each call to counter() should increase the counter value by.
//
// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom || 0;
//     incrementBy = incrementBy || 1;
//     return function() {
//         currentCount += incrementBy;
//         console.log(currentCount);
//         return currentCount;};
// }
//
// let counter1 = makeCounter(10, 2);
// counter1(); // 12
// counter1();


// // 2.) The following delayMsg function is intended to be used to delay printing a message until
// // some time has passed.
//
// function delayMsg(msg)
// {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
//
// // a) What order will the four tests below print in? Why?
//
// // #4: Not delayed at all
// // #3: Delayed by 0ms
// // #1: Delayed by 100ms
// // #2: Delayed by 20ms
//
// // first 3 async the other is not
//
// // b) Rewrite delayMsg as an arrow function
//
// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`);
// };
//
//
// // c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//
// setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');
//
//
// // d) Use clearTimeout to prevent the fifth test from printing at all.
//
// const timeoutId = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');
// clearTimeout(timeoutId);

// 3.) 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:
//
//
// function printMe() {
//     console.log('printing debounced message')
// }
// printMe = debounce(printMe); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// // 1000ms of no calls
// setTimeout( printMe, 100);
// setTimeout( printMe, 200);
// setTimeout( printMe, 300);
//
// // a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// // suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// // pause, the most recent call to func should be executed and any others ignored.
// //
// // b) Extend the debounce decorator function to take a second argument ms, which defines the
// // length of the period of inactivity instead of hardcoding to 1000ms
// //
// // c) Extend debounce to allow the original debounced function printMe to take an argument
// // msg which is included in the console.log statement.
//
// function debounce(func, ms) {
// let timeoutId;
// return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//         func(...args);
//     }, ms);};}
// function printMe(msg) {
// console.log(`Printing debounced message: ${msg}`);}
// printMe = debounce(printMe, 1000);
// setTimeout(() => printMe("First"), 100);
// setTimeout(() => printMe("Second"), 200);
// setTimeout(() => printMe("Third"), 300);

// 4. )The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

// function DO_Fib() { // function to print Fibonacci numbers that uses setInterval to output a number in the Fibonacci sequence every second
//     let a = 1;// Initialise the first two Fibonacci numbers
//     let b = 1; // Initialise the first two Fibonacci numbers
//     console.log(a); // Output the first Fibonacci number
//     const intID = setInterval(() => { // Output the next Fibonacci number every second
//         const next = a + b; // Calculate the next Fibonacci number
//         console.log(next);// Output the next Fibonacci number
//         a = b;// Output the next Fibonacci number every second
//         b = next;// Output the next Fibonacci number every second
//     }, 1000);// Output the next Fibonacci number every second
//     return intID;// Output the next Fibonacci number every second
// }
// const intID = DO_Fib();// To start the Fibonacci sequence printing
// // To stop the printing after a certain time (e.g., 10 seconds):
// setTimeout(() => { // Stop the printing after 10 seconds
//     clearInterval(intID);// Stop the printing after 10 seconds
// }, 2345756);

// 5.) The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?

// the "this" property no longer refers to the car object
//
//
//     let car = {
//         make: "Porsche",
//         model: '911',
//         year: 1964,
//         description() {
//
//             console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);}
//     };
// car.description(); //works
// // setTimeout(car.description, 200); //fails
// setTimeout(car.description.bind(car), 200);
//
//
//
// // a) Fix the setTimeout call by wrapping the call to car.description() inside a
// // function
//
// setTimeout(() => {
//     car.description();
// }, 200);
//
//
// // b) Change the year for the car by creating a clone of the original and overriding it
//
// let newCar = Object.assign({}, car);
// newCar.year = 1373;
//
//
// // c) Does the delayed description() call use the original values or the new values from
// // b)? Why?
//
// // orginal values it captres the original values of the car object when the function is created
//
// // d) Use bind to fix the description method so that it can be called from within
// // setTimeout without a wrapper function
//
// let boundDescription = car.description.bind(car);
// setTimeout(boundDescription, 200);
//
//
// // e) Change another property of the car by creating a clone and overriding it, and test that
// // setTimeout still uses the bound value from d)
//
// // let car2 = Object.assign({}, car);
// // car2.make = "Nissan";
// // let boundDescription = car.description.bind(car);
// // setTimeout(boundDescription, 200);



// 6.) Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.

//     function multiply(a, b) {
//     console.log( a * b );
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters

// Function.prototype.delay = function (ms) {
//     const func = this;
//     return function (...args) {
//         setTimeout(() => func.apply(this, args), ms);};
// };
// function multiply(a, b) {
//     console.log(a * b);}
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
//
// // b) Use apply to improve your solution so that delayed functions can take any number of
// // parameters
//
// Function.prototype.delay = function (ms) {
//     const func = this;
//     return function (...args) {
//         setTimeout(() => func.apply(this, args), ms);};
// };
// function multiply(a, b, c, d) {
//     console.log(a * b * c * d);
// }
// multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds
//
// // c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// // delay prototype function still works.
//
// Function.prototype.delay = function (ms) {
//     const func = this;
//     return function (...args) {
//         setTimeout(() => func.apply(this, args), ms);};
// };
// function multiply(a, b, c, d) {
//     console.log(a * b * c * d);
// }
// multiply.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds


// // 7.) In JavaScript, the toString method is used to convert an object to a string representation.
// // By default, when an object is converted to a String, it returns a string that looks something
// // like [object Object].
// // However, we can define our own toString methods for custom objects to provide a more
// // meaningful string representation.
//
// // function Person(name, age, gender) {
// //     this.name = name;
// //     this.age = age;
// //     this.gender = gender;}
// // const person1 = new Person('James Brown', 73, 'male')
// // console.log('person1: '+person1) //prints person1: [object Object]
//
// // a) Define a custom toString method for the Person object that will format and print
// // their details
//
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;}
// Person.prototype.toString = function () {
//     return `${this.name}, ${this.age} years old, ${this.gender}`;};
// const person1 = new Person('James Brown', 73, 'male');
// console.log('person1: ' + person1);
//
// // b) Test your method by creating 2 different people using the below constructor function
// // and printing them
//
// const person2 = new Person('Alice Johnson', 28, 'female');
// console.log('person2: ' + person2);
//
//
// // c) Create a new constructor function Student that uses call to inherit from Person and
// // add an extra property cohort
//
// function Student(name, age, gender, cohort) {
//     Person.call(this, name, age, gender);
//     this.cohort = cohort;}
// const student1 = new Student('John Smith', 20, 'male', 'Cohort A');
// console.log('student1: ' + student1);
//
//
// // d) Add a custom toString for Student objects that formats and prints their details. Test
// // with 2 students.
//
// Student.prototype.toString = function () {
//     return `${this.name}, ${this.age} years old, ${this.gender}, Cohort: ${this.cohort}`;};
// const student2 = new Student('Emma Roberts', 22, 'female', 'Cohort B');
// console.log('student2: ' + student2);

// 8.) The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.
//
//     class DigitalClock {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }
//     display() {
//         let date = new Date();
// //create 3 variables in one go using array destructuring
//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//             date.getSeconds()];
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//         clearInterval(this.timer);
//     }
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }
// }
// const myClock = new DigitalClock('my clock:')
// myClock.start()
//
// // a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// // parameter precision – the number of ms between 'ticks'. This precision parameter
// // should default to 1 second if not supplied.
//
//     class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;}
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);}
// }
//
// // b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// // parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// // should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// // default to 07:00 if not supplied.
//
// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeupTime = '07:00') {
//         super(prefix);
//         this.wakeupTime = wakeupTime;}
//     display() {
//         const now = new Date();
//         const currentTime = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
//         super.display();
//         if (currentTime === this.wakeupTime) {
//             console.log('Wake Up');
//             this.stop();}
//     }
// }
// // 9.) We can delay execution of a function using setTimeout, where we need to provide both
// // the callback function and the delay after which it should execute.
//
// function randomDelay() {
//     const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1 and 20 seconds
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay % 2 === 0) {
//                 resolve(`Successful delay of ${delay} ms.`);
//             } else {
//                 reject(`Failed delay of ${delay} ms.`);}
//         }, delay);
//     });
// }
// randomDelay()
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));
//
// // a) Create a promise-based alternative randomDelay() that delays execution for a
// // random amount of time (between 1 and 20 seconds) and returns a promise we can use
// // via .then(), as in the starter code below
// // b) If the random delay is even, consider this a successful delay and resolve the promise,
// // and if the random number is odd, consider this a failure and reject it
// // c) Update the testing code to catch rejected promises and print a different message
// // d) Try to update the then and catch messages to include the random delay value
// // function randomDelay() {
// // // your code
// // }
// // randomDelay().then(() => console.log('There appears to have been a delay.'));


// 10.) Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.)


//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
//     import fetch from 'node-fetch'
// globalThis.fetch = fetch
// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);
//         }
//
//     });
//     return fetchPromise;
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
//
// // a) Write a new version of this function using async/await
//
// import fetch from 'node-fetch';
//
// async function fetchURLData(url) {
//     try {
//         const response = await fetch(url);
//         if (response.status === 200) {
//             const data = await response.json();
//             return data;
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);}
//     } catch (error) {
//         throw error;}
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
//
//
// // b) Test both functions with valid and invalid URLs
//
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
// fetchURLData('https://jsonplaceholder.typicode.com/nonexistent')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
//
// // c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// // using Promise.all to combine the results.
//
// async function fetchAllURLData(urls) {
//     try {
//         const fetchPromises = urls.map(url => fetchURLData(url));
//         const data = await Promise.all(fetchPromises);
//         return data;
//     } catch (error) {
//         throw error;}
// }
// const urlList = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/nonexistent',];
// fetchAllURLData(urlList)
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));
