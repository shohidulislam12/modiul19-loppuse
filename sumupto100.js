/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i=0;
let sum=0;
while(i<=200){
    i++;
    console.log(i);
    sum=sum+i;
    if(i>=50){
        break;
    }
    
}
console.log(sum);