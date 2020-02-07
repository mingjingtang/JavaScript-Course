///////////////////////////////////////
// Lecture: Hoisting

/*
functions
calculateAge(1990);

function calculateAge(year) {
  console.log(2020 - year);
}

// retirement(1989);

var retirement = function(year) {
  console.log(65 - (2020 - year));
};

//variables
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping

/*
First scoping example

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + b + c + d);
}
*/
///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
/*
calculateAge(1989);

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}
*/
var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(2020 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1989
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
