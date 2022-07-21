//how to create objects
const key = "email";
const person ={
    name:"Aniruddh",
    age:22,
    hobbies:["football","sleeping","travelling"]
}
console.log(person);

//how to access data from objects
console.log(person["hobbies"]);
console.log(person.age);

//how to add key value pair to objects
person.gender = "Male";
person[key]="myself@myself.com"
console.log(person);