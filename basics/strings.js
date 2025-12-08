const name ="shreya"
const repoCount =50 
console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)//string interpolation

const gameName = new String("Shreyaa-singh-ss")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);//negative values not allowed
console.log(newString);

const anotherString = gameName.slice(-3);// negative values allowed
console.log(anotherString);

const newStringOne = "  shreya  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://shreya.com/shreya%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('shreyaa'))
console.log(gameName.split('-'))
