/*passo 1
quando clicar no botao do persoangem na lista, marcar o botao selecionado*/

const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        

        desselecionarBotao();
    
    botao.classList.add("selecionado");

    dessselecionarPersonagem(indice);

    });

});



function dessselecionarPersonagem(indice) {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagens[indice].classList.add("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

