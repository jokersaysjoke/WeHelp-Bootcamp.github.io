const button = document.getElementById("toggle");
const body = document.querySelector("body");



button.onclick=function(){
    button.classList.toggle('light');
    body.classList.toggle('light');
}

mediumZoom('.zoom',{
    margin: 50
})