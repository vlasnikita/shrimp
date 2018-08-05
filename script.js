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

const button1 = document.querySelector('.color__button1');
const button2 = document.querySelector('.color__button2');
const button3 = document.querySelector('.color__button3');

button1.addEventListener('click', e => {

    const colors = [
        ...document.querySelectorAll('.colorPanel-blue-color'),
        ...document.querySelectorAll('.colorPanel-orange-color')
    ]

    const backgrounds = [
        ...document.querySelectorAll('.colorPanel-blue-backgroundColor'),
        ...document.querySelectorAll('.colorPanel-orange-backgroundColor')
    ]

    const borders = [
        ...document.querySelectorAll('.colorPanel-blue-border'),
        ...document.querySelectorAll('.colorPanel-orange-border')
    ]

    const shadows = [
        ...document.querySelectorAll('.colorPanel-blue-boxShadow'),
        ...document.querySelectorAll('.colorPanel-orange-boxShadow')
    ]

    const shadowsInfo = [
        ...document.querySelectorAll('.colorPanel-blue-boxShadowInfo'),
        ...document.querySelectorAll('.colorPanel-orange-boxShadowInfo')
    ]

    const specials = [
        ...document.querySelectorAll('.colorPanel-blue-backgroundColorSpecial'),
        ...document.querySelectorAll('.colorPanel-orange-backgroundColorSpecial')
    ]

    const afters = [
        ...document.querySelectorAll('.colorPanel-blue-backgroundColorAfter'),
        ...document.querySelectorAll('.colorPanel-orange-backgroundColorAfter')
    ]

    colors.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-color', 'colorPanel-red-color')
        el.classList.value = el.classList.value.replace('colorPanel-orange-color', 'colorPanel-red-color')
    })

    backgrounds.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-backgroundColor', 'colorPanel-red-backgroundColor')
        el.classList.value = el.classList.value.replace('colorPanel-orange-backgroundColor', 'colorPanel-red-backgroundColor')
    })

    borders.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-border', 'colorPanel-red-border')
        el.classList.value = el.classList.value.replace('colorPanel-orange-border', 'colorPanel-red-border')
    })

    shadows.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-shadows', 'colorPanel-red-shadows')
        el.classList.value = el.classList.value.replace('colorPanel-orange-shadows', 'colorPanel-red-shadows')
    })

    shadowsInfo.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-boxShadowInfo', 'colorPanel-red-boxShadowInfo')
        el.classList.value = el.classList.value.replace('colorPanel-orange-boxShadowInfo', 'colorPanel-red-boxShadowInfo')
    })

    specials.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-backgroundColorSpecial', 'colorPanel-red-backgroundColorSpecial')
        el.classList.value = el.classList.value.replace('colorPanel-orange-backgroundColorSpecial', 'colorPanel-red-backgroundColorSpecial')
    })

    afters.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-backgroundColorAfter', 'colorPanel-red-backgroundColorAfter')
        el.classList.value = el.classList.value.replace('colorPanel-orange-backgroundColorAfter', 'colorPanel-red-backgroundColorAfter')
    })
})

button2.addEventListener('click', e => {
    const colors = [
        ...document.querySelectorAll('.colorPanel-red-color'),
        ...document.querySelectorAll('.colorPanel-orange-color')
    ]

    const backgrounds = [
        ...document.querySelectorAll('.colorPanel-red-backgroundColor'),
        ...document.querySelectorAll('.colorPanel-orange-backgroundColor')
    ]

    const borders = [
        ...document.querySelectorAll('.colorPanel-red-border'),
        ...document.querySelectorAll('.colorPanel-orange-border')
    ]

    const shadows = [
        ...document.querySelectorAll('.colorPanel-red-boxShadow'),
        ...document.querySelectorAll('.colorPanel-orange-boxShadow')
    ]

    const shadowsInfo = [
        ...document.querySelectorAll('.colorPanel-red-boxShadowInfo'),
        ...document.querySelectorAll('.colorPanel-orange-boxShadowInfo')
    ]

    const specials = [
        ...document.querySelectorAll('.colorPanel-red-backgroundColorSpecial'),
        ...document.querySelectorAll('.colorPanel-orange-backgroundColorSpecial')
    ]

    const afters = [
        ...document.querySelectorAll('.colorPanel-red-backgroundColorAfter'),
        ...document.querySelectorAll('.colorPanel-orange-backgroundColorAfter')
    ]

    colors.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-color', 'colorPanel-blue-color')
        el.classList.value = el.classList.value.replace('colorPanel-orange-color', 'colorPanel-blue-color')
    })

    backgrounds.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-backgroundColor', 'colorPanel-blue-backgroundColor')
        el.classList.value = el.classList.value.replace('colorPanel-orange-backgroundColor', 'colorPanel-blue-backgroundColor')
    })

    borders.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-border', 'colorPanel-blue-border')
        el.classList.value = el.classList.value.replace('colorPanel-orange-border', 'colorPanel-blue-border')
    })

    shadows.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-boxShadow', 'colorPanel-blue-boxShadow')
        el.classList.value = el.classList.value.replace('colorPanel-orange-boxShadow', 'colorPanel-blue-boxShadow')
    })

    shadowsInfo.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-boxShadowInfo', 'colorPanel-blue-boxShadowInfo')
        el.classList.value = el.classList.value.replace('colorPanel-orange-boxShadowInfo', 'colorPanel-blue-boxShadowInfo')
    })

    specials.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-backgroundColorSpecial', 'colorPanel-blue-backgroundColorSpecial')
        el.classList.value = el.classList.value.replace('colorPanel-orange-backgroundColorSpecial', 'colorPanel-blue-backgroundColorSpecial')
    })

    afters.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-red-backgroundColorAfter', 'colorPanel-blue-backgroundColorAfter')
        el.classList.value = el.classList.value.replace('colorPanel-orange-backgroundColorAfter', 'colorPanel-blue-backgroundColorAfter')
    })
})

button3.addEventListener('click', e => {
    const colors = [
        ...document.querySelectorAll('.colorPanel-blue-color'),
        ...document.querySelectorAll('.colorPanel-red-color')
    ]

    const backgrounds = [
        ...document.querySelectorAll('.colorPanel-blue-backgroundColor'),
        ...document.querySelectorAll('.colorPanel-red-backgroundColor')
    ]

    const borders = [
        ...document.querySelectorAll('.colorPanel-blue-border'),
        ...document.querySelectorAll('.colorPanel-red-border')
    ]

    const shadows = [
        ...document.querySelectorAll('.colorPanel-blue-boxShadow'),
        ...document.querySelectorAll('.colorPanel-red-boxShadow')
    ]

    const shadowsInfo = [
        ...document.querySelectorAll('.colorPanel-blue-boxShadowInfo'),
        ...document.querySelectorAll('.colorPanel-red-boxShadowInfo')
    ]

    const specials = [
        ...document.querySelectorAll('.colorPanel-blue-backgroundColorSpecial'),
        ...document.querySelectorAll('.colorPanel-red-backgroundColorSpecial')
    ]

    const afters = [
        ...document.querySelectorAll('.colorPanel-blue-backgroundColorAfter'),
        ...document.querySelectorAll('.colorPanel-red-backgroundColorAfter')
    ]

    colors.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-color', 'colorPanel-orange-color')
        el.classList.value = el.classList.value.replace('colorPanel-red-color', 'colorPanel-orange-color')
    })

    backgrounds.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-backgroundColor', 'colorPanel-orange-backgroundColor')
        el.classList.value = el.classList.value.replace('colorPanel-red-backgroundColor', 'colorPanel-orange-backgroundColor')
    })

    borders.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-border', 'colorPanel-orange-border')
        el.classList.value = el.classList.value.replace('colorPanel-red-border', 'colorPanel-orange-border')
    })

    shadows.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-boxShadow', 'colorPanel-orange-boxShadow')
        el.classList.value = el.classList.value.replace('colorPanel-red-boxShadow', 'colorPanel-orange-boxShadow')
    })

    shadowsInfo.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-boxShadowInfo', 'colorPanel-orange-boxShadowInfo')
        el.classList.value = el.classList.value.replace('colorPanel-red-boxShadowInfo', 'colorPanel-orange-boxShadowInfo')
    })

    specials.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-backgroundColorSpecial', 'colorPanel-orange-backgroundColorSpecial')
        el.classList.value = el.classList.value.replace('colorPanel-red-backgroundColorSpecial', 'colorPanel-orange-backgroundColorSpecial')
    })

    afters.forEach(el => {
        el.classList.value = el.classList.value.replace('colorPanel-blue-backgroundColorAfter', 'colorPanel-orange-backgroundColorAfter')
        el.classList.value = el.classList.value.replace('colorPanel-red-backgroundColorAfter', 'colorPanel-orange-backgroundColorAfter')
    })
})
