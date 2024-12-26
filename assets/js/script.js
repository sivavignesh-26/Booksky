let popupOverley = document.querySelector('.popup-overley');
let popupBox = document.querySelector('.popup-box');
let addPopupButton = document.getElementById('add-pop-button');
let cancelButton = document.getElementById('cancel-popup');

addPopupButton.addEventListener('click',function() {
    popupOverley.style.display = 'block'
    popupBox.style.display = 'block'
})

cancelButton.addEventListener("click", (e)=> {
    e.preventDefault()
    popupOverley.style.display = 'none'
    popupBox.style.display = 'none'
})


// --------------------------------------------------------------------->
let container = document.querySelector('.container')
let addBookButton = document.getElementById('add-book');
let bookTitleInput = document.getElementById('book-title-input')
let bookAuthornput = document.getElementById('book-author-input')
let bookDescriptionnput = document.getElementById('book-description-input')

addBookButton.addEventListener("click", (e)=> {
    e.preventDefault();
    let div = document.createElement('div');
    div.setAttribute('class','book-container')
    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthornput.value}</h5>
            <p>${bookDescriptionnput.value}</p>
            <button onClick = deleteBook(event)>Delete</button>`
    container.append(div)
    popupBox.style.display = 'none'
    popupOverley.style.display = 'none'
    bookTitleInput.value = ""
    bookAuthornput.value = ""
    bookDescriptionnput.value = ""
})

function deleteBook(event) {
    event.target.parentElement.remove()
}