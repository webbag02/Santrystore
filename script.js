document.addEventListener('DOMContentLoaded', () => {

    /* ZOOM GAMBAR */
    const modal = document.getElementById('zoomModal');
    const modalImg = document.getElementById('zoomImg');

    document.addEventListener('click', e => {
        if (e.target.matches('.image-box img')) {
            modal.style.display = 'flex';
            modalImg.src = e.target.src;
        }
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    /* TOGGLE MENU */
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

});

const slider = document.querySelector('.slider-wrapper');

let scrollAmount = 0;

setInterval(() => {
    scrollAmount += slider.clientWidth * 0.8;

    if (scrollAmount >= slider.scrollWidth) {
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 3500);
