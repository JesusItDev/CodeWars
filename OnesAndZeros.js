/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.*/



const binaryArrayToNumber = arr => {
    let acc = 0;
    arr = arr.reverse();
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            acc = acc + Math.pow(2, index);
        }
    }
    return acc;
  };


console.log(binaryArrayToNumber([0, 0, 1, 0]));