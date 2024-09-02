/*
Subtask-1:
Now tell Ersa to display sum of all the odd numbers from 1 to 100.
 */
/***
Subtask-2:
Now tell Ersa to display sum of all the even numbers from 1 to 100.
 */
// oddd 
let i=1;
let sum =0;
while(i<=100){
     if(i%2!=0){
        sum=sum+i;
        console.log(i);
     }
    
     i++;
}
console.log("sum of these odd number " + sum)
// even
let j=1;
let sume =0;
while(j<=100){
     if(j%2==0){
        sume=sume+j;
        console.log(j);
     }
    
     j++;
}
console.log("sum of these even number " + sume);