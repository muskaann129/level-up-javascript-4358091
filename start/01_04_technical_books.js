class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

class TechnicalBook extends Book{
  constructor(title, author, ISBN, numCopies, edition){
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition(){
    return `The current version of this book is ${this.edition}`;
  }
}

// let's create a new book

const HungerGames = new TechnicalBook("Hunger Games","Suzanne collins", 154263, 7, 2.3);

console.log(HungerGames.getAvailability());
console.log(HungerGames.getEdition());