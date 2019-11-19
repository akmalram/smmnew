window.addEventListener('load', () => {
    let swiper = new Swiper('.swiper-container.wrapper', {
        speed: 700,
        direction: 'vertical',
        mousewheel: {
            sensitivity: 3,
        },
        effect: 'voerflow',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: {
            onlyInViewport: true
        }
    });
});

const fontAwesomeFreeObserver = new FontFaceObserver('Font Awesome 5 Free');
const gilroyObserver = new FontFaceObserver('Gilroy');

Promise.all([
    fontAwesomeFreeObserver.load(),
    gilroyObserver.load()
]).then(() => {
    document.querySelector('html').classList.add('fonts-loaded');
});