import { orderContent, zapmessage } from "../buttons/orderbutton.js";

export function firstAlert(){
    const create = document.createElement("div");
    create.classList.add("my-alert");
    document.body.appendChild(create);
    const message = document.querySelector(".my-alert");
    message.innerHTML = orderContent;
    const create2 = document.createElement("div");
    create2.classList.add("shadow");
    document.body.appendChild(create2);
    const shadowy = document.querySelector(".shadow");

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
        const nome = prompt("Digite seu nome")
        const ender = prompt("Digite o Endereço")
        window.open("https://wa.me/5577991557843?text="+encodeURIComponent(zapmessage)+encodeURIComponent("Nome: "+nome+"\nEndereço: "+ender))
        message.remove()
        shadowy.remove()
    }
    
    function onCancel () {
        message.remove()
        shadowy.remove()
    }
    
    waitClick()
      .then(() => {
      })
}
