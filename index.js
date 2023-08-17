const btn = document.querySelector("#btn");
const form = document.querySelector("#book-form");
const bookLibrary = document.querySelector("#books-library");
btn.addEventListener("click", () =>{
 form.style.display = "block";
})

let library = [];
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary(){
    const title =  document.querySelector("#title").value;
    const author =  document.querySelector("#author").value;
    const pages =  document.querySelector("#pages").value;
    const read =  document.querySelector("#read").checked;
    const book = new Book(title, author, pages, read);
    library.push(book);
    showBook()
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary()
})
function showBook(){
    bookLibrary.innerHTML = "";
    for (let i = 0; i < library.length; i++){
        let book = library[i];
        let bookElement = document.createElement("div")
        bookElement.innerHTML= `
        <h3>${book.title}<h3>
        by
        <h4>${book.author}<h4>
        has
        <p>${book.pages}<p>
        <p>${book.read? "read": "not read yet"}<p>
        `
        bookLibrary.appendChild(bookElement);
    }
}