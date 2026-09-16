const categories = [
    {
        title: "Ornament",
        ornament: true,
        objects: [
            {
                name: "Akant z karbowaną wstązką",
                location: "",
                date: "1715-1720",
                image: "images/ornament/Akant z karbowaną wstązką, 1715-1720.png"
            },
            {
                name: "Rollwerk z Kaboszonem",
                location: "",
                date: "1560-1580",
                image: "images/ornament/Rollwerk z Kaboszonem,1560-1580 .JPG"
            },
            {
                name: "Okuciowy",
                location: "",
                date: "1590-1630",
                image: "images/ornament/Okuciowy, 1590-1630.JPG"
            },
            {
                name: "Małżowinowo-chrząstkowy",
                location: "",
                date: "1620-1655",
                image: "images/ornament/Małżowinowo-chrząstkowy, 1620-1655.png"
            },
            {
                name: "kartuszowo-zawijany",
                location: "",
                date: "1560-1580",
                image: "images/ornament/kartuszowo-zawijany, 1560-1580.JPG"
            },
            {
                name: "kartusz",
                location: "",
                date: "",
                image: "images/ornament/kartusz.png"
            },
            {
                name: "kandelabrowy",
                location: "",
                date: "1520-1560",
                image: "images/ornament/kandelabrowy, 1520-1560.png"
            },
            {
                name: "Kolumny całe pokryte ornamentem",
                location: "",
                date: "1620/1630",
                image: "images/ornament/Kolumny całe pokryte ornamentem, przełom 1620 1630.png"
            },
            {
                name: "Regencyjne główki",
                location: "",
                date: "1710-1750",
                image: "images/ornament/Regencyjne główki, 1710-1750.webp"
            },
            {
                name: "Czarne Ołtarze, autonomiczność ornamentu od architektury ",
                location: "",
                date: "1650-1700",
                image: "images/ornament/Czarne Ołtarze, autonomiczność ornamentu od architektury 1650-1700.jpg"
            },
            {
                name: "abulae ansatae",
                location: "",
                date: "",
                image: "images/ornament/abulae ansatae.jpg"
            },
            {
                name: "Groteska w arabesce",
                location: "",
                date: "po 1560",
                image: "images/ornament/Groteska w arabesce, po 1560.png"
            },
            {
                name: "Rocaille",
                location: "",
                date: "1740-1800",
                image: "images/ornament/Rocaille, 1740-1800.png"
            },
            {
                name: "akant mięsisty",
                location: "",
                date: "1680-1700",
                image: "images/ornament/akant mięsisty, 1680-1700.png"
            },
            {
                name: "wstęgowo-cęgowy",
                location: "",
                date: "1710-1750",
                image: "images/ornament/wstęgowo-cęgowy, 1610-1750.png"
            },
            {
                name: "arabeska",
                location: "",
                date: "od 1501",
                image: "images/ornament/arabeska, od 1501.png"
            },
            {
                name: "Kratka regencyjna",
                location: "",
                date: "1710-1750",
                image: "images/ornament/Kratka regencyjna, 1710-1750.JPG"
            },
            {
                name: "Rocaille grzebieniowy",
                location: "",
                date: "po 1750",
                image: "images/ornament/Rocaille grzebieniowy, po 1750.png"
            },
            {
                name: "Akant suchy",
                location: "",
                date: "1700-1710",
                image: "images/ornament/Akant suchy, 1710-1720.png"
            },
            {
                name: "wstęgowy",
                location: "",
                date: "1680-1720",
                image: "images/ornament/wstęgowy, 1680-1720.png"
            },
            {
                name: "Schweifwerk",
                location: "",
                date: "1600-1650",
                image: "images/ornament/Schweifwerk, 1600-1650.webp"
            },
            {
                name: "palmety",
                location: "",
                date: "XVIII/XIX",
                image: "images/ornament/palmety, popularne na przełomie XVIII i XIX.png"
            },
            {
                name: "Maureska",
                location: "",
                date: "od 1501",
                image: "images/ornament/Maureska, od 1501.jpg"
            },
            {
                name: "panoplia",
                location: "",
                date: "",
                image: "images/ornament/panoplia.jpg"
            },
            {
                name: "lambrekin",
                location: "",
                date: "1710-1750",
                image: "images/ornament/Lambrekin, 1710-1750.png"
            },
            {
                name: "akant postrzępiony",
                location: "",
                date: "1710-1720",
                image: "images/ornament/akant postrzępiony, 1710-1720.png"
            },
        ]
    }
];

const cats = [
    "https://i.pinimg.com/736x/9c/48/8d/9c488da81a26504b7d67e7a7da417581.jpg",
    "https://i.pinimg.com/736x/ca/b5/a1/cab5a1b3966e534f3c7e87f8972e82a2.jpg",
    "https://i.pinimg.com/736x/32/7e/9a/327e9a5a3b993478d47a580e6b1fb76d.jpg",
    "https://i.pinimg.com/736x/7c/77/26/7c77265821b21fce6326c248d1da970c.jpg",
    "https://i.pinimg.com/736x/c2/b9/14/c2b9142d5cc7998c5be295b8bf48d0e4.jpg",
    "https://i.pinimg.com/736x/89/8e/d1/898ed103a55bc3c05beab9c9253c8784.jpg",
    "https://i.pinimg.com/1200x/22/f4/f7/22f4f76f40ff07f7327d45652472bd49.jpg",
    "https://i.pinimg.com/1200x/ab/85/2a/ab852a1cdcca791f3d8abdb58a3b0c60.jpg",
    "https://i.pinimg.com/736x/75/ef/a0/75efa0dcbbaf2c9b1455ef525bb66b7d.jpg",
    "https://i.pinimg.com/1200x/e6/68/50/e66850bf3587dacecca61c473e660c8d.jpg",
    "https://i.pinimg.com/736x/1e/e3/18/1ee318ef79483f22887f514f32749791.jpg",
    "https://i.pinimg.com/1200x/8c/42/9e/8c429e8bec218e6f6a3c53eec1ce339f.jpg",
    "https://i.pinimg.com/736x/25/78/79/2578793946d5740449f347b5be22e256.jpg",
    "https://i.pinimg.com/736x/57/49/20/5749206e02054598e23f453b9b3b7a45.jpg",
    "https://i.pinimg.com/736x/9d/c4/6c/9dc46cc9b578bcc0e012a0bad0d814e7.jpg",
    "https://i.pinimg.com/736x/b0/ea/31/b0ea317279479b2ada873f959eb75939.jpg",
    "https://i.pinimg.com/736x/7f/cc/77/7fcc77ddd437c867f2d6f48b90e1e71e.jpg",
    "https://i.pinimg.com/736x/42/51/f9/4251f9c7b547f30bbe35defa64f5bd3f.jpg",
    "https://i.pinimg.com/1200x/bd/d3/6a/bdd36af1785e8246693f610f982d02ba.jpg",
    "https://i.pinimg.com/736x/d8/7f/0e/d87f0ea009110682dd5a9453b61e52b2.jpg",
    
];

const quiz = document.getElementById("quiz");
const win = document.getElementById("win");

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function normalize(text) {
    return String(text ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function getCurrentCategory() {
    const pageCategory = document.body.dataset.category;

    if (pageCategory) {
        return categories.find(category => category.title === pageCategory);
    }

    const selectedCategory = localStorage.getItem("selectedCategory");
    return categories.find(category => category.title === selectedCategory);
}

function createCategoryMenu() {
    const container = document.getElementById("categories");
    if (!container) return;

    container.innerHTML = "";

    const pages = {
        "Gotyk w Europie - Anglia": "gotykweuropieanglia.html",
        "Gotyk w Europie - Francja": "gotykweuropiefrancja.html",
        "Gotyk w Europie - Niemcy": "gotykweuropieniemcy.html",
        "Gotyk w Europie - Włochy": "gotykweuropiewlochy.html",
        "Gotyk w Polsce": "gotykwpolsce.html",
        "Romanizm w Europie": "romanizmweuropie.html",
        "Romanizm w Polsce": "romanizmwpolsce.html",
        "Ornament": "ornament.html"
    };

    categories.forEach(category => {
        const link = document.createElement("a");
        link.className = "category-button";
        link.href = pages[category.title];
        link.textContent = category.title;
        container.appendChild(link);
    });
}

function createQuiz() {
    if (!quiz) return;

    const category = getCurrentCategory();
    if (!category) return;

    quiz.innerHTML = "";

    if (win) {
        win.classList.add("hidden");
    }

    const section = document.createElement("section");
    section.className = "category-section";

    const shuffledObjects = shuffle(category.objects);

    shuffledObjects.forEach(obj => {
        const card = document.createElement("div");
        card.className = "object-card";

        const img = document.createElement("img");
        const imagePath = Array.isArray(obj.images)
            ? obj.images[Math.floor(Math.random() * obj.images.length)]
            : obj.image;

        img.src = imagePath;
        img.alt = obj.name;
        img.className = "object-image";
        img.loading = "lazy";
        card.appendChild(img);

        const inputsWrapper = document.createElement("div");
        inputsWrapper.className = "inputs";

        const fields = category.ornament
            ? [
                { label: "Nazwa", value: obj.name },
                { label: "Data", value: obj.date }
            ]
            : [
                { label: "Nazwa", value: obj.name },
                { label: "Lokalizacja", value: obj.location },
                { label: "Data", value: obj.date }
            ];

        fields.forEach(field => {
            const row = document.createElement("div");
            row.className = "input-row";

            const input = document.createElement("input");
            input.placeholder = field.label;
            input.autocomplete = "off";

            const btn = document.createElement("button");
            btn.textContent = "Sprawdź";

            function check() {
                if (normalize(input.value) === normalize(field.value)) {
                    input.classList.add("correct");
                    input.disabled = true;
                    btn.disabled = true;
                    checkWin();
                }
            }

            btn.addEventListener("click", check);

            input.addEventListener("keydown", event => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    check();
                }
            });

            row.appendChild(input);
            row.appendChild(btn);
            inputsWrapper.appendChild(row);
        });

        card.appendChild(inputsWrapper);

        const answer = document.createElement("button");
        answer.className = "answer";
        answer.textContent = "Sprawdź odpowiedź";

        answer.addEventListener("click", () => {
            const answerBox = document.createElement("div");
            answerBox.className = "answer-box";
            answerBox.innerHTML = category.ornament
                ? `
                    <strong>Nazwa:</strong> ${obj.name}<br>
                    <strong>Data:</strong> ${obj.date || "—"}
                `
                : `
                    <strong>Nazwa:</strong> ${obj.name}<br>
                    <strong>Lokalizacja:</strong> ${obj.location || "—"}<br>
                    <strong>Data:</strong> ${obj.date || "—"}
                `;
            answer.replaceWith(answerBox);
        });

        card.appendChild(answer);
        section.appendChild(card);
    });

    quiz.appendChild(section);
}

function checkWin() {
    const allInputs = document.querySelectorAll("#quiz input");

    if (!allInputs.length || ![...allInputs].every(input => input.disabled)) {
        return;
    }

    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    const catImg = document.getElementById("cat");

    if (catImg) {
        catImg.src = randomCat;
    }

    if (win) {
        win.classList.remove("hidden");
    }
}

const resetBtn = document.getElementById("reset");

if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("selectedCategory");
        window.location.href = "index.html";
    });
}

if (document.getElementById("categories")) {
    createCategoryMenu();
}

if (document.body.dataset.category) {
    createQuiz();
}
