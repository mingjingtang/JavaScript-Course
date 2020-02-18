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

/*
//Functions returning functions
function interviewQuestions(job) {
  if (job === "teacher") {
    return function(name) {
      console.log("What do you teach " + name + "?");
    };
  } else if (job === "Designer") {
    return function(name) {
      console.log("What do you design " + name + "?");
    };
  } else {
    return function(name) {
      console.log("What do you do " + name + "?");
    };
  }
}

interviewQuestions("teacher")("john");
interviewQuestions("Designer")("Mark");
interviewQuestions("doctor")("Jane");
*/

/*
//Lecture: IIFE
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
*/

/*
//Lecture: Closures
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

retirement(66)(1989);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1989);
retirementIceland(1989);

function interviewQuestions(job) {
  var a = "What do you teach ";
  return function(name) {
    if (job === "teacher") {
      console.log(a + name + "?");
    } else if (job === "Designer") {
      console.log(a + name + "?");
    } else {
      console.log(a + name + "?");
    }
  };
}

interviewQuestions("teacher")("Mark");
interviewQuestions("Designer")("Jane");
*/

/*
//Bind, call and apply
var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          this.job +
          this.age
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " + this.name + this.job + this.age + timeOfDay
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("friendly", "morning");
john.presentation.call(emily, "friendly", "afternoon");

var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");
*/

//Fun quiz game

/*
var questions = ["", "How's the weather today?", "What is the date today? "];
var answers = ["", "1. rainy", "2. Feb 13 2020"];

function Questions(questions, score) {
  let randomQuestion = Math.floor(Math.random() * 2) + 1;
  console.log(randomQuestion);

  //question itself
  let answerNum = prompt(questions[randomQuestion] + answers[1] + answers[2]);

  //answer from the player
  console.log(answerNum);
  console.log(answers[answerNum]);

  //check the correct answer
  if (answers[answerNum] === answers[randomQuestion]) {
    console.log("You'r correct!");
    score++;
    console.log("Your score is " + score);
  } else if (answerNum == "exit") {
    return;
  } else {
    console.log(
      "You'r wrong!" + "The correct answer is " + answers[randomQuestion]
    );
    console.log("Your score is " + score);
  }

  return Questions(questions, score);
}

Questions(questions, 0);
*/

(function() {
  //function constuctor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  //prototype method
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  //prototype check answer
  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;

    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callback(true);
    } else {
      console.log("Wrong answer. Try again");
      sc = callback(false);
    }

    this.displayScore(sc);
  };

  //count score
  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  //display score
  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("---------------------------");
  };

  //sample question
  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world!",
    ["Yes", "No"],
    0
  );
  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["John", "Micheal"],
    1
  );

  var question = [q1, q2];

  //question loop
  function nextQuestion() {
    var n = Math.floor(Math.random() * question.length);

    question[n].displayQuestion();

    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      question[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();
