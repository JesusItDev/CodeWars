/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

let s = "";

solution(s);

function solution(str){
    let arr = str.split("");
    let ans = [];
    for (let index = 1; index < arr.length; index= index+2) {
        ans.push(arr[index-1]+arr[index]);

    }
    if (arr.length%2 != 0){
        ans.push(arr[arr.length-1]+"_");
    }
    console.log(ans);
}