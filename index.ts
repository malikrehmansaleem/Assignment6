//Develop a program that calculates and prints 
//the sum of the first n even numbers using a for loop.

let num:number = 10;
let sum:number = 0;
for(let i=1; i<=num; i++){
    if( i % 2 === 0){
        sum += i;
    }
}
console.log(sum);
// Implement a program that uses a for loop to 
//iterate through an array of numbers and print only the even numbers.

let numberArray:number [] =[1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<numberArray.length; i++){
    if( numberArray[i] % 2 === 0){
        console.log(numberArray[i])
    }
}
// Implement a program that uses a loop to iterate through an array of numbers and 
//remove all the even numbers from them and just leave the odd ones.

for(let i=0; i<numberArray.length; i++){
    if(numberArray[i] %2 !== 0){
        console.log(numberArray[i])
    }
}
//Write a program that defines a function to calculate the area of a circle. 
//The function should take the radius as input and return the calculated area.
function areaOfCircle(radius:number){
 var area:number = 3.14 * (radius * radius );
 return area;
}
 console.log("Area of Circle =",areaOfCircle(3));
// Develop a program that reads a list of grades and 
//uses the splice method to remove failing grades (below 50) from the array.

let array:number [] = [90,80,70,60,50,40,30]
for(let i=0; i<array.length; i++){
    if(array[i] < 50){
        array.splice(i, 1 )
        i--;

    }
}
console.log(array);
// Write a program that uses a function to find the largest element in an array of numbers.
//let arrayOne:number []= [90,80,70,60,50,40,30]
function findArrayNumber(arrayOne:number[]){
   
    var largestNumber:number = 0;
for(let i=0; i<arrayOne.length; i++){
  console.log(arrayOne[i]);

  if(arrayOne[i] > largestNumber){
    largestNumber = arrayOne[i]

  }
  
}
return largestNumber


}
findArrayNumber([100,90,80,70,60, 152])