// const ahora = new Date();
// console.log(ahora)

// const milisegundos= ahora.getTime(); //
// console.log(milisegundos)

// const fechazero= new Date(0)

// console.log(fechazero)

// //51*31557600000

// const variable =new Date(milisegundos)
// console.log(variable)

// const fechaString= new Date("July 28 1821 12:00")

// console.log(fechaString)


// const anio = fechaString.getFullYear();
// const mes = fechaString.getMonth();
// const diaMes = fechaString.getDate(); //0-31
// const diaSemana = fechaString.getDay(); //0-6

// fechaString.setFullYear("1824")

// function obtenerEdad(anioNacimiento) {
    
//     const fechaActual = new Date();
//     const anio = fechaActual.getFullYear()

//     return  ((anio - anioNacimiento))
    
// }

// console.log(obtenerEdad(1990))

// function restarFechas(fecha) {
//     let a;
//     let b;
//     let c;

//     const FechaActual = new Date ();
//     const anio= FechaActual.getFullYear()
//     const month= FechaActual.getMonth()
//     const days = FechaActual.getDate()
//     a=anio-fecha.getFullYear()
//     b=month-fecha.getMonth()
//     c=days-fecha.getDate()
//     return(a,b,c)
// }

// console.log(restarFechas("July 28 1821 12:00"))

function FechaCompleta(Fecha){
    let cumple = {
        dia:0,
        mes:0,
        anio:0,
    };
    
    const fechaActual = new Date();
    Fecha = new Date(Fecha);
    const anio = +(fechaActual.getUTCFullYear()-Fecha.getFullYear());
    const mes = Fecha.getMonth()+1;
    const dia = Fecha.getDate();

    cumple.anio = anio
    cumple.mes = mes
    cumple.dia = dia
    
    return `
    dia :${cumple.dia},
    mes :${cumple.mes},
    anio:${cumple.anio}`
} 


const miCumple=FechaCompleta("July 28 1821 12:00")

console.log(miCumple)

function calcularAreaCirculo(radio) {
    return Math.PI*Math.pow(radio,2)
    
}

console.log(calcularAreaCirculo(5))

let numeroMayor =Math.max(1,2,31,4,5,10.1)

console.log(numeroMayor)

let arrayNumeros =[23,43,56,12,40]
console.log(...arrayNumeros) //este es el spread operator
console.log(arrayNumeros)