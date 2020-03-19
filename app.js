// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td> <a href="#" class="delete">x</a></td>
  `;
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  div.className = `alert ${className}`;

  // Add text
  div.appendChild(document.createTextNode(message));

  // Insert it to DOM
  // get Parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove()
  }, 3000)
}

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

  //  Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiating a book
  const book = new Book(title, author, isbn);

  // Instantiate UI Object
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error Alert
    ui.showAlert('Please fill in all fields', 'error');

  } else {

    // Add  book to list
    ui.addBookToList(book);

    // show success
    ui.showAlert('Book added', 'success');

    // Clear the fields
    ui.clearFields();

  }




  e.preventDefault();
});