/* Open and close the menu */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
    element.addEventListener("click", function() {
        nav.classList.toggle("show")
    })
}

/* close the menu when clicked */
const elementList = document.querySelectorAll("nav ul li a")

for (const each of elementList) {
    each.addEventListener("click", function() {
        nav.classList.remove("show")
    })
}

/* enable header shadow on scroll */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function() {
    
    if (window.scrollY >= navHeight ) {
        header.classList.add("scroll")

    } else {
        header.classList.remove("scroll")

    }
})

/* testimonials slider */
const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
        }
    }
})

/* scroll reveal properties */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial,
    #contact .text, #contact .links
    `,  
    {interval: 100})
