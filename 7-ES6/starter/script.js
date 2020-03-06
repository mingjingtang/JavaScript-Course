/*
//ES6 variable declaration

{
  let firstName = "John";
  const yearOfBirth = 1989;

  console.log(`${firstName} is born in ${yearOfBirth}`);
}
/////////////////////////////////////////////////////////////////

const yearOfBirth = 1989;
let firstName;
{
  firstName = "John";
}
console.log(`${firstName} is born in ${yearOfBirth}`);

let age = year => {
  return new Date().getFullYear() - year;
};

console.log(`${firstName} is ${age(yearOfBirth)} years old.}`);
///////////////////////////////////////////////////////////////////

var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

////////////////////////////////////////////////////////////////////

const years = [1962, 1989, 1988];

const agesES6 = years.map((el, index) => `Age is ${index + 1}: ${2020 - el}`);

console.log(agesES6);
/////////////////////////////////////////////////////////////////////
//ES6 solve the bind this problem
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends = function(friends) {
  let arr = friends.map(el => {
    return `${this.name} is friend with ${el}`;
  });

  console.log(arr);
};

let friends = ["Bob", "Jane", "Jack"];
new Person("John").myFriends(friends);
///////////////////////////////////////////////////////////////////////
//destructuring
const [name, age2] = ["John", "28"];
console.log(name);
console.log(age2);

const john = {
  birthday: "2 14",
  favoriateColor: "Blue"
};

const { birthday, favoriateColor } = john;
console.log(birthday);
console.log(favoriateColor);

const { birthday: b, favoriateColor: f } = john;
console.log(b);
console.log(f);

function calcRetirement(birthYear) {
  let thisYear = new Date().getFullYear();
  let age3 = thisYear - birthYear;
  let retirementYear = 65 - age3 + thisYear;
  return [age3, retirementYear];
}

const [age3, retirementYear] = calcRetirement(1989);
console.log(age3, retirementYear);

//////////////////////////////////////////////////////////////////////////
//Array example 1
const boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "dodgerblue"));

const boxesArr = Array.from(boxes);

for (const cur of boxesArr) {
  //   if (cur.className === "box blue") {
  //     continue;
  //   }

  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

//Array example 2
const ages = [12, 5, 21, 7, 10];

console.log(ages.findIndex(cur => cur > 18));
console.log(ages.find(cur => cur > 18));
*/
////////////////////////////////////////////////////////////////
//Spread Operator
const ages = [18, 30, 12, 21];

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

//ES5
var sum1 = addFourAges.apply(null, ages);
console.log(sum1);

//ES6
const sum2 = addFourAges(...ages);
console.log(sum2);

//ES6 DOM
const h1 = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h1, ...boxes];

Array.from(all).forEach(cur => (cur.style.color = "purple"));
//////////////////////////////////////////////////////////////////
//Rest parameters
//ES5
function isFullAge() {
  var agesArr = Array.prototype.slice.call(arguments);

  agesArr.forEach(function(cur) {
    console.log(2020 - cur >= 18);
  });
}

isFullAge(1989, 2010, 1962);

//ES6
function isFullAge1(limit, ...years) {
  // console.log(years);
  years.forEach(cur => console.log(2020 - cur) >= limit);
}

isFullAge1(18, 1989, 2010, 1962);
//////////////////////////////////////////////////////////////////
//Default parameters
function SmithPerson(
  firstName,
  lastName = "Smith",
  yearOfBirth,
  nationality = "America"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

let john = new SmithPerson("John", undefined, 1990, undefined);
let emily = new SmithPerson("Emily", "Diza", 1983, "Spanish");
//////////////////////////////////////////////////////////////////
//Map
const question = new Map();
question.set(
  "question",
  "What is the officail name of the latest major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer!");
question.set(false, "Wrong, please try again!");

if (question.has(4)) {
  console.log("Answer 4 is here");
}

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));
////////////////////////////////////////////////////////////////////
//Classes
//ES5
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var jane = new Person("Jane", 1989, "teacher");

//ES6
class Person1 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

const emily1 = new Person1("emily", 1989, "dancer");
///////////////////////////////////////////////////////////////////
