const change = document.querySelector('.change')
const menu = document.querySelector('.menu')

change.addEventListener('click', () => {
    change.classList.toggle('rotate')
    menu.classList.toggle('view')
})