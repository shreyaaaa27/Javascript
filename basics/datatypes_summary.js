//Primitive DataTypes

//7 types: String, Number, Boolean,null,undefined,Symbol,BigInt

const score = 100
const ScoreValue= 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const AnotherId = Symbol('123')

//console.log(id === AnotherId);
const bigNumber = 34566387698745467980n

//Reference DataTypes/Non-Primitive :

//Array, Objects,Functions
const heros = ['ironman','spiderman','thor'] //arrays
let myObj={
    name:"Shreya",
    age:22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
//dataType of null is Object, as it is unique.
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);




