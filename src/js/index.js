/*
 O que precisamos fazer? - quando passar o mouse em cima dos personagens na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que esta selecionado.

   OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
     Passo 1 - pegar os personagens no JS pra poder verificar quando o usuario passar o mouse em cima de um deles
     Passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
     Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
   
    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
     Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
     Passo 2 - alterar a imagem do personagem grande
     Passo 3 - alterar o nome do personagem grande
     Passo 4 - alterar a descrição do personagem grande

*/

/*
OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo
 Passo 1 - pegar os personagens no JS pra poder verificar quando o usuario passar o mouse em cima de um deles*/

const personagens = document.querySelectorAll('.personagem');


// Passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
          window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
         // Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
         const personagemSelecionado = document.querySelector('.selecionado');
         personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        // Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // Passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
