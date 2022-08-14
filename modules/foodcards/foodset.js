import { foodlistcontent } from "./content.js";

export function FoodSetter(comida, num){
        
    const typeSelected = 'foodlistcontent.'+comida+'['+num+'].'

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