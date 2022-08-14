import { FoodSetter } from "./foodset.js";
import { foodcardstyling } from "./styling.js";

//reaproveitando meu codigo do projeto da globo
export class FoodCard extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"})
    }
        
    static get observedAttributes(){
        return ['food'];
    }
    get food(){
        return this.getAttribute("food");
    }
    set food(val){
        this.setAttribute("food", val)
    }

    connectedCallback(){
        this.render();
    }
    
    render(){
    this.shadow.innerHTML = foodcardstyling+FoodSetter((this.food).split(" "));
    }
}