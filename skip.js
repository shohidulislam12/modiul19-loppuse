/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

 let i=55;
do{ i++;
   if(i%2===0||i%5===0){
    continue;
   }
   console.log(i);

}
while(i<=85)

    
 i=0;
do{ i++;
   if(i%2===1){
    continue;
   }
   console.log(i);

}
while(i<=40)