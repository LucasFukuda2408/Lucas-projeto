// ===============================
// EFEITO DE DIGITAÇÃO
// ===============================

const texto = [
    "Desenvolvedor Front-End",
    "Estudante de TI",
    "Criador de Projetos",
    "Apaixonado por Tecnologia"
];

let contadorTexto = 0;
let contadorLetra = 0;
let apagando = false;

const typing = document.getElementById("typing");

function escrever() {

    const palavra = texto[contadorTexto];

    if (!apagando) {

        typing.textContent = palavra.substring(0, contadorLetra);

        contadorLetra++;

        if (contadorLetra > palavra.length) {

            apagando = true;

            setTimeout(escrever, 1500);

            return;
        }

    } else {

        typing.textContent = palavra.substring(0, contadorLetra);

        contadorLetra--;

        if (contadorLetra < 0) {

            apagando = false;

            contadorTexto++;

            if (contadorTexto >= texto.length) {

                contadorTexto = 0;

            }

        }

    }

    setTimeout(escrever, apagando ? 40 : 90);

}

escrever();


// ===============================
// NAVBAR
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scroll");

    } else {

        navbar.classList.remove("scroll");

    }

});


// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// ANIMAÇÃO DOS CARDS
// ===============================

const elementos = document.querySelectorAll(
    ".card, .projeto, section"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.2
});

elementos.forEach((el)=>{

    observer.observe(el);

});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        botaoTopo.style.display = "block";

    }else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// ANO AUTOMÁTICO NO RODAPÉ
// ===============================

const footer = document.querySelector("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} Lucas Fukuda • Todos os direitos reservados.`;


// ===============================
// MENSAGEM NO CONSOLE
// ===============================

console.log("%cBem-vindo ao meu Portfólio!",
"color:#8b5cf6;font-size:20px;font-weight:bold;");