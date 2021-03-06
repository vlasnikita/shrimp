import Choreographer from 'choreographer-js';
import '../vendor/morph';

/*
*
* Анимирование иконки Марио и пунктов меню
*
* */

let marioTimer;
let previousScrollPosition = 0;

const marioSvg = document.querySelector('#mario__svg');
const refresh = () => { TweenLite.to(".mario__base", .5, {morphSVG:".mario__idle"}) };

const body = document.body;
const html = document.documentElement;
const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
const realHeight = height - viewportToPixels('100vh');

export const enableMarioMorphing = () => {
    marioSvg.style.transform = previousScrollPosition - window.scrollY > 0 ? 'scale(-1,1)' : "scale(1,1)";
    previousScrollPosition = window.scrollY;
    TweenLite.to(".mario__base", .5, {morphSVG:".mario__run"});
    clearTimeout(marioTimer);
    setTimeout(refresh, 200);

};

export let choreographer = new Choreographer({
    animations: [
        {
            range: [0, 10],
            selector: '.mario',
            type: 'scale',
            style: 'transform:translateX',
            from: -9,
            to: 0,
            unit: 'vw'
        },
        {
            range: [30, 100],
            selector: '.mario',
            type: 'scale',
            style: 'bottom',
            from: 20,
            to: 0,
            unit: '%'
        },
        {
            range: [0, realHeight],
            selector: '.mario',
            type: 'scale',
            style: 'left',
            from: 10,
            to: 90,
            unit: '%'
        },
        {
            range: [0, realHeight * 0.18 - 1],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.18, realHeight * 0.2],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -20,
            unit: 'px'
        },
        {
            range: [realHeight * 0.2 + 1, realHeight * 0.22],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: -20,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.22 + 1, realHeight * 0.43 - 1],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.43, realHeight * 0.45],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -20,
            unit: 'px'
        },
        {
            range: [realHeight * 0.45 + 1, realHeight * 0.47],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: -20,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.47 + 1, realHeight * 0.68 - 1],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.68, realHeight * 0.7],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -20,
            unit: 'px'
        },
        {
            range: [realHeight * 0.7 + 1, realHeight * 0.72],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: -20,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.72 + 1, realHeight * 0.93 - 1],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.93, realHeight * 0.95],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -20,
            unit: 'px'
        },
        {
            range: [realHeight * 0.95 + 1, realHeight],
            selector: '#mario__svg',
            type: 'scale',
            style: 'transform:translateY',
            from: -20,
            to: 0,
            unit: 'px'
        },
        {
            range: [0, realHeight * 0.18 - 1],
            selector: '#header__about',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.18, realHeight * 0.2],
            selector: '#header__about',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -7,
            unit: 'px'
        },
        {
            range: [realHeight * 0.2 + 1, realHeight * 0.22],
            selector: '#header__about',
            type: 'scale',
            style: 'transform:translateY',
            from: -7,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.22 + 1, realHeight],
            selector: '#header__about',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [0, realHeight * 0.43 - 1],
            selector: '#header__advertisers',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.43, realHeight * 0.45],
            selector: '#header__advertisers',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -7,
            unit: 'px'
        },
        {
            range: [realHeight * 0.45 + 1, realHeight * 0.47],
            selector: '#header__advertisers',
            type: 'scale',
            style: 'transform:translateY',
            from: -7,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.47 + 1, realHeight],
            selector: '#header__advertisers',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [0, realHeight * 0.68 - 1],
            selector: '#header__streamers',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.68, realHeight * 0.7],
            selector: '#header__streamers',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -7,
            unit: 'px'
        },
        {
            range: [realHeight * 0.7 + 1, realHeight * 0.72],
            selector: '#header__streamers',
            type: 'scale',
            style: 'transform:translateY',
            from: -7,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.72 + 1, realHeight],
            selector: '#header__streamers',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },

        {
            range: [0, realHeight * 0.93 - 1],
            selector: '#header__contacts',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: 0,
            unit: 'px'
        },
        {
            range: [realHeight * 0.93, realHeight * 0.95],
            selector: '#header__contacts',
            type: 'scale',
            style: 'transform:translateY',
            from: 0,
            to: -7,
            unit: 'px'
        },
        {
            range: [realHeight * 0.95 + 1, realHeight],
            selector: '#header__contacts',
            type: 'scale',
            style: 'transform:translateY',
            from: -7,
            to: 0,
            unit: 'px'
        },
    ]
});

function viewportToPixels(value) {
    var parts = value.match(/([0-9\.]+)(vh|vw)/)
    var q = Number(parts[1])
    var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
    return side * (q/100)
}
