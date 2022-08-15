import { foodCardList } from "../foodcards/foodcards.js";

export function basicLoad(){

    document.querySelector(".main-menu").style.display = "flex";
    document.querySelector(".bottom-nav").style.display = "flex";

    const menuList = document.createElement("div");
    menuList.className = "menu-list";
    document.body.appendChild(menuList);

    const listTitleContent = ["Primeiro, seu prato","Agora, sua bebida","Por fim, sua sobremesa"]
    
    for (let i = 0; i < 3; i++) {
        
        const listTitle = document.createElement("div");
        listTitle.className = "list-title";
        listTitle.innerHTML = listTitleContent[i];
        menuList.appendChild(listTitle);

        const foodList = document.createElement("div");
        foodList.id = "food-list"+(i+1);
        menuList.appendChild(foodList);
    }

    foodCardList("comida", 5)
    foodCardList("bebida", 5)
    foodCardList("sobremesa", 5)
}