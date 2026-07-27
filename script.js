// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "Python Full Stack Developer",
    "Django Developer",
    "React Developer",
    "REST API Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1800;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===============================
// Dark Mode
// ===============================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Navbar Background
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("fade-up");

    observer.observe(section);

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});