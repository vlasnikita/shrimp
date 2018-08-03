document.addEventListener("DOMContentLoaded", function(event) { 
    listenVideo();
    setInterval(wrapperBoxShadowResize, 2000)
    listenScroll();
    listenOffersArrow();
});

ymaps.ready(init);
 
        function init () {
            var myMap = new ymaps.Map('map', {
                    center: [55.749750, 37.542581],
                    zoom: 16
                });
        }

///////////////////////////////////////////////////////

const listenVideo = () => {
    const video = document.querySelector('.video');
    const wrapper = document.querySelector('.helloMessage__wrapper');
    const helloMessage = document.querySelector('.helloMessage');

    document.querySelector('.video').addEventListener('mouseover', e => {
        wrapper.style.left = '60%';
        wrapper.style.opacity = '.5';

        helloMessage.style.left = '60%';
        helloMessage.style.opacity = '.5';
    })

    document.querySelector('.video').addEventListener('mouseleave', e => {
        wrapper.style.left = '40%';
        wrapper.style.opacity = '1';

        helloMessage.style.left = '40%';
        helloMessage.style.opacity = '1';
    })
}

function wrapperBoxShadowResize (){
    const wrapper = document.querySelector('.helloMessage__wrapper');
    
    if(this.spreaded){
        this.spreaded = false
        wrapper.style.boxShadow = '#666 -1px -1px 0px 0px';
    } else {
        this.spreaded = true
        wrapper.style.boxShadow = '#666 -1px -1px 20px 0px';
    }
}

const openMenu = () => {
    const menu = document.querySelector('.nav');
    menu.className += ' show';
}

const closeMenu = () => {
    const menu = document.querySelector('.nav');
    menu.className = ' nav';
}

const listenScroll = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const about = document.querySelector('.about');

        if(window.scrollY >= about.scrollHeight / 6 * 5) {
            about.style.opacity = '1';
            header.style.color = '#000';
            header.style.backgroundColor = '#fff';
            header.style.boxShadow = '0 0 20px 1px #ddd';
        } else {
            about.style.opacity = '0';
            header.style.color = '#fff';
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = '0 0 20px 1px transparent';
        }
    })
}

const listenOffersArrow = () => {
    const arrowRight = document.querySelector('.offers__arrow--right');
    const arrowLeft = document.querySelector('.offers__arrow--left');
    const offersBlock = document.querySelector('.offers__block');

    arrowRight.addEventListener('click', () => {
        offersBlock.style.transform = 'translate(-50%, -50%)';
        arrowRight.className = 'offers__arrow';
        arrowLeft.className = 'offers__arrow offers__arrow--left offers__arrow--active';
    });
    arrowLeft.addEventListener('click', () => {
        offersBlock.style.transform = 'translate(0%, -50%)';
        arrowLeft.className = 'offers__arrow offers__arrow--left';
        arrowRight.className = 'offers__arrow offers__arrow--active';
    });

    arrowRight.addEventListener('mouseover', () => {
        arrowRight.style.transform = 'translate(15%, -50%)';
    });
    arrowLeft.addEventListener('mouseover', () => {
        arrowLeft.style.transform = 'translate(-15%, -50%)';
    });

    arrowRight.addEventListener('mouseleave', () => {
        arrowRight.style.transform = 'translate(0%, -50%)';
    });
    arrowLeft.addEventListener('mouseleave', () => {
        arrowLeft.style.transform = 'translate(0%, -50%)';
    });
}