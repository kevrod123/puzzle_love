// Pares de letras para: TE QUIERO MUCHO
const letras = [
    "T","T","E","E",
    "Q","Q","U","U",
    "I","I","E","E",
    "R","R","O","O",
    "M","M","U","U",
    "C","C","H","H","O","O"
];

const grid = document.getElementById("grid");
const mensajeFinal = document.getElementById("mensajeFinal");

// Mezclar cartas
letras.sort(() => Math.random() - 0.5);

let carta1 = null;
let carta2 = null;
let bloqueo = false;
let paresEncontrados = 0;

// Crear cartas
letras.forEach(letra => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.letra = letra;
    card.innerText = "?";

    card.addEventListener("click", () => {
        if (bloqueo) return;
        if (card.classList.contains("reveal")) return;

        card.classList.add("reveal");
        card.innerText = letra;

        if (!carta1) {
            carta1 = card;
        } else {
            carta2 = card;
            verificarCartas();
        }
    });

    grid.appendChild(card);
});

function verificarCartas() {
    if (carta1.dataset.letra === carta2.dataset.letra) {
        paresEncontrados++;
        carta1 = null;
        carta2 = null;

        if (paresEncontrados === letras.length / 2) {
            setTimeout(() => mensajeFinal.style.display = "block", 500);
        }
    } else {
        bloqueo = true;
        setTimeout(() => {
            carta1.classList.remove("reveal");
            carta1.innerText = "?";
            carta2.classList.remove("reveal");
            carta2.innerText = "?";
            carta1 = null;
            carta2 = null;
            bloqueo = false;
        }, 900);
    }
}
