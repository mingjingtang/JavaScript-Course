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
