// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://jwrxjcxgqkb7abdpenbyk4nrau0mfvwf.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `views: ${data}`;
}
updateCounter();