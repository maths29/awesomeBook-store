import { addNewBook } from './addAndRemoveBook.js';

export function loadFromLocalStorage() {
  let Books;

  if (localStorage.getItem('BooksInfo')) {
    Books = JSON.parse(localStorage.getItem('BooksInfo'));
  } else {
    Books = [];
  }
  return Books;
}

export const displayBooksOnPage = () => {
  const Books = loadFromLocalStorage();

  Books.forEach((book) => {
    addNewBook(book);
  });
};

export function removeFromLocalStorage(element) {
  let k = 0;
  const Books = loadFromLocalStorage();
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
