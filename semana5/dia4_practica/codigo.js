// function par_impar(number) {
//     if(number%2 == 0 ){
//         console.log("Es un numero par")
//     }
//     else{console.log("Es numero impar")}
    
// }

// par_impar(5)


// function comparara_mayusculas_minus(string) {
//     if(string==string.toUpperCase()){
//         console.log("tiene pura mayusculas")
//     }
//     else if(string==string.toLowerCase()){
//         console.log("tiene minusculas")
//     }
//     else{console.log("el texto tiene mayusculas y minusculas")}
// }

// comparara_mayusculas_minus("hola")






// function es_palindramo(letra) {
//     let sin_espacios=letra.split("")
//     let reversoo = sin_espacios.reverse();
//     if(sin_espacios==reversoo){
//         console.log("es un palindramo")
//     }
//     else{console.log("noes palindramo")}

    
// }

// console.log(es_palindramo("La ruta nos aporto otro dgso natural"))

// // let resultado = 1
// // let numero = 6

// // do{resultado*=numero;
// // numero--;}while(numero>0)

// // console.log(resultado)

// function calculo_factorial(numero) {
//     let resultado=1;
    
//     do{resultado*=numero;
//        numero--;}while(numero>0);
//     return resultado
    
// }

// console.log(calculo_factorial(6))

// let persona = {
//     nombre: ['Bob', 'Smith'],
//     edad: 32,
//     genero: 'masculino',
//     intereses: ['música', 'esquí'],
//     bio: function () {
//       alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
//     },
//     saludo: function() {
//       alert('Hola, Soy '+ this.nombre[0] + '. ');
//     }
//   };

//   persona.nuevoobj

//   

function createNewPerson(name) {
    let obj={}
    obj.name=name;
    obj.greeting = function () {
        console.log("hola soy:", this.name)
        
    }
    return obj;
    
}

let steven=createNewPerson("Esteven")
console.log(steven.name);
console.log(steven.greeting)