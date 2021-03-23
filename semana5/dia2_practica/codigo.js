let dias = ["Holaa", "Como", "Estas", "disculpa", "por", "moelstarte", "xd"];
let parrafo=document.querySelector("p")

// for(i in dias){
//     alert(dias[i]);
// }

function nombre_dias() {
    for(i in dias){
        
        p=dias;
        parrafo.textContent=p
    }
    
    
}

function presiona_boton() {
    nombre_dias()
    
}

const boton=document.querySelector("button");
boton.addEventListener("click",presiona_boton);



