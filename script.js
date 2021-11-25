let library = localStorage.getItem("library") == null 
    ? [] 
    : JSON.parse(localStorage.getItem("library"));
paintBooks()

const button = document.querySelector('#addBookButton');
button.addEventListener('click', addBook);

function book(title, author){
    this.title = title;
    this.author = author;
}

function saveLocalStorage() {
    localStorage.setItem("library", JSON.stringify(library))
}

function addBook(e){
  e.preventDefault();
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value 
  const newBook = new book(title, author);
  add(newBook);
}

function add(newBook){
  library.push(newBook);
  saveLocalStorage();
  paintBooks();
}

function createTR(html) {
    const div = document.createElement("table");
    div.innerHTML = html;
    return div.querySelector("tr");
}

function paintBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = "";
  library.forEach(book => {
    const newBookElement = createTR(`
      <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td><button>X</button></td>
      </tr>
    `);
    newBookElement.querySelector("button").addEventListener("click", () => {
        newBookElement.remove()
        library = library.filter(bookArr => book != bookArr)
        saveLocalStorage();
    })
    bookList.appendChild(newBookElement)
  });
}
