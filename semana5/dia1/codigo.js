//objetivos
//es una coleccion de propiedades
//es una propiedad?
//es una propiedad compuesta de llaver key y value
//es un tipo de datos

// Miobjeto.nombredelapropiedad /// asi accedo a la propiedad de mi objeto

// let Miobjeto = new Object();

// Dos Maneras de declarar objetos
let miobjeto2 = {
    propiedad1: "Este es un valro extenso",
    propiedad2:"........",
    propiedad3: ".........",
}

// console.log(miobjeto2.propiedad1)

let comida_favorita = new Object();

comida_favorita.nombre= "Lomo Saltado"
comida_favorita.costo=20.45;
comida_favorita.rating=[1,2,3,4,5];
comida_favorita.estaDisponible = true;

// comida_favorita["nombre"]="pizza"
// console.log(comida_favorita["nombre"]);

function mostrarPropiedades(objeto, propiedadObjeto) {
    let resultado=" ";
    for (let elemento in objeto){
        if (objeto.hasOwnProperty(elemento)){
            resultado +=`${propiedadObjeto}.${elemento}=${objeto[elemento]}\n`
        }        
    }
    return resultado;
    
}

console.log(mostrarPropiedades(comida_favorita,"Mi dato es el siguiente "))

// function mostrar_propieda(objetox) {
//     let resultado ="";
//     for (elemento in objetox){
//         resultado += `${elemento} \n`
//     }
//     return resultado
    
// }

// console.log(mostrar_propieda(comida_favorita))

function mostrarValores(objeto) {
    let resultado = "";
    for (let elemento in objeto){
            resultado += `${objeto[elemento]}\n`
        }        
    return resultado;
}
    

console.log(mostrarValores(comida_favorita))

//Otra forma de enunciar objetos

function Carro(marca,modelo, anio){
    this.marca = marca;
    this.modelo  = modelo;
    this.anio = anio;
}

console.log(Carro.modelo)
