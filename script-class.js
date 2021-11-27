import Book from './classes/Book.js';
import Books from './classes/Books.js';

const books = new Books();

books.paintBooks();
document.querySelector('#addBookButton').addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  if (title.value !== '' && author.value !== '') {
    const newBook = new Book(title.value, author.value);
    books.addBook(newBook);
  }

  title.value = '';
  author.value = '';
});
