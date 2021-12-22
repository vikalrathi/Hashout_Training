const breakingbad_container = document.getElementById('breakingbad_container')
const characters_number = 6

const fetchChars = async () => {
  for (let i = 1; i <= characters_number; i++) {
    await getChars(i)
  }
}

const getChars = async (id) => {
  const url = `https://www.breakingbadapi.com/api/characters/${id}`
  const res = await fetch(url)
  const breakingbad = await res.json()
  createBreakingBadCard(breakingbad)
}

const createBreakingBadCard = (breakbad) => {
  const charEl = document.createElement('div')
  charEl.classList.add('breakbad')
  const { birthday, name, img, nickname } = breakbad[0]
  const breakInnerHTML = `
        <div class="img-container">
            <img src="${img}" alt="${name}" class="img"/>
        </div>
        <div class="info">
        <span class="number">${birthday}</span>
        <h3 class="name">${name}</h3>
        <p>${nickname}</p>
        </div>
    `
  charEl.innerHTML = breakInnerHTML
  breakingbad_container.appendChild(charEl)
}

fetchChars()
