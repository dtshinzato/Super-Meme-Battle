class Game {
  constructor() {
    this.selection = 10; // quantos personagens selecionaveis
  }

  genSelection(board) {
    // criação do tabuleiro
    let counter = 0; // Criei um contador para mudar a imagem
    for (let i = 0; i < this.selection; i++) {
      counter++; // lógica para o contador ir de 1 a 10
      const card = document.createElement("div"); // criação de divs relacionado a quantidade de personagens
      card.classList.add("card", "personagem"); // adicionar classe as divs (card e personagem)

      board.appendChild(card); // section do tabuleiro adota card criado na linha acima

      const img = document.createElement("img"); // criar uma img
      img.setAttribute("src", `./images/${counter}.jpg`); // e rotacionar para cada contador ser uma img
      card.appendChild(img); //atribuir cada div com uma imagem
      oponente.setAttribute(
        "src",
        `./images/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}.jpg`
      ); // Pegando um oponente aleatóriamente
    }
  }

  // selectPlayer(){
  //    document.getElementByClass('personagem').onclick = (event)=>{
  //     const selecionado = event.target;

  //    }

  // //         document.getElementByClass('card').onclick =console.log(personagem)

  // // //     img.setAttribute("src", `./images/${counter}.jpg`);
  // //   }
  // }
}
