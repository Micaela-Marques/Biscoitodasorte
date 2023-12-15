const btnluck = document.querySelector("#btnluck");
const btnReset = document.querySelector("#btn_reset");
const luckToday = document.querySelector('#luck_today')

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

// evento
btnluck.addEventListener('click', btnHandleLuck);
btnReset.addEventListener('click', btnHandleLuck);

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function btnHandleLuck(event) {
    event.preventDefault();

    // Chama a função de geração de mensagem apenas se o botão de sorte for clicado
    if (event.currentTarget.id === 'btnluck') {
        generateRandomMessage();
    }

    toggleScreen();
}


function generateRandomMessage() {
    // Lista de mensagens aleatórias
    let messages = [
        "A vida trará coisas boas se tiver paciência.",
        "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
        "Não compense na ira o que lhe falta na razão.",
        "Defeitos e virtudes são apenas dois lados da mesma moeda.",
        "A maior de todas as torres começa no solo.",
        "Não há que ser forte.Há que ser flexível.",
        "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração ?",
        "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
        "A juventude não é uma época da vida, é um estado de espírito.",
        "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
        "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
        "Siga os bons e aprenda com eles.",
        "Não importa o tamanho da montanha, ela não pode tapar o sol.",
        "O bom - senso vale mais do que muito conhecimento.",
        "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
        "São os nossos amigos que nos ensinam as mais valiosas lições.",
        "Aquele que se importa com o sentimento dos outros, não é um tolo.",
        "A adversidade é um espelho que reflete o verdadeiro eu.",
        "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
        "Uma bela flor é incompleta sem as suas folhas.",
        "Sem o fogo do entusiasmo, não há o calor da vitória."
    ];

    // Escolhe uma mensagem aleatória
    let randomIndex = Math.floor(Math.random() * messages.length);
    let randomMessage = messages[randomIndex];

    // Exibe a mensagem na tela
    luckToday.textContent = randomMessage;
}