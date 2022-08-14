import { FoodSetter } from "./foodset.js";

export function foodCardList(comida, tamanholista){
    let foodlist;
    switch (comida) {
        case "comida":
            foodlist = document.getElementById("food-list1");
        break;
        case "bebida":
            foodlist = document.getElementById("food-list2");
        break;
        case "sobremesa":
            foodlist = document.getElementById("food-list3");
        break;
    }
    for (let i = 0; i < tamanholista; i++) {
        const create = document.createElement("div");
        create.classList.add(comida+"-item"+i);
        foodlist.appendChild(create);
        document.querySelector("."+comida+"-item"+i).innerHTML = FoodSetter(comida, i);
    }
}
