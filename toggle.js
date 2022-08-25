const button = document.getElementById("toggle");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");



button.onclick=function(){
    button.classList.toggle('light');
    body.classList.toggle('light');
    h1.classList.toggle('light');
}