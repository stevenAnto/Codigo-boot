// let mi_name = prompt("Adivina mi nombre")

// while(mi_name.toLowerCase() != "josue"){
    
//     if (mi_name.toLowerCase()=== "josue"){
//         alert("Adivinaste mi nombre")
//         break;
//     }else {
//         let match = prompt("sigue intentando");
//         if(match === "josue"){
//             alert("adivinaste");
//             break;
//         }
//     }
// }

// let mi_nombre = prompt("adivina mi nombre");
// while (mi_nombre.toLowerCase()!= "anibal"){
//     mi_nombre = prompt("sigue intentando!!");
//     break;   
// }
// alert("Adivinaste")

// let mi_nombre=prompt("Adivina mi nombre");

// do {mi_nombre=prompt("sigue intentando");
// // if (mi_nombre=== "josue"){alert("adivinaste mi nombre")}
// }while(mi_nombre!== "steven");
// alert ("adivinaste  ")


// function adivina_mi_nombre(mi_nombre) {
//     mi_nombre =prompt("adivina mi nombre");
//     if (mi_nombre=== "josue"){alert("adivinaste mi nombre")
//     return}
//     else adivina_mi_nombre(mi_nombre)
    
// }

// adivina_mi_nombre()

//scope es el espacio disponible d emi codigo

// function ejemplo() {
//     let texto = "texto inicial";
//     function mostrartexto() {
//         alert(texto);  
//     }
//     mostrartexto();
// }
// ejemplo();

// function crearfuncion() {
//     let nombre = "pablo";
//     function mostrarNombre() {
//         alert(nombre)        
//     }
//     return mostrarNombre
// }

// let llamarMiFuncion = crearFuncion();
// llamarMiFuncion();

// function sumanum(x) { //es una funcion fabrica
//     // return function(y){
//     //     return x+ y
//     // }  
//     return(y)=> x+y  
// }

// let suma5 = sumanum(5);
// console.log(suma5)
// console.log(suma5(2))


// callbacks

function mostraralerta(){
    alert("Hola eso e sun callback")
}

const boton=document.querySelector("button");
boton.addEventListener("click",mostraralerta)

// let segundos=20 ;
// lista = [];
// function empezar_cuenta_atras(){
//     setInterval(function(){
//         segundos--;
//         imprmirsegundos();
//     },1000);
//     `\n`
// }

// function imprmirsegundos(){
//     lista.push(segundos)
//     console.log(segundos);
//     document.write(segundos);
    
// }

// document.write(empezar_cuenta_atras())
// console.log[lista]


//este es setinterval

// var tope=0;

//  function mensaje() {
 
//  console.log("hola desde javascript");
//  tope++;
//  if (tope>=10) {
//  clearInterval(intervalo);
//  }
//  }


 
//  function intervalo() {
 
//  intervalo=setInterval(mensaje,1000);
 
//  }

//  console.log(intervalo()) 