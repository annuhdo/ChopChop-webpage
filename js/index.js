let opened = false;
const mobileBurger = document.querySelector("#mobile-burger");
const hamburger = document.querySelector("#hamburger");
const hamburgerOpened = document.querySelector("#hamburger-opened");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

console.log(mobileMenu);

mobileBurger.addEventListener("click", showMenu);

function showMenu(e) {
	opened = !opened
	
	if (opened) {
		hamburgerOpened.style.display = "flex";
		hamburger.style.display = "none";
		mobileMenu.style.margin = "0";
		body.style.overflow = "hidden";
	}
	else {
		hamburgerOpened.style.display = "none";
		hamburger.style.display = "flex";
		mobileMenu.style.margin = "-100% 0 0 0";
		body.style.overflow = "scroll";
		body.style.overflowX = "hidden";
	}
	
}