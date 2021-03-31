let dias = ["Holaa", "Como", "Estas", "disculpa", "por", "moelstarte", "xd"];
let parrafo=document.querySelector("p")

// for(i in dias){
//     alert(dias[i]);
// }

// function nombre_dias() {
//     for(i in dias){
        
//         p=dias;
//         parrafo.textContent=p
//     }
    
    
// }

// function presiona_boton() {
//     nombre_dias()
    
// }

function suma_N_numeros(n) {
    let i=0;
    let resultado=0
    while(i<=n){
        
        resultado +=i;
        i++
    }
    console.log(resultado)
    document.write(`<p>${resultado}</p>`)
}

function pedir_un_numero() {
    a=prompt("ingresa un numero");
    suma_N_numeros(a) 
    
}

const boton=document.querySelector("button");
boton.addEventListener("click",pedir_un_numero)

// function creaMensaje() {
//     var mensaje = "“Mensaje de prueba”";
//     alert(mensaje)
//   }
// creaMensaje()

