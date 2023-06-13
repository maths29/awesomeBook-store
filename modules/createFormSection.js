import { addNewBook } from './addAndRemoveBook.js';
import { loadFromLocalStorage } from './localStorage.js';

let count = 0;

class CreateBookList {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const formInfo = document.querySelector('form');
const formm = document.querySelector('form');
const createFormSection = () => {
  const formIn = document.createElement('div');
  formIn.innerHTML = `
        <h2>Add a new book</h2>
        <input class="bookTitle" type="text" placeholder="Title" required>
        <input class="bookAutor" type="text" placeholder="Author" required>
        <button class="add" type="submit">Add</button>
    `;
  formm.appendChild(formIn);
};

export default createFormSection;

formInfo.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('.bookTitle');
  const bookAuthor = document.querySelector('.bookAutor');

  const loadBooks = loadFromLocalStorage();
  const newBook = new CreateBookList(bookTitle.value, bookAuthor.value, count);
  count += 1;

  loadBooks.push(newBook);

  addNewBook(newBook);
  loadFromLocalStorage();

  localStorage.setItem('BooksInfo', JSON.stringify(loadBooks));

  // Reset input fields
  bookTitle.value = '';
  bookAuthor.value = '';
});