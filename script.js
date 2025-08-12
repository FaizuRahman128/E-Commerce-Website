let search = document.querySelector('.searchbar');// Selecting the element with the class 'searchbar'
// Adding a click event listener to the element with the ID 'search'
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');// Toggling the 'active' class on the 'searchbar' element
}

let login = document.querySelector('.login')// Selecting the element with the class 'log
document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');// Toggling the 'active' class on the 'login' element
}
