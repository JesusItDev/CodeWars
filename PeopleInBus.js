/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/ 
let number = [[10,0],[3,5],[5,8]];
let acum=0;

for (var i=0; i<number.length; i++) {
    // Bucle que recorre el array que está en la posición i
    acum = (number[i][0]-number[i][1]) +acum;
}
console.log(acum);
/*
let number = [[10,0],[3,5],[5,8]];
function printArr(arr) {
    let str = '';
      for (let item of arr) {
        if(Array.isArray(item)) {
            str += printArr(item);
            console.log(str);
        }
            else {
                str += item + ", ";
                //console.log(str);
            }
      }
      console.log('//////////////');
      console.log(parseInt(str.split(", "))); 
      return str;
}

console.log(printArr(number));

/*

console.log(number.length);     
let acum=0
  for (var i=0; i<number.length; i++) {
    // Bucle que recorre el array que está en la posición i
    for(var j=0; j<2; j++) {
        // Pinta todas las posiciones del array
        
    }
    console.log(acum=i-j);
}
*/

