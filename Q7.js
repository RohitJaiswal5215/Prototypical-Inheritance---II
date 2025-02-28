
// Book constructor function
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  
  // Adding getSummary method to the prototype
  Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`
  }
  
  // Creating an array of Book instances
  const books = [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
    new Book('1984', 'George Orwell', 1949),
    new Book('Pride and Prejudice', 'Jane Austen', 1813)
  ]
  
  // Use map to get an array of book summaries
  const bookSummaries = books.map(book => book.getSummary())
  
  // Log the summaries to the console
  console.log(bookSummaries)
  