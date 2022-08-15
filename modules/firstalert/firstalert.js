import { orderContent } from "../buttons/orderbutton.js";

export function firstAlert(){
    const create = document.createElement("div");
    create.classList.add("my-alert");
    document.body.appendChild(create);
    const message = document.querySelector(".my-alert");
    message.innerHTML = orderContent;

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
        message.remove()
    }
    
    waitClick()
      .then(() => {
      })
}
