document.addEventListener("DOMContentLoaded", function(event) { 
    listenVideo();

    setInterval(wrapperBoxShadowResize, 2000)
});

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