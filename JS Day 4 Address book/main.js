document.getElementById('filterInput').addEventListener('keyup', () => {
  let filterValue = document.getElementById('filterInput').value.toUpperCase()
  let ul = document.getElementById('names')
  let li = ul.querySelectorAll('li.collection-item')
  let liHeaders = ul.querySelectorAll('li.collection-header')

  li.forEach((item) => {
    let a = item.getElementsByTagName('a')[0]
    item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue)
      ? 'block'
      : 'none'
  })
  liHeaders.forEach((item) => {
    let a = item.getElementsByTagName('h5')[0]
    item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue)
      ? 'block'
      : 'none'
  })
})
