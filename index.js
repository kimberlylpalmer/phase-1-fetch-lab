//ORIGINAL CODE
let URL = "https://anapioficeandfire.com/api/books"

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(URL)
    .then(resp => resp.json())
    .then(books => renderBooks(books))
}

// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//   // To pass the tests, don't forget to return your fetch!
//     .then(response => response.json())
//     .then(json => renderBooks(json))
// }


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});








































//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Kim's Code from first try~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//   // To pass the tests, don't forget to return your fetch!
//     .then(response => response.json())
//     .then(json => renderBooks(json))
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });
