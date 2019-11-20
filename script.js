window.addEventListener('load', () => {
    let swiper = new Swiper('.swiper-container.wrapper', {
        speed: 700,
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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

    swiper.on('transitionEnd', () => {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide-active');

        slides.forEach(one => one.classList.remove('active'))
        activeSlide.classList.add('active');
    });

    let indicator = new WheelIndicator({
        elem: document.querySelector('.swiper-container.wrapper'),
        callback: function (e) {
            if (e.direction == 'up') swiper.slidePrev();
            else swiper.slideNext();
        }
    });

    const modalToggler = (buttonClass, modalClass) => {
        let btn = document.querySelectorAll(buttonClass),
            modal = document.querySelector(modalClass),
            closetBtn = document.querySelector(`${modalClass} .close-btn`),
            modalBackground = document.querySelector(`${modalClass} .modal-background`);

        btn.forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        [closetBtn, modalBackground].forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        });
    }

    modalToggler('.modal-open-btn', '.register-modal');
});

const fontAwesomeFreeObserver = new FontFaceObserver('Font Awesome 5 Free');
const gilroyObserver = new FontFaceObserver('Gilroy');

Promise.all([
    fontAwesomeFreeObserver.load(),
    gilroyObserver.load()
]).then(() => {
    document.querySelector('html').classList.add('fonts-loaded');
});