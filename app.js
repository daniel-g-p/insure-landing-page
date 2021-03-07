const burgerIcon = document.querySelector("#burgerMenu");
const mobileNav = document.querySelector("#mobileNav");
const navContent = document.querySelector("#mobileNav div");
const menuBar = document.querySelector("header span");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    if (burgerIcon.classList.contains("active")) {
        const height = window.innerHeight - menuBar.scrollHeight + 1 + "px";
        navContent.style.height = height;
        mobileNav.style.height = height;
    } else {
        mobileNav.style.height = 0;
    };
});

const jsLoad = () => document.body.style.visibility = "visible";