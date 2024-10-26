// ..................Q - 1

"" + 1 + 0        // 10
"" - 1 + 0       // -1
true + false    // 1
!true           // false
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // '9px'
"$" + 4 + 5     // '$45'
"4" - 2         // 2
"4px" - 2       // NaN
" -9 " + 5       // '-9 5'
" -9 " - 5       // -14
null + 1         // 1
undefined + 1    // NaN
undefined == null  // true
undefined === null  // false
" \t \n" - 2    // -2

// adding each value one by one in console.log to test the output
console.log()


// .....................Q - 2
// addition = three + four is not giving right answer = bottom answer
// it not giving answer because 
// addition expressiong is performing string concatenation instead of arithmetic addition, these becasue three and four are strings
// to fix this convert the string to numbers using the Number() function or parseInt() function
//like this addition = Number(three) + Number(four) or addition = parseInt(three) + parseInt(four).

// lessThan2 = thirty < four is not giving right answer = bottom answer
// it not giving answer because it is compairng strings lexicographically instead of numerically.
//to fix this using number() and parseInt() functions.
//e.g - lessThan2 = Number(thirty) < Number(four) or lessThan2 = parseInt(thirty) < parseInt(four).

let three = "3" 
let four = "4" 
let thirty = "30"

//what is the value of the following expressions? 
let addition = three + four    //"34"
let multiplication = three * four  // 12 //operator is not overloaded for strings, so it coverts the strings to numbers implicity
let division = three / four  // 0.75  //same as above
let subtraction = three - four // -1  //same as above


let lessThan1 = three < four //give the correct result because "3" is indeed less than "4" lexicographically
let lessThan2 = thirty < four


// ........................Q - 3

if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true') // this will print
if (null) console.log('null is true') 
if (-1) console.log('negative is true')  // this will print
if (1) console.log('positive is true') // this will print

// the three above will print becuase 
// 0 is a falsy value, which means it is considered false in a boolean context
// ("0") is a non-empty string which is a truthy value 
// (null) is a falsy value
// (-1) any non-zero number is a truthy value, also including negative numbers
// (1) any non-zero number is a truthy value


//.......................Q - 4

/* the += operator is used to concatenate the result of the ternary/conditional operator
 to the existing value of the result variable. */
// In this e.g, if the condition is true, the value of result will be 'less than 10',
// otherwise the value of result will be 'greater than 10'.

let a = 2, b = 3;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';
console.log(result);

// Output: '2 + 3 is less than 10'

a = 10;
b = 5;
result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';
console.log(result);

// Output: '10 + 5 is greater than 10'
// Output: '2 + 3 is less than 10'


// ......................Q - 5

// The three versions will work by console.log adding a name and remove /**/ to see the output
// function expression syntax

const getGreeting = function(name) {
  return 'Hello ' + name + '!';
};
console.log(getGreeting('Tom'));


// arrow function syntax

const getGreeting = (name) => {
  return 'Hello ' + name + '!';
};
console.log(getGreeting('Alice'));


//using the concise arrow function syntax, the code can be simplified to:

const getGreeting = (name) => 'Hello ' + name + '!';
console.log(getGreeting('Paul'));


//....................... Q - 6

// a) added a lastName property to the inigo object included it in the greeting
// b) added a catchphares method to check if the person argument has 6 fingers if so returns a famous catchphrase
// c) a conditional operator is used concisely to express the logic in a single line

const westley = { name: 'Westley', numFingers: 5 }
const rugen = { name: 'Count Rugen', numFingers: 6 }
const inigo = {
  firstName: 'Inigo',
  lastName: 'Montoya',
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) => person.numFingers === 6 ? 'Hello. My name is Inigo Montoya. You broke my TV. Prepare to die.' : 'Nice to meet you.'
}

inigo.greeting(westley)
inigo.greeting(rugen)



// ...................Q - 7

// a) return this; statement to the end of each method, which allow to chained together
// b) new method use as full time 
// c) new fouls property to keep track of fouls and a comitFoul method to increment it
// d) tested object by chaining all the methods calls together 

const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() { 
    this.score++; 
    return this; 
},

  basket() { 
    this.score += 15; 
    return this; 
},

  threePointer() {
     this.score += 9; 
     return this; 
    },

  halfTime() { 
    console.log(`Halftime score is ${this.score}, fouls: ${this.fouls}`); 
    return this; },

  fullTime() { 
    console.log(`Full time score is ${this.score + }, fouls: ${this.fouls}`); 
    return this; },

  commitFoul() { 
    this.fouls++; 
    return this; }
}

// Test the object by chaining method calls together
basketballGame
.basket()
.freeThrow()
.freeThrow()
.basket()
.threePointer()
.halfTime()
.commitFoul()
.commitFoul()
.fullTime();


// .....................Q - 8

// for...in loop iterates over the property names of the object 
// it a linear time complexity

function printObjectProperties(obj) {
  for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`);
  }
}

// Test the function with the sydney object
const sydney = { 
  name: 'Sydney', 
  population: 5_121_000, 
  state: 'NSW', 
  founded: '26 January 1788', 
  timezone: 'Australia/Sydney' 
};

printObjectProperties(sydney);

// Create a new object for a different city with different properties
const melbourne = { 
  name: 'Melbourne', 
  population: 4_976_157, 
  state: 'VIC', 
  founded: '30 August 1835', 
  timezone: 'Australia/Melbourne', 
  climate: 'Sunny', 
  mayor: 'Brendan O' 
};

// Call the function again with the new object
printObjectProperties(melbourne);



// ...........................Q - 9

//a) two new variable moreSport and teamSport and add values to it (using push and unshift)
// array in javascript are stored by reference

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push('Basketball');
moreSports.unshift('Football');

console.log(moreSports); // Output: ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball']
console.log(teamSports); // Output: ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball']

// b) when we reassign dog2 to new value, it does not affect dog1, that is because string are stored by value
// dog2 is a separate copy of the string

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Rover';

console.log(dog1); // Output: 'Bingo'
console.log(dog2); // Output: 'Rover'

// c) cat 2 variable equal to cat1 and change name property
// object are stored by reference

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
cat2.name = 'Whiskers';

console.log(cat1); // Output: { name: 'Whiskers', breed: 'Siberian' }
console.log(cat2); // Output: { name: 'Whiskers', breed: 'Siberian' }

// d) teamSports and cat1 have been modified, whitle
// dog1 remains unchanged because arrays and object are stored by reference, while string are stored by value

console.log(teamSports); // Output: ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball']
console.log(dog1); // Output: 'Bingo'
console.log(cat1); // Output: { name: 'Whiskers', breed: 'Siberian' } 


// e) 

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = [...teamSports]; // Create a new array using the spread operator
moreSports.push('Basketball');
moreSports.unshift('Football');

console.log(moreSports); // Output: ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball']
console.log(teamSports); // Output: ['Hockey', 'Cricket', 'Volleyball']

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { ...cat1 }; // Create a new object using the spread operator
cat2.name = 'Whiskers';

console.log(cat1); // Output: { name: 'Fluffy', breed: 'Siberian' }
console.log(cat2); // Output: { name: 'Whiskers', breed: 'Siberian' }


// ..............................Q - 10 
// a) new person using constructor function
// Define the Person function

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 28;
  }
}

// Define the PersonClass
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function () {
      return this.age >= 16;
    }
  }
}

// Create a new person using the constructor function
let person1 = new Person('John Doe', 30);
let person2 = new Person('Jane Doe', 25);
let person3 = new PersonClass('Bob Smith', 40);
let person4 = new PersonClass('Alice Johnson', 12);


// Print out the properties of each person object to the console
// Check if each person can drive
console.log(person1.name + "'s is old enough to drive: " + person1.canDrive());
console.log(person2.name + "'s is not old enough to drive: " + person2.canDrive());
console.log(person3.name + "'s is old enough to drive: " + person3.canDrive());
console.log(person4.name + "'s is not old enough to drive: " + person4.canDrive());














































