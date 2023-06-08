const BooksContainer = document.querySelector('.books-list-container');
const BooksListLink = document.querySelector('.list-link');
const bookslisth2 = document.querySelector('.books-list-h2');

const contact = document.querySelector('.contact-section');
const contactLink = document.querySelector('.contact-link');

const form = document.querySelector('form');
const formSectionLink = document.querySelector('.add-new-book-link');

const homeScreen = document.querySelector('.home-welcome');
const currentDate = document.querySelector('.current-date');
const options = {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
};
const today = new Date().toLocaleString('en-US', options);
let count = 0;

currentDate.innerHTML = today;

class CreateBookList {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static createFormSection() {
    const formInfo = document.createElement('div');
    formInfo.innerHTML = `
        <h2>Add a new book</h2>
        <input class="bookTitle" type="text" placeholder="Title" required>
        <input class="bookAutor" type="text" placeholder="Author" required>
        <button class="add" type="submit">Add</button>
    `;
    form.appendChild(formInfo);
  }

  static createContactSection() {
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = `
        <h2>Contact Information</h2>
        <p>Do you have any question or do you want to say "Hello"?</p>
        <p>You can reach out to us!</p>
        <ul>
            <li>Our-email: Iwu - <a>iwuconcept@gmail.com</a>, Binyam - <a>binyampowerhc@gmail.com</a> </li>
            <li>Our Phone number: Iwu - +234 907 525 1287, Binyam - +251 9 13 80 58 37 </li>
            <li>Our address Streetname: 4 Obaze str, Abuja quaters, G.R.A, Benin city,Edo state, Nigeria.</li>
        </ul>
    `;
    contact.appendChild(contactInfo);
  }

  static addNewBook(book) {
    const booksInfo = document.createElement('div');
    booksInfo.className = 'book-info';
    booksInfo.id = book.id;
    booksInfo.innerHTML = `
         <ul>
          <li class="book-title">"${book.title}" </li>
          <li> by </li>
          <li class="book-auhtor">${book.author}</li>
        </ul>
        <button class="remove-this-book">Remove</button>
    `;

    BooksContainer.appendChild(booksInfo);
  }

  static removeBookFromPage(target) {
    if (target.classList.contains('remove-this-book')) {
      target.parentElement.remove();
    }
  }

  static loadFromLocalStorage() {
    let Books;

    if (localStorage.getItem('BooksInfo')) {
      Books = JSON.parse(localStorage.getItem('BooksInfo'));
    } else {
      Books = [];
    }
    return Books;
  }

  static displayBooksOnPage() {
    const Books = CreateBookList.loadFromLocalStorage();

    Books.forEach((book) => {
      CreateBookList.addNewBook(book);
    });
  }

  static removeFromLocalStorage(element) {
    let k = 0;
    const Books = CreateBookList.loadFromLocalStorage();
    const idd = element.parentElement.id;
    const newID = Number(idd);
    for (let i = 0; i < Books.length; i += 1) {
      if (Books[i].id === newID) {
        k = i;
        break;
      }
    }
    Books.splice(k, 1);
    localStorage.setItem('BooksInfo', JSON.stringify(Books));
  }
}

BooksListLink.addEventListener('click', (e) => {
  e.preventDefault();
  BooksContainer.classList.add('active');
  bookslisth2.classList.add('active');
  form.classList.remove('active');
  contact.classList.remove('active');
  homeScreen.classList.add('remove-content');
});

formSectionLink.addEventListener('click', (e) => {
  e.preventDefault();
  bookslisth2.classList.remove('active');
  form.classList.add('active');
  BooksContainer.classList.remove('active');
  contact.classList.remove('active');
  homeScreen.classList.add('remove-content');
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contact.classList.add('active');
  bookslisth2.classList.remove('active');
  BooksContainer.classList.remove('active');
  form.classList.remove('active');
  homeScreen.classList.add('remove-content');
});

BooksContainer.addEventListener('click', (e) => {
  CreateBookList.removeBookFromPage(e.target);
  CreateBookList.removeFromLocalStorage(e.target);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('.bookTitle');
  const bookAuthor = document.querySelector('.bookAutor');

  const loadBooks = CreateBookList.loadFromLocalStorage();
  const newBook = new CreateBookList(bookTitle.value, bookAuthor.value, count);
  count += 1;

  loadBooks.push(newBook);

  CreateBookList.addNewBook(newBook);
  CreateBookList.loadFromLocalStorage();

  localStorage.setItem('BooksInfo', JSON.stringify(loadBooks));

  // Reset input fields
  bookTitle.value = '';
  bookAuthor.value = '';
});

window.addEventListener('load', () => {
  CreateBookList.createFormSection();
  CreateBookList.createContactSection();
  CreateBookList.displayBooksOnPage();
});