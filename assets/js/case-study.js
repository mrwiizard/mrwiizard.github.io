// Click any case study image to view it full screen
document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    var full = document.createElement('img');
    lightbox.appendChild(full);
    document.body.appendChild(lightbox);

    function close() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('figure img').forEach(function (img) {
        img.addEventListener('click', function () {
            full.src = img.src;
            full.alt = img.alt;
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
    });
});
