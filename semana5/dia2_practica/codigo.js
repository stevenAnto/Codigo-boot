let dias = ["Hola", "Como", "Estas", "disculpa", "por", "moelstarte", "xd"];

// for(i in dias){
//     alert(dias[i]);
// }

function nombre_dias() {
    for(i in dias){
        document.write(dias[i]+" ");
    }
    
}

function presiona_boton() {
    nombre_dias()
    
}

const boton=document.querySelector("button");
boton.addEventListener("click",presiona_boton);



