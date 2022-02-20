// API URL
const baseUrl = "https://api.adviceslip.com/advice";

// elements
const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const diceButton = document.querySelector(".dice");

const preloader = document.querySelector(".preloader");
const errorMsg = document.querySelector(".error");


getData();
renderData();

diceButton.addEventListener("click", renderData);

async function getData() {
    try {
        const response = await fetch(`${baseUrl}`);
        const result = await response.json();
        hidePreloader();
        return result.slip;
    } catch (err) {
        errorMessage();
        throw new Error(err);
    }
}

async function renderData() {
    advice.style.opacity = 0;
    adviceId.style.opacity = 0;
    preloader.style.opacity = 1;
    const slip = await getData();
    advice.innerText = `"${slip.advice}"`;
    adviceId.innerText = `ADVICE #${slip.id}`;
    hidePreloader();
}

function hidePreloader() {
    setTimeout(() => {
        preloader.style.opacity = 0;
        adviceId.style.opacity = 1;
        advice.style.opacity = 1;
    }, 500)
}

function errorMessage() {
    setTimeout(() => {
        errorMsg.style.opacity = 1,
            errorMsg.style.transform = "translateX(0)";
        setTimeout(() => {
            errorMsg.style.opacity = 0,
                errorMsg.style.transform = "translateX(4em)";
        }, 5000)
    }, 300)
}