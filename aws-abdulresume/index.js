// JavaScript Code for Enhanced Resume Website Interactivity

// Document Ready Function
document.addEventListener('DOMContentLoaded', (event) => {
    updateCounter();
    initializeScrollEffects();
    immediatelyShowContent();
});

// Function to Update Visitor Counter
async function updateCounter() {
    const counter = document.querySelector(".counter-number");
    const url = "https://jwrxjcxgqkb7abdpenbyk4nrau0mfvwf.lambda-url.us-east-1.on.aws/";

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error('Error fetching the counter data:', error);
        counter.innerHTML = 'Counter unavailable';
    }
}

// Function to Initialize Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        animateOnScroll();
    });
}


// Function to Animate Elements on Scroll
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionPosition = section.offsetTop + section.offsetHeight / 4;
        if (scrollPosition >= sectionPosition) {
            section.classList.add('fade-in');
        }
    });
}

// New function to immediately display content on page load
function immediatelyShowContent() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
}

// Add CSS Class for Scroll Animation in Stylesheet
// .fade-in { 
//     opacity: 1; 
//     transform: translateY(0); 
//     transition: opacity 0.6s ease-out, transform 0.6s ease-out; 
// }
// section { 
//     opacity: 0; 
//     transform: translateY(20px); 
// }
