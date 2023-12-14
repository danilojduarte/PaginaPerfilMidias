// Close & Open menu
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// Open Menu
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// Close Menu
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// Remove Menu
const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))