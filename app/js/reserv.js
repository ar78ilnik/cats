window.addEventListener('DOMContentLoaded', () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    };
    const cardBtn = document.querySelector('.button_card'),
        modalReserv = document.querySelector('.popup_reserv'),
        modalClose = document.querySelector('.container_reserv .popup__close_reserv');

    bindModal(cardBtn, modalReserv, modalClose);
});