// let apellidos =["ramos","mesa","vargas"]

// // let primerApellido= apellidos[0]
// // let segundoApellido= apellidos[1]
// // let tercerApellido= apellidos[2]

// let [Apellido1,Apellido2,Apellido3]=apellidos

// console.log(Apellido1)

// let [manzana, pera]= ["manzana","pera"];
// console.log(manzana);
// //  let [ saludo,,,nombre]=["Hola","yo","soy","dayanita"]

//  //sesiones 
//  let [a,... restoDeElementos] = ["a","e","i","u"]
//  console.log(a)
//  console.log(restoDeElementos)

//  let peru={
//      nombreof:"Republica de Peru",
//      gentilicio:"Peruano",
//      poblacion:"33 millonez"
//  }

//  //let nombrePais =peru.nombreof

//  let {nombre,gentilicio,poblacion}=peru

//  console.log(nombre)


//  let peru={
//     nombreof:"Brasil",
//     gentilicio:"brasileño",
//     poblacion:"211 millones"
// }

// //let nombrePais =peru.nombreof

// let {nombreof,gentilicio,poblacion}=peru

// // console.log(nombreof)

// let { nombreB, gentilicioB, poblacionB } = {
//     nombreOf: "Brazil",
//     gentilicio: "Brasileño",
//     poblacion: "211 millones",
//   };

let arrayDeUsuarios = [
    { nombre: "Paul", edad: 21, colorFav: "verde" },
    { nombre: "Marie", edad: 31, colorFav: "azul" },
    { nombre: "Jhon", edad: 16, colorFav: "rojo" },
    { nombre: "Carla", edad: 51, colorFav: "dorado" },
    { nombre: "Paula", edad: 11, colorFav: "verde" },
    { nombre: "Mario", edad: 41, colorFav: "azul" },
    { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
    { nombre: "Carlos", edad: 41, colorFav: "dorado" },
    { nombre: "Paulina", edad: 2, colorFav: "verde" },
    { nombre: "Marcos", edad: 65, colorFav: "azul" },
    { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
    { nombre: "Jimena", edad: 71, colorFav: "dorado" },
  ];

  let [primero,,,,,,,,,,,ultimo]=arrayDeUsuarios
  console.log(primero.nombre)
  console.log(ultimo)