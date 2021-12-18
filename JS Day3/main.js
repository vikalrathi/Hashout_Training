//console.log(window)
//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container'));

//Select Multiple Elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const nodeItems = document.querySelectorAll('.item');
// const classItems = document.getElementsByClassName('item');
// nodeItems.forEach(item => console.log(item));
// classItems.forEach(item => console.log(item));
// for(itm of classItems){
//     console.log(itm);
// }

//DOM Manipulation
// const ul = document.querySelector('.items');

//ul.remove();

//Event Listener
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.backgroundColor = '#ccc';
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

const validateEmail = (email) => {
  var emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.match(emailFormat)) {
    return false
  } else {
    return true
  }
}
function validatePassword(password) {
  var passw = /^[0-9a-zA-Z]+$/
  if (password.match(passw)) {
    return false
  } else {
    return true
  }
}

function onSubmit(e) {
  e.preventDefault()
  if (
    nameInput.value === '' ||
    emailInput.value === '' ||
    passwordInput.value === ''
  ) {
    msg.classList.add('error')
    msg.innerHTML = 'No field should be blank'
    setTimeout(() => msg.remove(), 3000)
  }
  if (nameInput.value.length < 6) {
    msg.classList.add('error')
    msg.innerHTML = 'Name should be at least 6 characters.'
    setTimeout(() => msg.remove(), 3000)
  }
  if (validateEmail(emailInput.value)) {
    msg.classList.add('error')
    msg.innerHTML = 'Please provide the valid email address.'
    setTimeout(() => msg.remove(), 3000)
  }
  if (validatePassword(passwordInput.value)) {
    msg.classList.add('error')
    msg.innerHTML = 'Password should be a combination of alphabets and numbers.'
    setTimeout(() => msg.remove(), 3000)
  } else {
    const li = document.createElement('li')
    li.appendChild(
      document.createTextNode(
        'username :: ' +
          nameInput.value +
          ' Email ::: ' +
          emailInput.value +
          ' Password ::: ' +
          passwordInput.value,
      ),
    )
    userList.appendChild(li)
    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''
  }
}
