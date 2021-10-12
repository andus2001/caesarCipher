var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLocaleLowerCase()
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function displayMe(input, shift){
let arrayedUp = input.split('')

let theNumber = arrayedUp.map((letter)=> letter.charCodeAt())
//console.log(theNumber);
let shifted = theNumber.map(number => number + shift)
//console.log(shifted);
let convert = shifted.map(number => number === 32 + shift ?number - shift:number)
//console.log(convert)
let text = convert.map(number => String.fromCharCode(number))
////console.log(text);
let display = text.join("")
console.log(display)
}
displayMe(input, shift)




