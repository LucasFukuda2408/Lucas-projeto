const texto = document.getElementById("typing");
const frases = [
    "Estudante de TI",
    "Desenvolvedor Sites",
    "Procurando emprego",
    "Aluno na Fiap"
];

let indiceFrase = 0;
let indiceLetra = 0;
let estaApagando = false;

function digitar() {
    const fraseAtual = frases[indiceFrase];

    if (!estaApagando) {
        texto.textContent = fraseAtual.substring(0, indiceLetra + 1);
        indiceLetra++;
    } else {
        texto.textContent = fraseAtual.substring(0, indiceLetra - 1);
        indiceLetra--;
    }

    let velocidade = estaApagando ? 40 : 110;

    if (!estaApagando && indiceLetra === fraseAtual.length) {
        velocidade = 2200;
        estaApagando = true;
    }

    if (estaApagando && indiceLetra === 0) {
        estaApagando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        velocidade = 450;
    }

    setTimeout(digitar, velocidade);
}

window.addEventListener("load", digitar);