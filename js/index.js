// deliverable 1: when form is submitted, search for matching users
let inputValue;

const inputForm = document.getElementById('github-form')
inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = document.getElementById('search').value
    searchUsers(inputValue)
})

const incompleteUrl = 'https://api.github.com/search/users?q='

function searchUsers(inputValue) {
    console.log(inputValue)
    fetch(incompleteUrl + `${inputValue}`)
    .then(r => r.json())
    .then(users => renderData(users.items))
}

