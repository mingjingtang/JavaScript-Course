/*
var firstName = "John";

var age = 80;
var fullAge = true;

var job = "teacher";
console.log(job);

console.log(fullAge);

var job, isMarried;
job = "teacher";
isMarried = false;

alert("John is a " + job + "Is he married? " + isMarried);

var lastName = prompt("what is his last name");
age = "twenty eight";
console.log(lastName);
*/

/* 
var now = 2020;
var johnAge = 28;
var davidAge = 30;

var johnYearBorn = now - johnAge;
var davidYearBorn = now - davidAge;

//logical operators
var compare = johnAge > davidAge;
console.log(compare);

//typeof operator
console.log(typeof compare);
console.log(typeof johnAge);
console.log(typeof "David is order than John");
var x;
console.log(typeof x);
*/

/*
 * operator procedence
 */

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

//multiple operation
var isFullAge = now - yearJohn <= fullAge;
console.log(isFullAge);

//grouping
var davidage = 30;
var johnAge = now - yearJohn;
var average = (davidage + johnAge) / 2;
console.log(average);

//multiple assignment
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//more operations
x *= 2;
x += 10;
x = x + 1;
x += 1;
x++;
x--;
console.log(x);
*/

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
var massMark = 90;
var heightMark = 180;
var massJohn = 80;
var heightJohn = 190;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var BMIMarkHigher = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, BMIMarkHigher);
*/

var firstName = "John";
var age = 19;

var isAgeAble = age > 18 ? "beer" : "juice";
console.log(isAgeAble);

var job = "instructor";
switch (job) {
  case "instructor":
  case "teacher":
    console.log(firstName + " is a teacher");
    break;
  case "painter":
    console.log(firstName + " is a painter");
    break;
  case "driver":
    console.log(firstName + " is a driver");
    break;
  default:
    console.log(firstName + " doesn't do anything");
}

age = 18;
switch (true) {
  case age < 13:
    console.log("boy");
    break;
  case age > 13 && age < 18:
    console.log("teen");
    break;
  case age >= 18:
    console.log("young man");
    break;
  default:
    console.log("man");
}
