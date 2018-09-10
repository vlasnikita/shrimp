window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

 // PARALLAX
const parallax = document.querySelector('.parallax');
const enableParallax = () => {
    const scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
    parallax.style.top = -scrolltop * 1.25 + 'px';
}
window.addEventListener('scroll', function(){
    requestAnimationFrame(enableParallax)
   }, false)

// Анимация заставки
let currentImg = 0;
const images = parallax.querySelectorAll('img')
setInterval(() => {
    let temp;
    images.forEach((img, i) => {
        if (i === currentImg + 1){
            img.className = 'parallax__visible';
            temp = currentImg + 1;
        }else{
            img.className = '';
        }
    })
    if(!temp){
        images[0].className = 'parallax__visible';
        currentImg = 0;
    } else {
        currentImg = temp;
    }
}, 3500)

// Карточки с услугами
const briefs = document.querySelectorAll('.service__brief');
window.addEventListener('click', function(e){
    briefs.forEach(brief => {
        console.log(0)
        if(brief === e.target || brief.contains(e.target)){
            brief.className = 'service__brief service__brief--active';
        } else {
            brief.className = 'service__brief';
        }
    })
}, false)

// Меню
const openMenu = () => {
    const menu = document.querySelector('.nav');
    menu.className += ' show';
}
const closeMenu = () => {
    const menu = document.querySelector('.nav');
    menu.className = ' nav';
}

// Перевод фокуса в различные места сайта
const focusForm = () => {
    document.querySelector('#name').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    setTimeout(() => {
        document.querySelector('#name').focus();
    }, 500);
};
const focusBlock = (name) => {
    document.querySelector('#' + name).scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
const focusFormFromVideo = () => {
        document.querySelector('#name').focus();
    setTimeout(() => {
        document.querySelector('#name').scrollIntoView({ block: 'start',  behavior: 'smooth' })
    }, 1200);
}

// Карта
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.780290, 37.458947],
            zoom: 16,
            controls: []
        });
}