const library = [];
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleRead = function(){
    this.read = !this.read;
}
function toggleRead(i){
    library[i].toggleRead();
    showBook();
}
function showBook(){
    let booksLibrary = document.querySelector("#books-library");
    booksLibrary.innerHTML = "";
    for (let i = 0; i < library.length; i++){
        let book = library[i];
        let bookElement = document.createElement("div");
        bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <p>${book.pages} pages</p>
        <p>${book.read? "read":"not read yet"}</p>
        <button type="text" onclick="toggleRead(${i})">Toggle Read</button>
        <button type="text" onclick="removeBook(${i})">Remove</button>
        `
        booksLibrary.appendChild(bookElement)
    }
}
function removeBook(i){
    library.splice(i, 1);
    showBook();
}
function addBookToLibrary(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
    showBook();
}
document.querySelector("#btn").addEventListener("click", () =>{
    document.querySelector("#book-form").style.display = "block"
})
document.querySelector("#book-form").addEventListener("submit", (e) =>{
    e.preventDefault();
    addBookToLibrary();
})





// let btn = document.querySelector("#btn");
// let form = document.querySelector("#book-form");
// btn.addEventListener("click", () =>{
//     form.style.display  = "block"
// })
// let library = [];
// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }
// function addBookToLibrary(){
//     let title = document.querySelector("#title").value;
//     let author = document.querySelector("#author").value;
//     let pages = document.querySelector("#pages").value;
//     let read = document.querySelector("#read").checked;
//     let book = new Book(title, author, pages, read);
//     console.log(book)
// }
// form.addEventListener("submit", e =>{
//     e.preventDefault();
//     addBookToLibrary()
// })