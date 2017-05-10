let opened = false;
const mobileBurger = document.querySelector("#mobile-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileTop = document.querySelector("#mobile-burger .mobile-burger .top");
const mobileBtm = document.querySelector("#mobile-burger .mobile-burger .bottom");
const body = document.querySelector("body");


mobileBurger.addEventListener("click", showMenu);

function showMenu(e) {
	e.preventDefault();
	opened = !opened;
	
	if (opened) {
		mobileTop.className += " opened";
		mobileBtm.className += " opened";
		mobileMenu.style.margin = "0";
		body.style.overflow = "hidden";
	}
	else {
		mobileTop.className = "top";
		mobileBtm.className = "bottom";
		mobileMenu.style.margin = "-460px 0 0 0";
		body.style.overflow = "scroll";
		body.style.overflowX = "hidden";
	}
	
}