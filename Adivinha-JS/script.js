const numero = document.querySelector('.guess');
const referencia = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const botao = document.querySelector('.btn.check');
const scorePrint = document.querySelector('.score');

let botaoAtivo = true; // Inicialmente o botão está ativado
let score = 20;
let numeroCerto = Math.trunc(Math.random() * 20) + 1;

/* Guest */
botao.addEventListener('click', () => {
    if (!botaoAtivo) {
        return; // Sai da função se o botão não estiver ativado
    }

    const guest = parseFloat(numero.value);

    if (!guest) {
        alert("Campo Vazio")
        return;
    }

    if (guest === numeroCerto) {
        acertou();
    } else {
        referencia.textContent = guest > numeroCerto ? "É um numero menor" : "É um numero maior";
        updateScore();
    }

    verificaDerrota();
});

const again = document.querySelector('.btn.again')

/* Botão Again reseta */
again.addEventListener('click', () => {
    reset();
});

/* Funtions */
function updateScore() {
    score--;
    scorePrint.textContent = score;
}

function verificaDerrota() {
    if (score <= 0) {
        score = 0;
        referencia.textContent = 'Muito ruim perdeste';
        document.body.style.backgroundColor = "red";
    }
}

function acertou() {
    referencia.textContent = 'Parabens ce acertou';
    document.body.style.backgroundColor = "green";
    if (score > parseFloat(highscore.textContent)) {
        highscore.textContent = score;
    }
    botaoAtivo = false; 
}

function reset() {
    numeroCerto = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = '#222';
    score = 20;
    referencia.textContent = 'Start guessing...';
    botaoAtivo = true; 
}
