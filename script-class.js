class Book {
  constructor(title, author) {
    this.title = document.getElementById('title').value;
    this.author = document.getElementById('author').value;
  }
}

class Books {
  constructor() { 
    this.library = localStorage.getItem('library') == null
  ? []
  : JSON.parse(localStorage.getItem('library'));}


  paintBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    this.library.forEach((book,i) => {
      const row = document.createElement(tr);
      row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button id= ${i} class='remove'>Remove Book</button></td>
      `;
      bookList.appendChild(row);
    }
  }

  addBook(book) {
    const l=this.library
    if (JSON.stringify(l[l.length-1])!=JSON.stringify(book) &&
    book.title != '' && book.author != ''){
      this.library = [...this.library,book]
    }
    this.paintBooks()
  }

  removeBook(id)
  
}




