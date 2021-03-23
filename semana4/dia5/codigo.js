// for(let pasos=0;pasos<6;pasos++){
//     console.log("camina defrente")
// }

// for(let num=0;num<301;num=num+2){
//     console.log(num)
// }

// for (let i=0;i<1001;i++){
//     if(i%3==0 || i%5==0 ||i%7==0)
//     console.log(i)
// }
// var lista=[]
// let suma=0
// for(let i=0;i<100;i++){
//     if(i%3==0 || i%5==0 ){
//         lista.push(i);
//         suma=suma+i;
//     console.log(i)
//     }
// }
// console.log(lista)
// console.log(suma)


// let contador=0
// while (contador<20) {
//     console.log(contador);
//     contador++;
// }
// let suma=0
// let contador=0
// while(contador<100){
//     contador++;
//     if(contador%3==0 || contador%5==0 ){
//         console.log(contador)
//         suma =suma+contador;
//     }
// }
// console.log(suma)


let alumnos_favoritos =["stv","Margio","Ricardo"]
let informacion="Mis alumnos favorits son : "

const texto=document.querySelector("p");

for (let i=0;i<alumnos_favoritos.length;i++){
    informacion+=alumnos_favoritos[i]+ " ,"
}
console.log(informacion)

texto.textContent=informacion;






//recursividad

