// DOM Elements
const addBook = document.querySelector("#new-book");
let bookContainer = document.querySelector(".books");
// card buttons
const read = document.querySelector(".read")
const remove = document.querySelector(".remove")
// form elements
const form = document.querySelector(".add-book")
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pageNum = document.querySelector(".pages");
const submit = document.querySelector("button[type='submit']");


addBook.addEventListener("click", () => {form.classList.remove("out")});

// Add new book after submit button is clicked. 
submit.addEventListener("click", () => {
  if (title.value === "" || author.value === "" || pageNum.value === "") return
  console.log(addToLibrary());
  displayBook();
  form.classList.add("out");
  
});

// Library
let myLibrary = [];

// the book constructor...
function Book (title, author, pageNum) {
  this.title = title,
  this.author = author,
  this.pageNum = pageNum
}

// Add book to library
function addToLibrary() {
  let book = new Book(title.value, author.value, pageNum.value);
  myLibrary.push(book);
  return myLibrary;
}

// Create new card
function displayBook() {
    let bookCard = document.createElement("div");
    bookCard.className = "card";
    bookContainer.appendChild(bookCard);

    let bookTitle = document.createElement("p");
    let writer = document.createElement("p");
    let pages = document.createElement("p");

    bookTitle.innerHTML = `"${title.value}"`;
    writer.innerHTML = `${author.value}`;
    pages.innerHTML = `${pageNum.value} pages`;
    
    bookTitle.id = "book-title";

    let read = document.createElement("button");
    read.innerText = "Read";
    let remove = document.createElement("button");
    remove.innerText = "Remove";

    bookCard.append(bookTitle, writer, pages, read, remove);
}
