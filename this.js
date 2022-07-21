// This keyword
// function inside object


let person1 = {
  firstname: "Aniruddh",
  age: 23,
  about: info
 }
 let person2 = {
  firstname: "Aditya",
  age: 21,
  about: info
 }
 let person3 = {
  firstname: "Prasad",
  age: 26,
  about: info
 }
 let person4 = {
  firstname: "Abhishek",
  age: 29,
  about: info
 }

 function info(){
  console.log(`my name is ${this.firstname} and my age is ${this.age}`);
}

person1.about();
person2.about();
person3.about();
person4.about();