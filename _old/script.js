const header = document.querySelector('.header')
const headerWrapper = document.querySelector('.header__wrapper')

const hamburger = document.querySelector('.header__hamburger-container')
const logo = document.querySelector('.logo')
const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu-item a')

window.addEventListener('scroll', e => {
	console.log(menuItems)
	if(window.scrollY > 330) {
		// headerWrapper.style.height = '80px'
		
		// logo.style.height = '50px'
		// logo.style.fontSize = '4rem'
		menu.style.backgroundColor = '#fff'
		menuItems.forEach(item => item.style.color = '#223e4a')
		// menu.style.width = '0vw'
		// menu.style.height = '0px'
		// menu.style.marginLeft = '-100vw'
		// menu.style.opacity = '0'
		// menu.style.borderTop = '1px solid rgba(34, 62, 74, 0)'

		// hamburger.style.marginLeft = '10px'
		// hamburger.style.opacity = '1'
		// hamburger.style.transition = 'all .5s 1.1s'	
	} 
	else {
		menu.style.backgroundColor = 'transparent'
		menuItems.forEach(item => item.style.color = '#fff')
	// 	headerWrapper.style.height = '30vh'
		
	// 	logo.style.height = '250px'
	// 	logo.style.fontSize = '8rem'

	// 	menu.style.width = '100vw'
	// 	menu.style.height = '40px'
	// 	menu.style.marginLeft = '0'
	// 	menu.style.opacity = '1'
	// 	menu.style.borderTop = '1px solid rgba(34, 62, 74, .15)'

	// 	hamburger.style.marginLeft = '-10px'
	// 	hamburger.style.opacity = '0'
	// 	hamburger.style.transition = 'all .5s'
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
    // card.style.transform = !card.style.transform ? 'rotateY(180deg) translateX(-100%)' : ''

    tabLinks.forEach(link => { link.className = link.className.replace(' active', '') })

    evt.currentTarget.className = evt.currentTarget.className.includes('active') ?
    	evt.currentTarget.className : 
    	`${evt.currentTarget.className} active`
}

function focusInput() {
	document.getElementById('name').focus();
}