const toggle = document.querySelector('.toggle-btn')
const menu = document.querySelector('.navbar-menu')
const icons = document.querySelector('.navbar-icons')

toggle.addEventListener('click', () => {
  menu.classList.toggle('active')
  icons.classList.toggle('active')
})