// Write your code here
function totalBill(coffeeArr){
  let coffeeSum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees =+ numCoffees)
  );
  return `The total price is $${coffeeSum * 1.25}`;
}
console.log(totalBill([2,5,7,1,4]));