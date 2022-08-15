import { basicLoad } from "../pages/basic.js";

export function firstAlert(){
    const create = document.createElement("div");
    create.classList.add("my-alert");
    document.body.appendChild(create);
    const message = document.querySelector(".my-alert");
    message.innerHTML = myAlertHtml;

    const confirm = document.querySelector('.confirm')
    const cancel = document.querySelector('.cancel')
    
    const promise = new Promise((resolve, reject) => {
      confirm.addEventListener('click', resolve)
      cancel.addEventListener('click', reject)
    })    
    async function waitClick () {
      return await promise
        .then(() => {
          onConfirm()
        })
        .catch(() => onCancel())
    }

    function onConfirm () {
        console.log('a')
        message.remove()
    }
    
    function onCancel () {
        basicLoad();
        message.remove()
    }
    
    waitClick()
      .then(() => {
      })
}

const myAlertHtml = `
<div class="box-container">
<ion-icon name="hand-left-outline"></ion-icon>
<h1>Espera um pouquinho!</h1>
<span>Eai! Danne aqui! você vai querer<br>o básico ou o empenhado?</span>
<div class="btns">
    <button class="cancel">BÁSICO</button>
    <button class="confirm">EMPENHADO</button>
</div>
</div>
`
const myPostConfirmAlertHtml = `
<div class="box-container">
<ion-icon name="hand-left-outline"></ion-icon>
<h1>Espera um pouquinho!</h1>
<span>Eai! Danne aqui! você vai querer<br>o básico ou o empenhado?</span>
<div class="btns">
    <button class="cancel">BÁSICO</button>
    <button class="confirm">EMPENHADO</button>
</div>
</div>
`
const myPostCancelAlertHtml = `
<div class="box-container">
<ion-icon name="hand-left-outline"></ion-icon>
<h1>Espera um pouquinho!</h1>
<span>Eai! Danne aqui! você vai querer<br>o básico ou o empenhado?</span>
<div class="btns">
    <button class="cancel">BÁSICO</button>
    <button class="confirm">EMPENHADO</button>
</div>
</div>
`

