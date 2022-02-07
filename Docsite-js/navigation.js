const hamburgerBtn = document.querySelector('.hamburger');
const sideBar = document.querySelector('.sidebar');
const listItems = document.querySelectorAll('.list-item')

hamburgerBtn.addEventListener("click",()=>{
    hamburgerBtn.classList.toggle("active");
    sideBar.classList.toggle("active");
    
})

listItems.forEach((item)=>{
    
 item.addEventListener("click",()=>{
    listItems.forEach(ele=>ele.classList.remove('link-active'));
     item.classList.add("link-active");
 })

})