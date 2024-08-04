/*== toggle icon navbar ==*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


/*== scroll section active link ==*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    /*==scroll section active link ==*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==remove toggle icon and navbar ==*/
    if (menuIcon.classList.contains('fa-xmark') && window.scrollY <= 100) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

/*== scroll reveal ==*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Certifications-container, .Experience-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*== typed js ==*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});




document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    // Toggle navbar when menuIcon is clicked
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });

    // Close navbar when a navlink is clicked (only in responsive mode)
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('fa-xmark');
                navbar.classList.remove('active');
            }
        });
    });

    // Scroll reveal initialization
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .Certifications-container, .Experience-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Typed.js initialization
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
