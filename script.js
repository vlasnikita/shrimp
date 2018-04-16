const header = document.querySelector('.header')
const headerWrapper = document.querySelector('.header__wrapper')

const hamburger = document.querySelector('.header__hamburger-container')
const logo = document.querySelector('.header__logo')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__list-item')

window.addEventListener('scroll', e => {
	if(window.scrollY > headerWrapper.offsetHeight) {
		headerWrapper.style.height = '80px'
		
		logo.style.height = '100px'
		logo.style.fontSize = '4rem'

		menu.style.width = '0vw'
		menu.style.height = '0px'
		menu.style.marginLeft = '-100vw'
		menu.style.opacity = '0'

		hamburger.style.marginLeft = '10px'
		hamburger.style.opacity = '1'
		hamburger.style.transition = 'all .5s 1.1s'	
	} else if(window.scrollY <= headerWrapper.offsetHeight) {
		headerWrapper.style.height = '25vh'
		
		logo.style.height = '200px'
		logo.style.fontSize = '8rem'

		menu.style.width = '100vw'
		menu.style.height = '40px'
		menu.style.marginLeft = '0'
		menu.style.opacity = '1'

		hamburger.style.marginLeft = '-10px'
		hamburger.style.opacity = '0'
		hamburger.style.transition = 'all .5s'
	}
})

function openTab(evt, tabName) {
    const tabs = document.querySelectorAll('.tab__content');
    const tabLinks = document.querySelectorAll('.tab__link');
    const card = document.querySelector('.offers__card-content')

    // tabs.forEach(tab => { 
    // 	tab.className = tab.className.replace(' active', '') 
    // 	if(tab.classList.contains(tabName)) tab.className = `${tab.className} active`
    // })

    card.style.transform = !card.style.transform ? 'rotateY(180deg)' : ''

    tabLinks.forEach(link => { link.className = link.className.replace(' active', '') })

    evt.currentTarget.className = evt.currentTarget.className.includes('active') ?
    	evt.currentTarget.className : 
    	`${evt.currentTarget.className} active`
}