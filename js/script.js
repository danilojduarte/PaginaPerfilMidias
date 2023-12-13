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