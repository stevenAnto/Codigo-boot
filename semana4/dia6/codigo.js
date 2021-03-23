// function sum(a,b){
//     let total=a+b;
//     let ponerhtml=document.write(`${total}`)
//     return ponerhtml
// }
// function sum(a,b){
//     let total=a+b;
    
//     return total
// }
// n raizcuadratica(a,b,c) {
//     let    x=(-b+(b**2-4*a*c)**(1/2))/(2*a)
//     console.log(x)
//     let html=document.write(`Estos vale ${x}`)
//     return html
// }

// raizcuadratica(2,8,3)function restar(a,b){
//     let total=a-b;
    
//     return total
// }
// function multiplicacion(a,b){
//     let total=a*b;
    
//     return total
// }

// functio

// function ecu_cuadra(a,b,c) {
//     let discri=b**2-4*a*c;

//     let x=0;
//     if(discri>0){
//         x=(-b+(Math.sqrt(discri)))/2*a
//         let formual=document.write9("esto vale x:",x)
//         return formual
//     }
//     else {"el discriminante es menor a cero"   } 
// }

// function bin_cuarta(a,b) {
//     let rpta=a**4+4*a**3*b+6*a**2*b**3+b**4
//     console.log(rpta)
//     let htmll= document.write(`El Binomio a la cuarte de dichos val son: ${rpta}`)
    
// }


// bin_cuarta(4,5)










// let contador=0;

// while( contador<10){
//     console.log(contador);
//     contador++;
// }

// function recursividad(i) {
//     if(i>=10){
//         return;
//     }
//     console.log(i);
//     recursividad(i+1);
// }

// recursividad(0)


// function sumarcuadrados(a,b) {
//     function cuadrado(x) {
//         return x*x
        
//     }
//     return cuadrado(a)+ cuadrado(b)
    
// }

// console.log(sumarcuadrados(5,3))

// function saludo_compuesto(msg1,msg2) {
//     function mostrar_saludo1(msg1) {
//         return msg1
        
//     }
//     function mostrar_saludo2(msg2) {
//         return msg2
//     }
    
//     return mostrar_saludo1(msg1)+" "+mostrar_saludo2(msg2);
// }

// console.log(saludo_compuesto("Hola como estas","es un saludo de bienvenidad"))

const datos=[
  {
      nombre : "stv",
      edad :  "45",
      altura: 1.85,
  },
  {
    nombre : "stv",
    edad :  "45",
    altura : 1.85 ,
   },
   {
    nombre : "stv",
    edad :  "45",
    altura : 1.85 ,
   },

]

function generarid(nombre,edad) {
    console.log(typeof(nombre));
    return nombre+(edad%2);
    
}

console.log(generarid(datos[0].nombre,datos[0].edad));