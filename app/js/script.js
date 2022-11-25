window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function sliders(slides, dir) {
        let slideIndex = 1;
        const items = document.querySelectorAll(slides);

        items.forEach(item => {
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';

        function showSlides(n) {
            if (n > items.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = items.length;
            }

            items.forEach(item => {
                item.style.display = 'none';
            });

            items[slideIndex - 1].style.display = 'block';
        }

        function changeSlide(n) {
            showSlides(slideIndex += n);
        }

        setInterval(function () {
            changeSlide(1);
        }, 10000);
    }

    function openBlocks(trigerSelect, closeSelect, windowSelect) {
        const triger = document.querySelectorAll(trigerSelect),
            close = document.querySelectorAll(closeSelect),
            window = document.querySelectorAll(windowSelect),
            windowClass = window.getAttribute('class');

        triger.forEach(item => {
            item.addEventListener('click', () => {
                window.classList.toggle(windowClass + '_open');
            });
        });
    }

    sliders('.slider__item');
    openBlocks('.button_rooms', '.icon_form', '.filter');
});
