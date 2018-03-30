const header = document.querySelector('.header__wrapper')
const headerInitialHeight = header.offsetHeight

const menu = document.querySelector('.menu')
const menuItems = document.querySelectorAll('.menu__list-item')

window.addEventListener('scroll', e => {

	if(window.scrollY < header.offsetHeight) {
		header.style.height = 100 - window.scrollY / 100 * headerInitialHeight + 'px'
		// menu.style.width = 100 - window.scrollY / headerHeight * 100 + '%' 
		
		// menuItems[0].style.opacity = 1 - window.scrollY / headerHeight
		// menuItems[0].style.display = +menuItems[0].style.opacity - 0.2 < 0 ? 'none' : 'inline'

	} else {

	}
})