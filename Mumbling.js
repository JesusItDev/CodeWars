/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

let str = "ZpglnRxqenU"
accum(str);

function accum(s) {
    let strArr = s.split("");
    let acc = "";
    console.log(strArr);
    for (i = 0; i < strArr.length; i++) {
        acc = acc + String(strArr[i]).toUpperCase();
        
        for (j = 0; j < i; j++) {
            acc = acc + String(strArr[i]).toLowerCase();
        }
        if (i != strArr.length-1) acc=acc+"-"; 
      } 
    console.log(acc);
}