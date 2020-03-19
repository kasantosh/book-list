// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {

}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

  //  Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiating a book
  const book = new Book(title, author, isbn);


  e.preventDefault();
});