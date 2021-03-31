window.location
console.log(window.location)
console.log("Esta es la URL del apagina:",location.href)
console.log("Este es el hostname:",location.hostname)
console.log("Este es el host:",location.host)
console.log("Este es mi path(ruta):",location.pathname)
console.log("este es el protocolo que uso:",location.protocol)

// let contador=0
// let intervalo =setInterval(()=>{
//     console.log("Hola Munda")
//     contador++
//     if(contador ===3){
//         clearInterval(intervalo)
//         }
// },2000);

setTimeout(() => {
    console.log("Hola mundo")
    
}, 3000);

//localStorage
//almacenamiento local

window.localStorage.setItem("contrasenias","1234")
let contra=window.localStorage.getItem("contrasenias")

console.log(contra)

let profile = window.localStorage.setItem("tema","claro")

window.localStorage.removeItem("contra")//borro un elemento
window.localStorage.clear() //borro todo

if (window.confirm("Deseas eliminar todas las variables")){
    alert("las variables fueron eliminadas")
    window.localStorage.clear();
}
