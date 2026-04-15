const perguntas = [
    {
        pergunta: "Qual linguagem roda no navegador?",
        opcoes: ["Python", "Java", "JavaScript", "C++"],
        correta: 2
    },
    {
        pergunta: "Qual tag cria um link?",
        opcoes: ["<div>", "<a>", "<p>", "<img>"],
        correta: 1
    },
    {
        pergunta: "Qual propriedade muda a cor do texto?",
        opcoes: ["background", "color", "font-size", "border"],
        correta: 1
    }
];

let indice = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const proximoBtn = document.getElementById("proximo");
const resultado = document.getElementById("resultado");

function carregarPergunta() {
    const atual = perguntas[indice];
    perguntaEl.textContent = atual.pergunta;
    opcoesEl.innerHTML = "";
    resultado.textContent = "";

    // trava botão até responder
    proximoBtn.disabled = true;

    atual.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.textContent = opcao;

        btn.addEventListener("click", () => verificarResposta(btn, i));

        opcoesEl.appendChild(btn);
    });
}

function verificarResposta(botao, indiceOpcao) {
    const correta = perguntas[indice].correta;
    const botoes = opcoesEl.querySelectorAll("button");

    //  desativa todos após responder
    botoes.forEach(btn => btn.disabled = true);

    if (indiceOpcao === correta) {
        botao.classList.add("correto");
        pontuacao++;
    } else {
        botao.classList.add("errado");
        botoes[correta].classList.add("correto");
    }

    // 
    proximoBtn.disabled = false;
}

proximoBtn.addEventListener("click", () => {
    indice++;

    if (indice < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    perguntaEl.textContent = "Fim do Quiz!";
    opcoesEl.innerHTML = "";
    proximoBtn.style.display = "none";

    resultado.textContent =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas`;
}

// inicia
carregarPergunta();