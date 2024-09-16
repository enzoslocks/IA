const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A humanidade interfere nos desastres naturais?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "A prevenção de desastres naturais envolve uma série de medidas de preparação, mitigação e resposta que podem ser implementadas para minimizar os impactos desses eventos."
            },
            {
                texto: "não",
                afirmacao: "A humanidade contribui para a intensificação e frequência de desastres naturais através de várias atividades que impactam negativamente o meio ambiente."
            }
        ]
    },
    {
        enunciado: "O que causa os terremotos?",
        alternativas: [
            {
                texto: "Terremotos são causados pelo movimento das placas tectônicas na crosta terrestre.",
                afirmacao: "Correto. Quando essas placas se movem e se chocam, a energia acumulada é liberada na forma de ondas sísmicas, resultando em um terremoto."
            },
            {
                texto: "Terremotos são causados pela rotacão da terra.",
                afirmacao: "Errado. Terremotos são causados pelo movimento das placas tectônicas na crosta terrestre, quando essas placas se movem e se chocam, a energia acumulada é liberada na forma de ondas sísmicas, resultando em um terremoto."
            }
        ]
    },
    {
        
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();