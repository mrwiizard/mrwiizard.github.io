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

if (document.body.clientWidth > 768) {
    gallaryImages.forEach(el => el.addEventListener('click', () => {
        modalWindow.style.display = "flex";
        modalImage.src = el.src;
    }));

    modalClose.addEventListener('click', () => {
        modalWindow.style.display = "none";
    });
}

// GALLARY-FILTER------------------------------------------------------------------------
