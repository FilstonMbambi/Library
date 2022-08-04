// DOM Elements
const addBook = document.querySelector("#new-book");
let bookContainer = document.querySelector(".books");
// card buttons
const read = document.querySelector(".read")
const remove = document.querySelectorAll(".remove")
// form elements
const form = document.querySelector(".add-book")
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pageNum = document.querySelector(".pages");
const submit = document.querySelector("button[type='submit']");

addBook.addEventListener("click", () => {
  title.value = "";
  author.value = "";
  pageNum.value = "";
  form.classList.remove("out");
});

// Add new book after submit button is clicked. 
submit.addEventListener("click", () => {
  if (title.value === "" || author.value === "" || pageNum.value === "") return
  console.log(addToLibrary());

  let bookCard = document.querySelectorAll(".card");

  bookCard.forEach(book => bookContainer.removeChild(book))

  for (i = 0; i < myLibrary.length; i++) {
    displayBook(myLibrary[i]);
  }
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
function displayBook(item) {
    let bookCard = document.createElement("div");
    bookCard.className = "card";
    bookContainer.appendChild(bookCard);

    let bookTitle = document.createElement("p");
    let writer = document.createElement("p");
    let pages = document.createElement("p");

    bookTitle.innerHTML = `"${item.title}"`;
    writer.innerHTML = `${item.author}`;
    pages.innerHTML = `${item.pageNum} pages`;
    
    bookTitle.id = "book-title";

    let read = document.createElement("button");
    read.innerText = "Read";
    let remove = document.createElement("button");
    remove.className = "remove";
    remove.innerText = "Remove";

    bookCard.setAttribute("id", myLibrary.indexOf(item))

    bookCard.append(bookTitle, writer, pages, read, remove);

    // Delete book when remove button is clicked
    remove.addEventListener("click", () => {
      bookContainer.removeChild(bookContainer.children[bookCard.getAttribute("id")]);
      myLibrary.splice(myLibrary.indexOf(item),1);
      console.log(myLibrary);
    });
    
}
