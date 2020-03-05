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
