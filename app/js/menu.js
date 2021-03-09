window.addEventListener('DOMContentLoaded', () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            document.body.style.overflow = 'hidden';
            navMenu.style.display = 'none';
            modal.classList.add('container_header-menu');
            closeMenu.style.display = 'block';
            document.querySelector('.nav_header').style.display = 'block';
            document.querySelector('.list_header').style.display = 'block';
            document.querySelector('.social_menu').style.display = 'flex';


        });
        closeMenu.addEventListener('click', () => {
            document.body.style.overflow = '';
            navMenu.style.display = 'block';
            modal.classList.remove('container_header-menu');
            closeMenu.style.display = 'none';
            document.querySelector('.nav_header').style.display = 'none';
            document.querySelector('.list_header').style.display = 'block';
            document.querySelector('.social_menu').style.display = 'none';
        });
    };
    const navMenu = document.querySelector('.icon_burger'),
        blocke = document.querySelector('.container_header'),
        closeMenu = document.querySelector('.icon_close');

    bindModal(navMenu, blocke, closeMenu);
});