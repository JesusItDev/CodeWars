/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

let str = 'Hello world !';
const words = str.split(" ")

for (let index = 0; index < words.length; index++) {
    if(words[index].match(/[A-Za-z]/g)) {
        words[index] = words[index].slice(1,words[index].length) + words[index].charAt(0) + "ay";
    }
    
}
    

    console.log(words.join(" "));
