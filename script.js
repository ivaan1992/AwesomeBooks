let library = localStorage.getItem('library') == null
  ? []
  : JSON.parse(localStorage.getItem('library'));

function saveLocalStorage() {
  localStorage.setItem('library', JSON.stringify(library));
}

function createTR(html) {
  const div = document.createElement('table');
  div.innerHTML = html;
  return div.querySelector('tr');
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function paintBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  library.forEach((book) => {
    const newBookElement = createTR(`
      <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td><button>Remove Book</button></td>
      </tr>
    `);
    newBookElement.querySelector('button').addEventListener('click', () => {
      newBookElement.remove();
      library = library.filter((bookArr) => Book !== bookArr);
      saveLocalStorage();
    });
    bookList.appendChild(newBookElement);
  });
}

function add(newBook) {
  library = [...library, newBook];
  saveLocalStorage();
  paintBooks();
}

paintBooks();
function addBook(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const newBook = new Book(title, author);
  add(newBook);
}
const button = document.querySelector('#addBookButton');
button.addEventListener('click', addBook);
