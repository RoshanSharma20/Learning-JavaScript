// const prompt = require("prompt-sync")();
// //to output or print sentences on the output screen
console.log('Hello World');
name = 'Strange';
console.log(name);

//user input
var food = Number(prompt('what is the food amount'));//prompt() ->used to take user input(string)
var tip = Number(prompt('tip %?'));
tipAmount = food * (tip / 100);
totalAmount = food + tipAmount;
greet = `total food amount is:${totalAmount}`;
alert(greet);//alert() ->used to display output on the browser window