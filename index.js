const section4Wrapper = document.querySelector(".section4-wrapper");
const section5Wrapper = document.querySelector(".section5-wrapper");
const section6Wrapper = document.querySelector(".section6-wrapper");
const section10Wrapper = document.querySelector(".section10-wrapper");

const section4Card = document.getElementById("section4-card");
const section5Card = document.getElementById("section5-card");
const section6Card = document.getElementById("section6-card");
const section10Card = document.getElementById("section10-card");

const section6Images = [
    "./images/section6-card-img1.png",
    "./images/section6-card-img2.png",
    "./images/section6-card-img3.png",
    "./images/section6-card-img4.png"
];

const section6Titles = [
    "EC",
    "CRM",
    "会計",
    "倉庫"
];

// Funktsiyani yangilash
const handleCopy = (prop, wrapper, num, images = [], titles = [], imageRepeat = null) => {
    for (let i = 0; i < num; i++) {
        const clone = i === 0 ? prop : prop.cloneNode(true);

        const imgElement = clone.querySelector(".section6-img");
        const titleElement = clone.querySelector(".card-title");

        if (imgElement && images[i]) {
            imgElement.src = images[i];
        }
        
        if (titleElement && titles[i]) {
            titleElement.textContent = titles[i];
        }

        if (i !== 0) {
            wrapper.appendChild(clone);
        }
    }
}

const handleSubmit = (e) => e.preventDefault();

// Kartalarni qo'shish
handleCopy(section4Card, section4Wrapper, 3);
handleCopy(section5Card, section5Wrapper, 9);
handleCopy(section6Card, section6Wrapper, 4, section6Images, section6Titles);
handleCopy(section10Card, section10Wrapper, 3);
