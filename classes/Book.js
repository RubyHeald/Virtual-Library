// import the Media class:
const Media = require('./Media');

// create your Book class:
class Book{
    constructor (author){
        super(title, year)
        numPages = 100
        rating = [1,2,3,4,5]
        this.author = author
    }
static highestRating(books) {
    if (books.length === 0) {
        return null;
}
   
let highestRatedBook = books[0]; 
for (let i = 1; i < books.length; i++) {
    if (books[i].rating > highestRatedBook.rating) {
    highestRatedBook = books[i];
  }
}
return highestRatedBook;
    }
summary(){
    return $`Title:${this.title}, Author:${this.author}, Year: ${this.year}, Page Count: ${numPages}, Genre: ${genre}, Rating: ${this.rating}`
}
}

// don't change below
module.exports = Book;
