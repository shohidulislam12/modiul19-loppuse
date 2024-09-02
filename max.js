/***
Write JavaScript code that takes an array of numbers as input and returns the maximum element in the array. Use a while loop to iterate through the array and compare each element to find the maximum.
 */
const number= [ 34,45,67,87,76,89,75,12]
console.log(number);
for(const num of number){
    console.log(num)
}


let max=number[0];
for( let i=1; i<number.length;i++){
    if(number[i]>max){
        max=number[i];
    }
}
console.log("max number this array is " + max);
 
i=1;
let min=number[0];
while( i<number.length ){
    if(number[i]<min){
        min=number[i];
    }
    i++;
}
console.log("minumber this array is " + min);