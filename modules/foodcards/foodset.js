import { foodlistcontent } from "./content.js";

export function FoodSetter(comida, thisId){
        
    const typeSelected = 'foodlistcontent.'+comida+'['+thisId+'].'
    let specialchar;
    let myIcon;
    switch (comida) {
        case "comida":
            specialchar = "c";
            myIcon = "pizza"
        break;
        case "bebida":
            specialchar = "b";
            myIcon = "beer"
            break;
        case "sobremesa":
            specialchar = "s";
            myIcon = "ice-cream"
            break;
    }
    
    return /*html*/`
<button class="${comida}" id="${specialchar}b${thisId}" onclick="menuComidas('${comida}', '${specialchar}b${thisId}', '${specialchar}i${thisId}')">
    <div id="box-card">
            <img src="${eval(typeSelected+'img')}" alt="">
            <span class="title">${eval(typeSelected+'title')}</span>
            <span class="sub">${eval(typeSelected+'sub')}</span>
        <div class="price">
            <h3>R$${eval(typeSelected+'price').toFixed(2)}</h3>
        </div>
    </div>
    <ion-icon id="${specialchar}i${thisId}" name="${myIcon}"></ion-icon>
</button>
`;
}