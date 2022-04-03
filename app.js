//  On scroll function =====================================================
const navMenu = () => {
    let navBar = document.querySelector('.navbar-sticky')
    let scrollTopbutton = document.querySelector('#scrollUp')

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add('navbar-sticky-moved-up');
        } else {
            navBar.classList.remove('navbar-sticky-moved-up');
        }

        // Apply transition
        if (scroll >= 250) {
            navBar.classList.add('navbar-sticky-transitioned');
            // scrollTopbutton.classList.add('scrollActive')
        } else {
            navBar.classList.remove('navbar-sticky-transitioned');
            // scrollTopbutton.classList.remove('scrollActive')
        }

        // Sticky on
        if (scroll >= 500) {
            navBar.classList.add('navbar-sticky-on');
        } else {
            navBar.classList.remove('navbar-sticky-on');

        }
    }
}
navMenu()


// counter design ========================================================
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter('count1', 0, 10, 2000);
    counter('count2', 100, 20, 2500);
    counter('count3', 0, 30, 3000);
    counter('count4', 0, 10, 2500);
});

// APP-SCREEN ===========================================================
var swiper = new Swiper('.swiper-container.app-screen', {
    effect: 'coverflow',
    loop: true,
    autoplaySpeed: 3000,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    paginationClickable: true,
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// wow js
new WOW().init();



// Data aos
 /*AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});*/