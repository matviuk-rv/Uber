var menu = document.querySelector(".hamburger");
var popup = document.querySelector(".header__menu");

menu.addEventListener("click", function(){
      menu.classList.toggle("hamburger__active");
      popup.classList.toggle("menu__active");
   })