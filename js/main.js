document.addEventListener('DOMContentLoaded', () => {

    const headerDropdown = document.querySelector('.header-bottom__dropdown'),
        headerMenu = document.querySelector('.header-bottom__navigation'),
        modalWindow = document.querySelector('.modal'),
        modalImage = document.querySelector('.modal__img'),
        modalClose = document.querySelector('.modal__close'),
        filterItems = document.querySelectorAll('.potfolio-filter__item'),
        gallaryItems = document.querySelectorAll('.portfolio-gallary__item');

    let skillsCircles = document.querySelectorAll('.skills-cards__circle'),
        expirienceCircles = document.querySelectorAll('.experience-cards__circle'),
        gallaryImages = document.querySelectorAll('.portfolio-gallary__img');


    // HEADER-DROPDOWN------------------------------------------------------------------------

    headerDropdown.addEventListener('click', () => {
        headerMenu.classList.toggle('open');
    });

    // GALARY MODAL-IMAGES------------------------------------------------------------------------

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

    function cutClassName(el) {
        let classNameFull = el.className;
        return classNameFull.substring(classNameFull.indexOf(' ') + 1, classNameFull.length);
    }

    let f = false;
    filterItems.forEach(el => el.addEventListener('click', () => {
        el.style.color = "#E87E04";
        for (let i = 0; i < filterItems.length; i++) {
            if (filterItems[i] == el) continue;
            filterItems[i].style.color = "grey";
        }
        if (el.classList.contains('filter_all')) {
            gallaryItems.forEach(elem => {
                elem.classList.add('active');
            });
            f = true;
        } else {
            gallaryItems.forEach(elem => {
                if (elem.classList.contains(cutClassName(el))) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            });
            f = false;
        }
    }));
    // CANVAS

    function radians(percent) {
        return 360 * percent / 100 * Math.PI / 180;
    }

    skillsCircles.forEach(el => {
        let endAngle = el.id,
            canv = el.children[1],
            ctx = canv.getContext('2d');

        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(canv.height / 2, canv.height / 2, canv.height / 2 - ctx.lineWidth / 2, -Math.PI / 2, Math.PI * 3 / 2, false);
        ctx.strokeStyle = "#ffffffb3";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(canv.height / 2, canv.height / 2, canv.height / 2 - ctx.lineWidth / 2, -Math.PI / 2, radians(endAngle) - Math.PI / 2, false);
        ctx.strokeStyle = "#2c3e50";
        ctx.stroke();
    });

    expirienceCircles.forEach(el => {
        let canv = el.children[1],
            ctx = canv.getContext('2d');

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.arc(canv.height / 2, canv.height / 2, canv.height / 2 - ctx.lineWidth, -Math.PI / 2, Math.PI * 3 / 2, false);
        ctx.stroke();
        ctx.fill();
    });

});