const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        this.classList.add("ativo");
        textos[i].classList.add("ativo");
    });
}

const hoje = new Date();
const prazo = 60 * 24 * 60 * 60 * 1000; // 60 dias em milissegundos

const objetivos = [
    new Date(hoje.getTime() + prazo), // Cursos na Alura
    new Date(hoje.getTime() + prazo), // Criar projetos em Javascript
    new Date(hoje.getTime() + prazo), // Criar um portfolio
    new Date(hoje.getTime() + prazo)  // Atualizar meu currículo
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoRestante = tempoObjetivo - tempoAtual;

    if (tempoRestante <= 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor(tempoRestante / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        let tempo = calculaTempo(objetivos[i]);
        document.getElementById("dias" + i).textContent = tempo[0];
        document.getElementById("horas" + i).textContent = tempo[1];
        document.getElementById("min" + i).textContent = tempo[2];
        document.getElementById("seg" + i).textContent = tempo[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();