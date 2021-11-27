import createElement from './createElement.js';

export default class Books {
  constructor() {
    this.library = localStorage.getItem('library') == null
      ? []
      : JSON.parse(localStorage.getItem('library'));
  }

  paintBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    this.library.forEach((book) => {
      const row = createElement(`
          <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button class='remove'>Remove Book</button></td>
          </tr>
          `);
      row.querySelector('.remove').addEventListener('click', () => {
        this.removeBook(book);
      });
      bookList.appendChild(row);
    });
  }

  saveLocal() {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  addBook(book) {
    const l = this.library;
    if (
      JSON.stringify(l[l.length - 1]) !== JSON.stringify(book)
      && book.title !== ''
      && book.author !== ''
    ) {
      this.library = [...this.library, book];
    }
    this.saveLocal();
    this.paintBooks();
  }

  removeBook(book) {
    this.library = this.library.filter(
      (bookFromArray) => book !== bookFromArray,
    );
    this.saveLocal();
    this.paintBooks();
  }
}
