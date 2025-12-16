// TYPEWRITER EFFECT
const textElement = document.querySelector(".typing-text");
const phrases = ["Software Solutions.", "Java Applications.", "Genetic Algorithms.", "Web Experiences."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// SCROLL REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(11, 15, 25, 0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(11, 15, 25, 0.85)";
        navbar.style.boxShadow = "none";
    }
});
