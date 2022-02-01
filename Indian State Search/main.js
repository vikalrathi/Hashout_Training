const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
const mainContainer = document.getElementById('myData')
var statesData = []
const searchStates = async (searchText) => {
  const res = await fetch('./states.json')
  const states = await res.json()

  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, 'gi')
    return state.name.match(regex) || state.abbr.match(regex)
  })

  if (searchText.length === 0) {
    matches = []
  }
  emptylist()
  outputHTML(matches)
}
const emptylist = () => {
  statesData = []
  allDataOutputHTML(statesData)
}
const statesList = async () => {
  const res = await fetch('./states.json')
  statesData = await res.json()
  allDataOutputHTML(statesData)
}
const allDataOutputHTML = (states) => {
  if (states.length > 0) {
    const html = states
      .map(
        (match) => `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
                <small>Lat: ${match.lat} / Long: ${match.long}</small>
            </div>       
        `,
      )
      .join('')
    mainContainer.innerHTML = html
  }
  if (states.length === 0) {
    mainContainer.innerHTML = []
  }
}
const outputHTML = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
                <small>Lat: ${match.lat} / Long: ${match.long}</small>
            </div>       
        `,
      )
      .join('')
    matchList.innerHTML = html
  }
}

search.addEventListener('input', () => searchStates(search.value))
window.addEventListener('load', statesList)
