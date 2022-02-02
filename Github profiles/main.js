const API_URL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getUser('nabendu82')

async function getUser(username) {
  const resp = await fetch(API_URL + username)
  const respData = await resp.json()
  console.log('respData :: ', respData)
  createUserCard(respData)
  getRepos(username)
}

async function getRepos(username) {
  const resp = await fetch(API_URL + username + '/repos')
  const respData = await resp.json()
  console.log(respData)
  addReposToCard(respData)
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('single-repo')
  var ul = document.createElement('ul')
  repos.forEach((repo) => {
    const repoEle = document.createElement('a')
    repoEle.classList.add('repo')
    var li = document.createElement('li')
    li.classList.add('list')
    repoEle.href = repo.html_url
    repoEle.target = '_blank'
    repoEle.innerText = repo.name
    li.appendChild(repoEle)
    const h3 = document.createElement('h3')
    h3.innerHTML = `Description : ` + repo.description
    const h4 = document.createElement('h4')
    h4.innerHTML = `Visibility : ` + repo.visibility
    h3.classList.add('desc')
    h4.classList.add('visible')
    li.appendChild(h3)
    li.appendChild(h4)
    ul.appendChild(li)
    reposEl.appendChild(ul)
  })
}

function createUserCard(user) {
  const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li><strong>Followers: </strong>${user.followers}</li>
                    <li><strong>Following: </strong>${user.following}</li>
                    <li><strong>Repos: </strong>${user.public_repos}</li>
                    <li><strong>Twitter: </strong>${user.twitter_username}</li>
                    <li><strong>Location: </strong>${user.location}</li>
                </ul>
                <div id="repos">
                <div id="single-repo">
                </div>
                </div>
            </div>
        </div>
    `
  main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value
  if (user) {
    getUser(user)
    search.value = ''
  }
})
