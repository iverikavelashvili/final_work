let burger = document.querySelector(".header_burger")
let mobilemenu = document.querySelector(".menu")
let xmark= document.querySelector(".header_xmark")

burger.addEventListener("click", ()=>{
    mobilemenu.classList.add("menushow");
    xmark.style.display = "block";
    burger.style.display = "none";
    
})
xmark.addEventListener("click", ()=>{
    mobilemenu.classList.remove("menushow");
    xmark.style.display = "none";
    burger.style.display = "block";
    
})




