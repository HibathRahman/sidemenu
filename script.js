const butt = document.querySelector("#btn");
const body = document.querySelector("body")
console.log(butt);
const show = document.querySelector(".sidebar--container");

butt.addEventListener("click" , function(){
    body.style.backgroundColor = "bisque"
    show.classList.toggle ("show-sidebar")
});