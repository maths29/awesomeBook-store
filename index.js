/* eslint-disable no-unused-vars */
const BooksContainer = document.querySelector('.books-list');
const bookTitle = document.querySelector('.bookTitle');
const bookAuthor = document.querySelector('.bookAutor');
const form = document.querySelector('form');
let Books = [];
const booksInStore = localStorage.getItem('Books');
function createBooksLst() {
  BooksContainer.innerHTML = '';
  Books.forEach((book, index) => {
    const bookDiv = document.createElement('div');

    bookDiv.innerHTML = `
        <ul>
            <li>"${book.title}" by ${book.author}</li>
            <button class="removeB" onClick="removeB(${index})">Remove</button>
        </ul>
        <br>
    `;
    BooksContainer.appendChild(bookDiv);
  });
}

class Bookslist {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const newBooks = {
      title: bookTitle.value,
      author: bookAuthor.value,
    };

    Books.push(newBooks);
    localStorage.setItem('books', JSON.stringify(Books));

    createBooksLst();

    // Reset input fields
    bookTitle.value = '';
    bookAuthor.value = '';
    return this;
  }

  removeBook(index) {
    Books = Books.filter((book, bookIndex) => bookIndex !== index);
    localStorage.setItem('BooksList', JSON.stringify(Books));

    createBooksLst();
    return this;
  }
}

const newBook = new Bookslist(bookTitle.value, bookAuthor.value);

/* ------------Add the Book to The List-------------- */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.addBook();
});
/* ------------Add the Book to The List-------------- */

/* ------------Remove the Book from The List-------------- */
function removeB(index) {
  newBook.removeBook(index);
}
/* ------------Remove the Book from The List-------------- */
if (booksInStore) {
  Books = JSON.parse(booksInStore);
}

createBooksLst();