// BY USING PROTOTYPE

// function Movie(title, director, genre, releaseyear, rating){
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseyear = releaseyear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function(){
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseyear}. It recieved a rating of ${this.rating}`
// }

// BY USING CLASS

class Movie{
  constructor(title, director, genre, releaseyear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseyear = releaseyear;
    this.rating = rating;
  }

  getOverview(){
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseyear}. It recieved a rating of ${this.rating}`
  }
}

// let's create a new Movie 

const SpiderMan = new Movie("Sipderman", "Sam Raimi", "Action", 2002, 87);
const Batman = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 83);

console.log(SpiderMan);
console.log(SpiderMan.getOverview());
console.log(Batman.getOverview());