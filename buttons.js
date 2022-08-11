let buttons = document.querySelectorAll('button');
function btnClick(id) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.toggle("border-green")){
            buttons[i].classList.toggle("border-green");
        }
    } 
    document.getElementById(id).classList.toggle("border-green")

}