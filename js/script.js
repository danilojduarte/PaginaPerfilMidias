// Close & Open menu
const navMenu = document.getElementById('nav__menu'),
    toggleMenu = document.getElementById('nav__toggle'),
    closeMenu = document.getElementById('nav__close')

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

// Scroll Sections active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionsHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionsHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active')
        }
    })
}