const BooksContainer = document.querySelector('.books-list-container');

export const addNewBook = (book) => {
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
};

export function removeBookFromPage(target) {
  if (target.classList.contains('remove-this-book')) {
    target.parentElement.remove();
  }
}
