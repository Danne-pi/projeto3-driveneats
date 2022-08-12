let comcards = document.querySelectorAll('.comida');
let comicons = document.querySelectorAll('.comida ion-icon');
let bebcards = document.querySelectorAll('.bebida')
let bebicons = document.querySelectorAll('.bebida ion-icon');
let sobcards = document.querySelectorAll('.sobremesa')
let sobicons = document.querySelectorAll('.sobremesa ion-icon');


// ----------------------------------------------------------------

function menuComidas(foodType, cardId, iconId) {
    switch (foodType) {
        case 1:
            for (let i = 0; i < comcards.length; i++) {
                if (comcards[i].classList.toggle("border-green")){
                    comcards[i].classList.toggle("border-green");
                }
            } 
            for (let i = 0; i < comicons.length; i++) {
                if (comicons[i].classList.toggle("show")){
                    comicons[i].classList.toggle("show");
                }
            } 
        break;
        case 2:
            for (let i = 0; i < bebcards.length; i++) {
                if (bebcards[i].classList.toggle("border-green")){
                    bebcards[i].classList.toggle("border-green");
                }
            } 
            for (let i = 0; i < bebicons.length; i++) {
                if (bebicons[i].classList.toggle("show")){
                    bebicons[i].classList.toggle("show");
                }
            } 
        break;
        case 3:
            for (let i = 0; i < sobcards.length; i++) {
                if (sobcards[i].classList.toggle("border-green")){
                    sobcards[i].classList.toggle("border-green");
                }
            } 
            for (let i = 0; i < sobicons.length; i++) {
                if (sobicons[i].classList.toggle("show")){
                    sobicons[i].classList.toggle("show");
                }
            } 
        break;
    }
    document.getElementById(iconId).classList.toggle("show");
    document.getElementById(cardId).classList.toggle("border-green");
}
