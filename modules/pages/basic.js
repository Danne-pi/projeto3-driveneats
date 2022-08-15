import { foodCardList } from "../foodcards/foodcards.js";

export function basicLoad(){
    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");
    document.body.appendChild(menuList);
    for (let i = 1; i <= 3; i++) {
        const create = document.createElement("div");
        create.id = "food-list"+i;
        menuList.appendChild(create);
    }
    foodCardList("comida", 5)
    foodCardList("bebida", 5)
    foodCardList("sobremesa", 5)
}