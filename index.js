import createFormSection from './modules/createFormSection.js';
import createContactSection from './modules/createContactSection.js';
import { removeBookFromPage } from './modules/addAndRemoveBook.js';
import { displayBooksOnPage, removeFromLocalStorage } from './modules/localStorage.js';
import {
  homeDisplay, displayBookList, displayFormSection, displayContactSection,
} from './modules/ENG.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

const BooksContainer = document.querySelector('.books-list-container');

const home = document.querySelector('.fa-house');
const BooksListLink = document.querySelector('.list-link');
const contactLink = document.querySelector('.contact-link');
const formSectionLink = document.querySelector('.add-new-book-link');

const currentDate = document.querySelector('.current-date');

const dateTime = DateTime.local();
const today = dateTime.toLocaleString(DateTime.DATETIME_FULL);

currentDate.innerHTML = today;

home.addEventListener('click', (e) => {
  e.preventDefault();
  homeDisplay();
});

BooksListLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayBookList();
});

formSectionLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayFormSection();
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  displayContactSection();
});

BooksContainer.addEventListener('click', (e) => {
  removeBookFromPage(e.target);
  removeFromLocalStorage(e.target);
});

window.addEventListener('load', () => {
  createFormSection();
  createContactSection();
  displayBooksOnPage();
});