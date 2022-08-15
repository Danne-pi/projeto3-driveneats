let getComidaId
let getBebidaId
let getSobremesaId
let OrderList

function menuComidas(foodType, cardId, iconId) {
    
    let listCheck

    switch (foodType) {
        case "comida":
            listCheck = 1;
        break;
        case "bebida":
            listCheck = 2;
        break;
        case "sobremesa":
            listCheck = 3;
        break;        
}
    
    const hasClicked = document.querySelector("#food-list"+listCheck)
    hasClicked.classList.add("wasClicked");

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
    
    if (document.querySelector("#food-list1").classList.contains("wasClicked") == true &&
    document.querySelector("#food-list2").classList.contains("wasClicked") == true &&
    document.querySelector("#food-list3").classList.contains("wasClicked") == true) {
        document.querySelector(".ok-button").style.display="unset";
        document.querySelector(".waiting-button").style.display="none"
    }

}


