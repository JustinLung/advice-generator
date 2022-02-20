// url
const baseUrl = "https://api.adviceslip.com/advice";

// elements
const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const random = document.querySelector(".dice");

getData();
renderData();

random.addEventListener("click", reload);

async function getData() {
    try {
        const response = await fetch(`${baseUrl}`);
        const result = await response.json();
        return result.slip;

    } catch (err) {
        throw new Error(err);
    }
}

async function renderData() {
    const slip = await getData();
    advice.innerText = `"${slip.advice}"`;
    adviceId.innerText = `ADVICE #${slip.id}`;
}

function reload() {
    location.reload();
}