window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function openBlocks(trigerSelect, closeSelect, windowSelect) {
        const triger = document.querySelector(trigerSelect),
            close = document.querySelector(closeSelect),
            window = document.querySelector(windowSelect),
            windowClass = window.getAttribute('class');

        triger.addEventListener('click', (event) => {
            event.preventDefault();
            window.classList.toggle(windowClass + '_open');
        });

        close.addEventListener('click', () => {
            window.classList.toggle(windowClass + '_open');
        });
    }

    openBlocks('.button_rooms', '.icon_form', '.body__filter');
});
