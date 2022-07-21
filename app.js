// DOM Elements
const addBook = document.querySelector("#new-book");
let bookContainer = document.querySelector(".books");
// let bookCards = document.querySelectorAll(".card");
// card info
let bookTitle = document.querySelector("#book-title");
let writer = document.querySelector("#writer");
let pages = document.querySelector("#pages");
const read = document.querySelector(".read")
const remove = document.querySelector(".remove")
// form elements
const form = document.querySelector(".add-book")
let title = document.querySelector(".title").value;
let author = document.querySelector(".author").value;
let pageNum = document.querySelector(".pages").value;
const submit = document.querySelector("button[type='submit']");


addBook.addEventListener("click", () => {form.classList.remove("out")});

submit.addEventListener("click", () => {
  if (title === "" || author === "" || pageNum === "") return;
  form.classList.add("out");
});

let myLibrary = [];

// the constructor...
function Book (title, author, pageNum) {
  this.title = title,
  this.author = author,
  this.pageNum = pageNum
}

// do stuff here
function addToLibrary() {
  let book = new Book(title, author, pageNum);
  myLibrary.push(book);
  return myLibrary;
}

addToLibrary();
console.log(myLibrary)

function displayBook() {
  for(i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.className = "card";
    bookContainer.appendChild(bookCard);

    bookTitle.innerHTML = '"Hello world"';
    writer.innerHTML = '"Jack of all trades"'

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(writer);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(remove);
  }
}

displayBook();
