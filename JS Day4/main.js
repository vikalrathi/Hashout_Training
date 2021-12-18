document.getElementById('kgsInput').addEventListener('input', (e) => {
  let kgs = e.target.value
  document.getElementById('lbsOutput').innerHTML = kgs * 2.2046
})

document.getElementById('feetInput').addEventListener('input', (e) => {
  let feet = e.target.value
  document.getElementById('cmsOutput').innerHTML = feet * 30.48
})
document.getElementById('speedInput').addEventListener('input', (e) => {
  let speed = e.target.value
  document.getElementById('msOutput').innerHTML = speed * 0.277778
})
document.getElementById('tempInput').addEventListener('input', (e) => {
  let temp = e.target.value
  document.getElementById('COutput').innerHTML = ((temp - 32) * 5) / 9
})
document.getElementById('hourInput').addEventListener('input', (e) => {
  let hour = e.target.value
  document.getElementById('minOutput').innerHTML = hour * 60
})
