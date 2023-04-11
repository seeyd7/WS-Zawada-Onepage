window.onscroll = () => { 
    const myNav = document.querySelector("nav");
    let squash = document.querySelector(".offer-slider-squash");
    let badminton = document.querySelector(".offer-slider-badminton");
    let bouldering = document.querySelector(".offer-slider-bouldering");
    let medical = document.querySelector(".offer-slider-medical");
    let kids = document.querySelector(".offer-slider-kids");
    let table = document.querySelector(".offer-slider-table");

    if (window.scrollY > 50) {
        myNav.classList.add("navbar-scrolled");
        myNav.classList.remove("navbar-top");
    } else {
        myNav.classList.remove("navbar-scrolled");
        myNav.classList.add("navbar-top");
        squash.classList.remove("active2");
        badminton.classList.remove("active2");
        bouldering.classList.remove("active2");
        medical.classList.remove("active2");
        kids.classList.remove("active2");
        table.classList.remove("active2");
    }
};

window.onload = () => { 
    const myNav = document.querySelector("nav");

    if (window.scrollY > 50) {
        myNav.classList.add("navbar-scrolled");
        myNav.classList.remove("navbar-top");
    } else {
        myNav.classList.remove("navbar-scrolled");
        myNav.classList.add("navbar-top");
    }
};

const menu = document.querySelector("#menu");

const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");

const navbar = document.querySelector("nav");


menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});

function disableMenu() {
    menuToggler.classList.remove("active");
    navMenu.classList.remove("active");
}

addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if(scroll > menu.clientHeight) {
    go2Top.style.opacity = 1;
    go2Top.style.lineHeight = "40px";
		go2Top.style.cursor = "pointer";
	} else {
		go2Top.style.opacity = 0;
		go2Top.style.cursor = "default";
	}
})

go2Top.addEventListener("click", () => {
	if(go2Top.style.opacity != 0) window.scrollTo(0, 0);
})

const navBar = document.querySelector(".navbar-top");
const topBar = document.querySelector(".top-bar");

addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll > navBar.clientHeight/2) {
        topBar.style.top = "-40px";
        navBar.style.top = 0;
    } else {
        topBar.style.top = 0;
        navBar.style.top = "38px";
    }
})

function myhref(web) {
    window.open('https://www.google.com/maps/dir//Lud%C5%BAmierska+25A+34-400+Nowy+Targ/@49.4728089,20.0094221,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4715e4fc2204c859:0x99fb257976a16172', '_blank');
}

function call() {
    window.location = "tel:+48668347263";
}

let squash = document.querySelector(".offer-slider-squash");
let badminton = document.querySelector(".offer-slider-badminton");
let bouldering = document.querySelector(".offer-slider-bouldering");
let medical = document.querySelector(".offer-slider-medical");
let kids = document.querySelector(".offer-slider-kids");
let table = document.querySelector(".offer-slider-table");
let sliderButton = document.querySelector(".offer-slider-disable");

function squashSlide() {
    squash.classList.add("active2");
    sliderButton.classList.add("active2");
}
function badmintonSlide() {
    badminton.classList.add("active2");
    sliderButton.classList.add("active2");
}
function boulderingSlide() {
    bouldering.classList.add("active2");
    sliderButton.classList.add("active2");
}
function medicalSlide() {
    medical.classList.add("active2");
    sliderButton.classList.add("active2");
}
function kidsSlide() {
    kids.classList.add("active2");
    sliderButton.classList.add("active2");
}
function tableSlide() {
    table.classList.add("active2");
    sliderButton.classList.add("active2");
}

function disableOfferSlider() {
    squash.classList.remove("active2");
    badminton.classList.remove("active2");
    bouldering.classList.remove("active2");
    medical.classList.remove("active2");
    kids.classList.remove("active2");
    table.classList.remove("active2");
    sliderButton.classList.remove("active2")
}