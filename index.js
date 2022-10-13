let inputField = document.querySelector('input')
let addMovieBtn = document.querySelector('button')

let message = document.querySelector('#message')



function addMovie(event) {
    event.preventDefault()
    if (inputField.value !== '') {
        let movie = document.createElement('li')
        let movieTitle = document.createElement('span')
        movieTitle.textContent = inputField.value

        //adds an event listener on each new item, that activates the toggle checked class function
        movieTitle.addEventListener('click', crossOffMovie)

        movie.appendChild(movieTitle)

        //adding a delete button with each new item
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'X'
        movie.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', deleteMovie)
        
        let ul = document.querySelector('ul')
        ul.appendChild(movie)
        inputField.value = ''
    }
}
addMovieBtn.addEventListener('click', addMovie)


function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.previousElementSibling.textContent} Deleted!`
    revealMessage()
}


function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}


function revealMessage() {
    message.classList.remove('hide')
    setTimeout(function() {
        message.classList.add('hide')
    }, 1000)
}