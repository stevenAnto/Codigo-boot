//Las clases en Js son funciones, con sintaxis especial


const x = function () {
    
}

//clase
const clase = class{}

console.log(Object.getPrototypeOf(x))
console.log(Object.getPrototypeOf(clase))

const constructorDeUnaFuncion = new x()

const clase2=new clase()