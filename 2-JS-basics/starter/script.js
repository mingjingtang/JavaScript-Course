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

/*
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
*/

/*
 * Truthy and Falsy (undefined, null, 0, '', NaH)
 

var height;
height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has not been defined");
}

if (height == "23") {
  console.log("equal");
}

*/

/*
 * practice


var johnTeam = (89 + 120 + 103) / 2;
var playerJohn = "john";
var mikeTeam = (116 + 94 + 523) / 3;
var playerMike = "mike";
var winner;

if (johnTeam > mikeTeam) {
  console.log("john win with average score " + johnTeam);
  winner = playerJohn;
  console.log(winner);
} else if (mikeTeam > johnTeam) {
  console.log("mike win with average score " + mikeTeam);
  winner = playerMike;
  console.log(winner);
} else {
  console.log("They are equal");
}

var maryTeam = (97 + 134 + 1005) / 3;
var playerMary = "Mary";
if (maryTeam > johnTeam && maryTeam > mikeTeam) {
  console.log("mary win with average score " + maryTeam);
  winner = playerMary;
  console.log(winner);
} else {
  console.log(winner);
}

*/

/*
 *function

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1989);
console.log(ageJohn);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + " retires in " + retirement + " years. ");
}

yearsUntilRetirement(1989, "john");
*/

/*
 * Arrays

var names = ["John", "Mark"];
var years = new Array(1990, 1979);

console.log(names);
console.log(names.length);

names[1] = "Ben";
console.log(names[1]);
console.log(names);

names[names.length] = "Mary";
console.log(names);

//Different data types
var john = ["John", "Smith", 1900];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
console.log(john);
console.log(john.indexOf(1900));
*/

/*
 * code chanllenge 2
 

var amount = [124, 48, 268, 2];
var tip = [];
var total = [];
console.log(tip);
console.log(total);

function tipWay(a) {
  for (let i = 0; i < a.length; i++) {
    switch (true) {
      case a[i] < 50:
        tip.push((a[i] * 20) / 100);
        total.push(a[i] * (1 + 20 / 100));
        break;
      case a[i] >= 50 && a[i] <= 200:
        tip.push((a[i] * 15) / 100);
        total.push(a[i] * (1 + 15 / 100));
        break;
      case a[i] > 200:
        tip.push((a[i] * 10) / 100);
        total.push(a[i] * (1 + 10 / 100));
        break;
      default:
        console.log("don't know how to count");
    }
  }
}

tipWay(amount);
console.log(tip);
console.log(total);
*/

/*
 * Objects and properties
 

var john = {
  efirstName: "John",
  lastName: "Smith",
  birthYear: 1989,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2020 - this.birthYear;
  }
};

// console.log(john.firstName);
// console.log(john["lastName"]);
// var x = "birthYear";
// console.log(john[x]);
// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);

john.calcAge();
console.log(john);
*/

/*
 * coding chanllenge 4
 

var Mark = {
  fullName: "Mark Mark",
  mass: 45,
  height: 165,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
  }
};

var John = {
  fullName: "John John",
  mass: 70,
  height: 180,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
  }
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.BMI);
console.log(John.BMI);

var highBMI =
  Mark.calcBMI() - John.calcBMI() > 0
    ? "mark has higher BMI"
    : "john has higher BMI";

console.log(highBMI);
console.log(Mark);
console.log(John);
*/

/*
 * loops and interation
 

for (let i = 0; i < 20; i += 2) {
  console.log(i);
}

//for loop
var john = ["John", "Smith", 1900, "designer", false];
for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
}

//while loop
let i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

//continue and break statement
var john = ["John", "Smith", 1900, "designer", false];
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") {
    continue;
  }
  console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") {
    break;
  }
  console.log(john[i]);
}

//looping backwards
for (let i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/*

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42, 1],
  calcTip: function() {
    this.tips = [];
    this.total = [];

    for (let i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.total[i] = bill + bill * percentage;
    }
  }
};

var mark = {
  fullName: "Mark Martin",
  bills: [77, 475, 110, 45],
  calcTip: function() {
    this.tips = [];
    this.total = [];

    for (let i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill <= 300) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.total[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
    console.log(sum);
  }
  return sum / tips.length;
}

john.calcTip();
mark.calcTip();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log("john pays higher");
} else if (mark.average > john.average) {
  console.log("mark pays higher");
}
*/
