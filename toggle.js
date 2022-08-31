const button = document.getElementById("toggle");
const body = document.querySelector("body");
const a = document.getElementsByClassName


button.onclick=function(){
    button.classList.toggle('light');
    body.classList.toggle('light');
}

