/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  return 1;
}
sumAll([1, 4]);
*/
let sum=0
   function sumAll(arr){
       if(arr[0]<arr[1]){
           for (let i =arr[0] ; i <= arr[1]; i++) {
               sum+=i 
           } 
       }else 
       for (let i =arr[1] ; i <= arr[0]; i++) {
           sum+=i 
       }
       console.log(sum)
   }
   sumAll([5, 4])
