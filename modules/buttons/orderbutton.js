import { firstAlert } from "../firstalert/firstalert.js";
import {foodlistcontent} from "../foodcards/content.js"

let okbtn = document.querySelector(".ok-button");
okbtn.addEventListener("click", setOrder);

document.getElementsByClassName("comida border-green")

export let orderContent
export let zapmessage

export function setOrder(){
    let foodSelect = document.getElementsByClassName("comida border-green")
    foodSelect = foodSelect[0].id;
    foodSelect = foodSelect.replace(/\D/g, "");
    foodSelect = Number(foodSelect);
    let drinkSelect = document.getElementsByClassName("bebida border-green")
    drinkSelect = drinkSelect[0].id;
    drinkSelect = drinkSelect.replace(/\D/g, "");
    drinkSelect = Number(drinkSelect);
    let dessertSelect = document.getElementsByClassName("sobremesa border-green")
    dessertSelect = dessertSelect[0].id;
    dessertSelect = dessertSelect.replace(/\D/g, "");
    dessertSelect = Number(dessertSelect);
    
    console.clear()

    orderContent =`
    <div class="box-container">
    <ion-icon name="wallet-outline"></ion-icon>
    <h1>Confirme seu pedido</h1>
    <div class="content">
        <span><div>${foodlistcontent.comida[foodSelect].title}</div><div>R$${(foodlistcontent.comida[foodSelect].price).toFixed(2)}</div></span>
        <span><div>${foodlistcontent.bebida[drinkSelect].title}</div><div>R$${(foodlistcontent.bebida[drinkSelect].price).toFixed(2)}</div></span>
        <span><div>${foodlistcontent.sobremesa[dessertSelect].title}</div><div>R$${(foodlistcontent.sobremesa[dessertSelect].price).toFixed(2)}</div></span>
        <span><strong>TOTAL</strong><strong>R$${(foodlistcontent.comida[foodSelect].price+
            foodlistcontent.bebida[drinkSelect].price+
            foodlistcontent.sobremesa[dessertSelect].price).toFixed(2)}</strong></span>
        <div class="right"></div>
    </div>
    <div class="btns">
        <button class="cancel">cancelar</button>
        <button class="confirm">continuar</button>
    </div>
    </div>
    `
    zapmessage ="Olá, gostaria de fazer o pedido:\n- Prato: "+foodlistcontent.comida[foodSelect].title +"\n- Bebida: "+foodlistcontent.bebida[drinkSelect].title+"\n- Sobremesa: "+foodlistcontent.sobremesa[dessertSelect].title+"\nTotal: R$ "+(foodlistcontent.comida[foodSelect].price+foodlistcontent.bebida[drinkSelect].price+foodlistcontent.sobremesa[dessertSelect].price).toFixed(2) + "\n\n"
    
    

    console.log(orderContent)
    firstAlert();
}
