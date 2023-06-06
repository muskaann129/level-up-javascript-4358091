// BY USING PROTOTYPE IN JAVASCRIPT

// function Book(title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability= function(){
//   if(this.numCopies === 0){
//     return "Out of Stock";
//   }
//   else if(this.numCopies < 10){
//     return "Low Stock";
//   }
//   else{
//     return "In Stock";
//   }
// }

// Book.prototype.sell = function(numCopiesSold = 1){
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStoceked = 5){
//   this.numCopies += numCopiesStoceked;
// }


// BY USING CLASS

class Book{
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  getAvailability(){
    if(this.numCopies === 0){
      return "Out of Stock";
    }
    else if(this.numCopies < 10){
      return "Low Stock";
    }
    else{
      return "In Stock";
    }
  }

  sell(numCopiesSold = 1){
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStoceked = 5){
    this.numCopies += numCopiesStoceked;
  }
}

// lets create a new book

const HungerGames = new Book("Hunger Games","Suzanne collins", 154263, 7);

console.log(HungerGames.getAvailability());

HungerGames.sell(7);
console.log(HungerGames.getAvailability());

HungerGames.restock(20);
console.log(HungerGames.getAvailability());
