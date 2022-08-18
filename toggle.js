const button = document.getElementById("toggle");
const body = document.querySelector("body");


button.onclick=function(){
    button.classList.toggle('normal');
    body.classList.toggle('normal');
}