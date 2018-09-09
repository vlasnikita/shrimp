let timeoutEnded = false

const openMenu = () => {
    const menu = document.querySelector('.nav');
    menu.className += ' show';
}

const closeMenu = () => {
    const menu = document.querySelector('.nav');
    menu.className = ' nav';
}

const listenScroll = () => {
    window.addEventListener('scroll', (e) => {
        const main = document.querySelector('.main');

        if(window.scrollY > 0) {
            if(!timeoutEnded){
                window.scroll(0,1)
                main.style.transform = 'translateY(-100%)'
                setTimeout(() => {
                    timeoutEnded = true
                }, 850)
            }
        } else {
            timeoutEnded = false
            main.style.transform = 'translateY(-0%)'
        }
    })
}

const focusForm = () => {
    document.querySelector('#name').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    setTimeout(() => {
        document.querySelector('#name').focus();
    }, 500);
};

const focusFormFromVideo = () => {
        document.querySelector('#name').focus();
    setTimeout(() => {
        document.querySelector('#name').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    }, 1200);
}

document.addEventListener("DOMContentLoaded", function(event) {
    listenScroll();
});

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.780290, 37.458947],
            zoom: 16,
            controls: []
        });
}