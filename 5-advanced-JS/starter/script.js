// Function constructor
/*
var john = {
  name: "John",
  yearOfBirth: 1989,
  job: "teacher"
};

//new empty object here
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//prototype
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

//call a function constructor
var john2 = new Person("John2", 1989, "teacher");
john2.calculateAge();

var jane = new Person("Jane", 1969, "designer");
jane.calculateAge();

var mark = new Person("Mark", 1948, "retired");
mark.calculateAge();
console.log(john2.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/*
//object.create
var personProto = {
  calculateAge: function() {
    console.log(2020 - yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1989;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
*/

/*
//Primitives vs objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
  name: "jo",
  age: 26
};

//new reference point to obj1, didn't create a new object
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 27;
var obj = {
  name: "jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  console.log(a);
  b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
//lecture: Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el > 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  }
  return -1;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var ageGreater18 = arrayCalc(ages, isFullAge);
console.log(ageGreater18);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
*/
