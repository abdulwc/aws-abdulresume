// JavaScript Code for Visitor Counter
document.addEventListener('DOMContentLoaded', (event) => {
    updateCounter();
});

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
