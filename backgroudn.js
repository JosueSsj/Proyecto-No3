
 const colores =["red","aqua","green","pink","gold","yellow","orange","gold","gray","Purple","blue","brown"];

function Iniciar()
{
    const body = document.querySelector("body");
    const btn = document.querySelector("button");
   

    btn.addEventListener("click",generate); 
}

function generate()
{
    let nameColor = document.getElementById("color") 
    let aleatorio = Math.floor(Math.random()*colores.length);
    let ColorE =colores[aleatorio];
    document.body.style.background= ColorE;
    nameColor.innerHTML=ColorE;
}

window.addEventListener("load", Iniciar)