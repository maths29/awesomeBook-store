const BooksContainer = document.querySelector('.books-list');
const bookTitle = document.querySelector('.bookTitle');
const bookAuthor = document.querySelector('.bookAutor');
const form = document.querySelector('form');

let BooksList = [];

const booksInStore = localStorage.getItem('BooksList');
if (booksInStore) {
  BooksList = JSON.parse(booksInStore);
}

function createBooksLst() {
  BooksContainer.innerHTML = '';
  BooksList.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `
        <ul>
            <li>${book.title}</li>
            <li>${book.author}</li>
            <button onclick="removeBook(${index})">Remove</button>
        </ul>
        <hr>
    `;
    BooksContainer.appendChild(bookDiv);
  });
}

/* ------------Add New Book to The List-------------- */
function addBook(e) {
  e.preventDefault();
  const newBooks = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  BooksList.push(newBooks);
  localStorage.setItem('books', JSON.stringify(BooksList));

  createBooksLst();

  // Reset input fields
  bookTitle.value = '';
  bookAuthor.value = '';
}
/* ------------Add New Book to The List-------------- */

function removeBook(index) {
  BooksList = BooksList.filter((book, bookIndex) => bookIndex !== index);
  localStorage.setItem('BooksList', JSON.stringify(BooksList));

  createBooksLst();
}

form.addEventListener('submit', addBook);
removeBook();
createBooksLst();