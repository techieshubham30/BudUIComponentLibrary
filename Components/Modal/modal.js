
const modalClickBtn = document.querySelector('#example-modal-click-btn');
const modal = document.querySelector('#example-modal');
const modalCloseBtn = document.querySelector('#example-modal-close-btn');
const modalDeclineBtn = document.querySelector('#example-modal-decline');

modalCloseBtn.addEventListener("click",()=>{
    modal.classList.add('hide');
    document.body.style.overflow="visible";    
})

modalClickBtn.addEventListener("click",()=>{
    modal.classList.remove('hide');
    document.body.style.overflow="hidden";
})



modalDeclineBtn.addEventListener("click",()=>{
    modal.classList.add('hide');
    document.body.style.overflow="visible";
})