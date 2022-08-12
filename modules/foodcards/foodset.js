import { foodlist } from "./content.js";

export function FoodSetter(idfood){
        
    const typeSelected = 'foodlist.'+idfood[0]+'['+(Number.parseInt(idfood[1])-1)+'].'

    return /*html*/`
<div id="box-card">
        <img src="${eval(typeSelected+'img')}" alt="">
        <span class="title">${eval(typeSelected+'title')}</span>
        <span class="sub">${eval(typeSelected+'sub')}</span>
    <div class="price">
        <h3>${eval(typeSelected+'price')}</h3>
    </div>
</div>
`;
}