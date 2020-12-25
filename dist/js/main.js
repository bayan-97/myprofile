//select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
// state intital state of menu '

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
	if (showMenu === false) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');

		console.log('item', navItems);
		navItems.forEach((item) => {
			item.classList.add('show');
		});

		menuBranding.classList.add('show');
		//state menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');

		navItems.forEach((item) => {
			item.classList.remove('show');
		});

		menuBranding.classList.remove('show');
		//state menu state
		showMenu = false;
	}
}
