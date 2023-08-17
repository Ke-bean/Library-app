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