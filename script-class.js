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

function displayPage(link) {
  const booksPage = document.getElementById('table-list');
  const formPage = document.getElementById('addBookForm');
  const contactPage = document.getElementById('Contact-info');
  if (link === 'table-books') {
    booksPage.classList.remove('hide');
    formPage.classList.add('hide');
    contactPage.classList.add('hide');
  } else if (link === 'add-books') {
    formPage.classList.remove('hide');
    booksPage.classList.add('hide');
    contactPage.classList.add('hide');
  } else if (link === 'contact-section') {
    contactPage.classList.remove('hide');
    formPage.classList.add('hide');
    booksPage.classList.add('hide');
  }
}
displayPage('table-books');

document.querySelector('.menu').querySelectorAll('li').forEach((link) => {
  link.addEventListener('click', (e) => {
    displayPage(e.target.id);
  });
});

const dt = DateTime.now(dt);
dt = DateTime.fromObject({
  day: 27,
  hour: 18
}, {
  zone: 'Mexico',
  numberingSystem : 'beng'
})

DateTime.fromISO("2021-11-27")
DateTime.now().toString();



/*function updateClock() {
  const dt = new Date();
  const DivDate = document.querySelector('.date-time');
  DivDate.innerHTML = dt.toLocaleString();
}

function initClock() {
  updateClock();
  window.setInterval(updateClock, 1);
}

window.onload = initClock;*/
