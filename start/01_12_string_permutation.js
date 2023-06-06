// Write your code here
// function numPermutation(letter){
//   let total;
//   for(let i=1; i<=letter.length; i++){
//     if(total === undefined){
//       total = 1;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }

// by recursion

function numPermutation(letter){
  if(letter.length === 1){
    return 1;
  }
  else{
    return letter.length * numPermutation(letter.slice(1));
  }
}

console.log(numPermutation("Hello"));