const btn = document.querySelector("#btn");
const form = document.querySelector("#book-form");
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
    console.log( book)
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary()
})