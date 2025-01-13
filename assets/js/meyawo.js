// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// header scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.custom-navbar').addClass('scrolled');
    } else {
        $('.custom-navbar').removeClass('scrolled');
    }
});

// Gallery functionality
$(document).ready(function() {
    const galleryImages = document.querySelectorAll('.portfolio-gallary__img');
    
    if (window.innerWidth > 768) {
        if (galleryImages.length > 0) {
            galleryImages.forEach(el => el.addEventListener('click', () => {
                el.classList.toggle('portfolio-gallary__img--active');
            }));
        }
    }
});

// Initialize AOS
window.addEventListener('load', function() {
    AOS.init();
});

// GALLARY-FILTER------------------------------------------------------------------------
