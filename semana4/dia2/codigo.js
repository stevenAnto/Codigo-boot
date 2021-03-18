// if (){

// }else if(){

// }else if(){

// }
// let condicion=true;
// if(condicion===false){
//     console.log("Hola amigos, bienvenido sa Codigo!!")
// }else{
//     console.log("Y que estas esperando")
// }
// let lenguaje_program="python"
// if(lenguaje_program=="python"){
//     console.log("python es asombros")
// }else if(lenguaje_program=="javascript"){
//     console.log("Javasript tambien lo es")
// }else if(lenguaje_program=="php"){
//     console.log("wow, eres de los bravos")
// }else{
//     console.log("que aun no sabes algun lenguaje")
// }

// let cancion_favorita="Counting Stars"

// if(cancion_favorita=="Counting Stars"){
//     console.log("Lately, I've been, I've been losing sleep Dreaming about the things that we could be But baby, I've been, I've been…")
// }else if(cancion_favorita=="Payphone"){
//     console.log("I've wasted my nightsYou turned out the lightsNow I'm paralyzedStill stuck in that time, when we called it love zBut even the sun sets in paradise")
// }else if(cancion_favorita=="Just The Way You Are"){
//     console.log("When I see your faceTheres not a thing that I would change'Cause you're amazing")
// }else{"No tenemos esa cancion :/"}

// function imprimeMiNombre(nombre){
//     if(nombre ===""){
//         return "Debes ingresar un nombre";
//     }
//     else if(nombre===undefined){
//         return "Debes ingresar un valor valido"
//     }
//     return `Mi nombre es ${nombre}`

//     }

// console.log(imprimeMiNombre("steve"))
// console.log(imprimeMiNombre())
// console.log(imprimeMiNombre(   ))

// function calcularmisañosperro(edad) {
//     if (edad===undefined){
//         return "Debes ingresar un valor valido";
//     }
//     if(edad>0 && edad<100){
//         return `Mi edad en años perro es ${edad*7}`
//     }
//     if(edad===0){
//         return "Ingresa un numero valido"
//     }

// }

// console.log(calcularmisañosperro())
//     console.log(calcularmisañosperro(24))
//     console.log(calcularmisañosperro(""))

// function frases_del_tiempo(clima) {
//     if (clima===undefined){
//         return "Debes ingresar un valor valido";
//     }
//     if(clima==="lluvioso"){
//         return `Tu besos frios como la lluvia`
//     }
//     if(clima==="soleado"){
//         return `Muy bonito clima`
//     }
//     if(clima===""){
//         return "Debe ingrear un clima"
//     }

// }

// console.log(frases_del_tiempo())
// console.log(frases_del_tiempo("lluvioso"))
// console.log(frases_del_tiempo("soleado"))
// console.log(frases_del_tiempo(""))

let seleccionar = document.querySelector("select");
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === "soleado") {
    parrafo.textContent = "gaaa";
  } else if (eleccion === "lluvioso") {
    parrafo.textContent = "Esta lloviendo";
  } else if (eleccion === "nevado") {
    parrafo.textContent = "sal abrigado";
  } else if (eleccion === "nublado") {
    parrafo.textContent = "no slgas con lentes";
  } else {
    parrafo.textContent = "di algo";
  }
}
