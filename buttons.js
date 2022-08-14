function menuComidas(foodType, cardId, iconId) {

    let buttons = document.querySelectorAll("."+foodType);
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].classList.toggle("border-green")){
            buttons[i].classList.toggle("border-green")
        }                
    }
    let icons = document.querySelectorAll("."+foodType+" ion-icon");
    for (let i = 0; i < icons.length; i++) {
        if(icons[i].classList.toggle("show")){
            icons[i].classList.toggle("show")
        }                
    }
    document.getElementById(iconId).classList.toggle("show");
    document.getElementById(cardId).classList.toggle("border-green");
}
