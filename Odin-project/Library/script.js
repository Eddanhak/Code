
// Library code.


const addBookButton = document.querySelector("#topbar-button-add");
const formContainer = document.querySelector("#container-form-main");
const formExitButton = document.querySelector("#book-form-exit");
const removeBookButton = document.querySelector("#topbar-button-remove");
const addBookFormButton = document.querySelector("#book-form-submit-button");
const bookForm = document.querySelector("#book-form");
const bookGrid = document.querySelector("#container-book-cards-grid");
const isReadBox = document.querySelector("#book-form-isread-box");



let deleteButtonCardArray = [];
let myLibrary = [];

let removeBtnCheck = false;


function isRead(checkBox) {
    

   }


function addBookToLib(bookTitle, bookAuthor, bookPages) {
    const newCard = document.createElement("div");
    
    const newTitleDeleteContainer = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newDelButton = document.createElement("button");
    
    
    const newAuthor = document.createElement("h4");
    const newPages = document.createElement("p");
    
    const newCardIsRead = document.createElement("p");
    

    newTitleDeleteContainer.setAttribute("class", "container-book-card-title-delete");
    newTitle.setAttribute("class", "book-card-title");
    newDelButton.setAttribute("class", "book-card-button-delete");
    newAuthor.setAttribute("class", "book-card-author");
    newPages.setAttribute("class", "book-card-pages");
    newCardIsRead.setAttribute("class", "container-book-card-isread");
    
    newTitle.textContent = bookTitle;
    newAuthor.textContent = bookAuthor;
    newPages.textContent = `${bookPages} Pages.`;
    newDelButton.textContent = "X";
    
    bookGrid.appendChild(newCard);
    newCard.appendChild(newTitleDeleteContainer);
    newTitleDeleteContainer.appendChild(newTitle);
    newTitleDeleteContainer.appendChild(newDelButton);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    newCard.appendChild(newCardIsRead);
    
    if(!isReadBox.checked){
        newCard.setAttribute("class", "container-book-card");
    } else {
        newCard.setAttribute("class", "container-book-card-read");
        newCardIsRead.textContent = "is read.";
        newCardIsRead.setAttribute("style", "font-style:italic");
    }

    deleteButtonCardArray.push(newDelButton);
    
    
}

addBookButton.addEventListener("click", function(event) {
    formContainer.style.display = "flex";
    isRead(isReadBox);
});

formExitButton.addEventListener("click", function(event) {
    formContainer.style.display = "none";
});

removeBookButton.addEventListener("click", function(event) {
    if(!removeBtnCheck){
        removeBookButton.style.color = "red";
        removeBtnCheck = true;
    for (let i=0; i < deleteButtonCardArray.length; i++) {
        deleteButtonCardArray[i].style.display = "inline";
        deleteButtonCardArray[i].addEventListener("click", function(event) {
            deleteButtonCardArray[i].parentNode.parentNode.remove();
        });

    }}
    else {
        removeBookButton.style.color = "black";
        removeBtnCheck = false;

        for (let i=0; i < deleteButtonCardArray.length; i++) {
            deleteButtonCardArray[i].style.display = "none";
        }
    }
});




addBookFormButton.addEventListener("click", function(event) {
    event.preventDefault();
    addBookToLib(bookForm[0].value, bookForm[1].value, bookForm[2].value);
})

