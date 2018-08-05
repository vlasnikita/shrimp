let timeoutEnded = false

document.addEventListener("DOMContentLoaded", function(event) {
    listenScroll();
});

ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map('map', {
                    center: [55.749750, 37.542581],
                    zoom: 16
                });
        }

///////////////////////////////////////////////////////

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

// Тестируем цвета
const button1 = document.querySelector('.color__button1');
const button2 = document.querySelector('.color__button2');
const button3 = document.querySelector('.color__button3');

//colors:
const navItem = document.querySelector('.nav__item');
const header = document.querySelector('.header');
const headerEmail = document.querySelector('.header__email');
const button = document.querySelector('.button');
const hellloMessageTitle = document.querySelector('.helloMessage__title');
const hellloMessageText = document.querySelector('.helloMessage__text');
const cardTitle = document.querySelector('.card__title');
const cardText = document.querySelector('.card__text');
const cardTextAdvertisers = document.querySelector('.card__text--advertisers');
const cardTextStreamers = document.querySelector('.card__text--streamers');
const backgroundTitleAdvertisers = document.querySelector('.background__title--advertisers');
const backgroundTitleStreamers = document.querySelector('.background__title--streamers');
const cardAside = document.querySelector('.card__aside');
const cardItem = document.querySelector('.card__item');
const backgroundTitle = document.querySelector('.background__title');
const contactsContact = document.querySelector('.contacts__contact');
const contactsInput = document.querySelector('.contacts__input');

//background-colors:
const headerMenu = document.querySelector('.header__menu span');
const main = document.querySelector('.main');
const about = document.querySelector('.about');
const contactsBlock = document.querySelector('.contacts__block');
const contactsBlockForm = document.querySelector('.contacts__block--form');
const advertisers = document.querySelector('.advertisers');
const streamers = document.querySelector('.streamers');

//Яркие цвета для элементов
const nav = document.querySelector('.nav');
const buttonCta = document.querySelector('.button--cta');
const buttonInfo = document.querySelector('.button--info');
const buttonSubmit = document.querySelector('.button--submit');


button1.addEventListener('click', e => {
    //текст
    navItem.style.color = '#000';
    header.style.color = '#000';
    headerEmail.style.color = '#000';
    button.style.color = '#000';
    hellloMessageTitle.style.color = '#000';
    hellloMessageText.style.color = '#000';
    cardTitle.style.color = '#000';
    cardText.style.color = '#000';
    cardTextAdvertisers.style.color = '#000';
    cardTextStreamers.style.color = '#000';
    backgroundTitleAdvertisers.style.color = '#000';
    backgroundTitleStreamers.style.color = '#000';
    cardAside.style.color = '#000';
    cardItem.style.color = '#000';
    backgroundTitle.style.color = '#000';
    contactsContact.style.color = '#000';
    contactsInput.style.color = '#000';

    //фон
    header.style.backgroundColor = '#fff';
    headerMenu.style.backgroundColor = '#fff';
    main.style.backgroundColor = '#fff';
    about.style.backgroundColor = '#fff'
    contactsBlock.style.backgroundColor = '#fff';
    contactsBlockForm.style.backgroundColor = '#fff';
    advertisers.style.backgroundColor = '#fff';
    streamers.style.backgroundColor = '#fff';

    //специальные элементы
    nav.style.backgroundColor = '#b91313';
    buttonCta.style.backgroundColor = '#b91313';
    buttonCta.style.color = '#000';
    buttonInfo.style.border = '2px solid #b91313;';
    buttonInfo.style.backgroundColor = '#b91313;';
    buttonInfo.style.color = '#000;';
    buttonSubmit.style.backgroundColor = '#b91313';
    buttonSubmit.style.color = '#000';

    console.log("BUTTON-1 was clicked");
})

button2.addEventListener('click', e => {
    //текст
    navItem.style.color = '#000';
    header.style.color = '#000';
    headerEmail.style.color = '#000';
    button.style.color = '#000';
    hellloMessageTitle.style.color = '#000';
    hellloMessageText.style.color = '#000';
    cardTitle.style.color = '#000';
    cardText.style.color = '#000';
    cardTextAdvertisers.style.color = '#000';
    cardTextStreamers.style.color = '#000';
    backgroundTitleAdvertisers.style.color = '#000';
    backgroundTitleStreamers.style.color = '#000';
    cardAside.style.color = '#000';
    cardItem.style.color = '#000';
    backgroundTitle.style.color = '#000';
    contactsContact.style.color = '#000';
    contactsInput.style.color = '#000';

    //фон
    header.style.backgroundColor = '#fff';
    headerMenu.style.backgroundColor = '#fff';
    main.style.backgroundColor = '#fff';
    about.style.backgroundColor = '#fff'
    contactsBlock.style.backgroundColor = '#fff';
    contactsBlockForm.style.backgroundColor = '#fff';
    advertisers.style.backgroundColor = '#fff';
    streamers.style.backgroundColor = '#fff';

    //специальные элементы
    nav.style.backgroundColor = '#1d1d7f';
    buttonCta.style.backgroundColor = '#1d1d7f';
    buttonInfo.style.border = '2px solid #1d1d7f';
    buttonInfo.style.backgroundColor = '#1d1d7f';
    buttonSubmit.style.backgroundColor = '#1d1d7f';

    console.log("BUTTON-2 was clicked");
})

button3.addEventListener('click', e => {
    //текст
    navItem.style.color = '#fff';
    header.style.color = '#fff';
    headerEmail.style.color = '#fff';
    button.style.color = '#fff';
    hellloMessageTitle.style.color = '#fff';
    hellloMessageText.style.color = '#fff';
    cardTitle.style.color = '#fff';
    cardText.style.color = '#fff';
    cardTextAdvertisers.style.color = '#fff';
    cardTextStreamers.style.color = '#fff';
    backgroundTitleAdvertisers.style.color = '#fff';
    backgroundTitleStreamers.style.color = '#fff';
    cardAside.style.color = '#fff';
    cardItem.style.color = '#fff';
    backgroundTitle.style.color = '#fff';
    contactsContact.style.color = '#fff';
    contactsInput.style.color = '#fff';

    //фон
    header.style.backgroundColor = '#303030';
    headerMenu.style.backgroundColor = '#303030';
    main.style.backgroundColor = '#303030';
    about.style.backgroundColor = '#303030'
    contactsBlock.style.backgroundColor = '#303030';
    contactsBlockForm.style.backgroundColor = '#303030';
    advertisers.style.backgroundColor = '#303030';
    streamers.style.backgroundColor = '#303030';

    //специальные элементы
    nav.style.backgroundColor = '#e08342';
    buttonCta.style.backgroundColor = '#e08342';
    buttonInfo.style.border = '2px solid #e08342';
    buttonInfo.style.backgroundColor = '#e08342';
    buttonSubmit.style.backgroundColor = '#e08342';

    console.log("BUTTON-3 was clicked");
})

//TO DO addEventListener on ".card__aside:before"(color: #b91313;)

// 1)
// фон #fff
// текст #000
// яркий цвет для элементов #b91313

// 2)
// фон #fff
// текст #000
// яркий цвет для элементов #1d1d7f

// 3)
// фон #303030
// текст #fff
// яркий цвет для элементов #e08342