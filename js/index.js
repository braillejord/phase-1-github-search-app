// deliverable 1: when form is submitted, search for matching users
let inputValue;

const inputForm = document.getElementById('github-form')
inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    inputValue = document.getElementById('search').value
    searchUsers(inputValue)
})

const incompleteUrl = 'https://api.github.com/search/users?q='

function searchUsers(inputValue) {
    fetch(incompleteUrl + inputValue)
    .then(r => r.json())
    .then(users => renderData(users.items))
}

const userList = document.getElementById('user-list')

// deliverable 2: display user information
function renderData(users) {
    users.forEach(userObject => {
        const userAvatar = document.createElement('img')
        userAvatar.src = userObject.avatar_url
        
        const userContainer = document.createElement('li')
        userContainer.innerText = userObject.login
        userContainer.addEventListener('click', () => fetchRepoData(userObject.login))
        
        userContainer.appendChild(userAvatar)

        userList.appendChild(userContainer)
    })
}

const incompleteRepoUrl = 'https://api.github.com/users/'

// deliverable 3: click on user to return repository data
function fetchRepoData(userLogin) {
    fetch(incompleteRepoUrl + userLogin + '/repos')
    .then(r => r.json())
    .then(repos => renderRepos(repos))
}

const repoList = document.getElementById('repos-list')

// deliverable 4: display all repos for user
function renderRepos(repos) {
    repos.forEach(singleRepo => {
        const repoListItem = document.createElement('li')
        repoListItem.innerText = singleRepo.name
        repoList.appendChild(repoListItem)
    })
}