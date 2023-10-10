let section =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');
console.log("hello world");
window.onscroll =() => {
 section.forEach(sec => {
    let top =window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');

        });
    };
 });


 let header = document.querySelector('header');

header.classList.toggle('sticky' , window.scrollY > 100);

};

/*===================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'top'});
