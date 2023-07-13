// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const btn = document.querySelector(".modal-btn")
const over = document.querySelector(".modal-overlay")
const close = document.querySelector(".close-btn")

btn.addEventListener("click",function(){
// if(over.classList.contains("modal-ovetrlay")){
//     over.classList.remove("modal-ovetrlay")
// }
// else{
//     over.classList.add("modal-ovetrlay")
over.classList.add("open-modal")
})
close.addEventListener("click",function(){
    over.classList.remove("open-modal")
})
