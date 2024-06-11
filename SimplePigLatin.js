/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

let str = 'Pig latin is cool';
const words = str.split(" ")
words.forEach(element => {
    if(element /[A-Za-z]/g) console.log(element.);
});