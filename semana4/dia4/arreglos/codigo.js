// let arreglo=[1,2,3,4,5]

// let alumnos_codigo=["pepito","maria","Jose"]

// let mi_suerte=[true,false, true]

let mi_arreglo=["elemento1","elemento2","elemento3"]
mi_arreglo[5]  //undefined
mi_arreglo.length //longitud o cantidad de elementos
mi_arreglo[mi_arreglo.length-1]
mi_arreglo.push("elemento4")

console.log(mi_arreglo[mi_arreglo.length-1])

mi_arreglo.pop() // ellimina un elemento
console.log(mi_arreglo[mi_arreglo.length-1])

mi_arreglo.unshift("elemento0")//agrega un elemento primero

console.log(mi_arreglo[0])

mi_arreglo.shift() //quitar el primer elemento

console.log(mi_arreglo[0], "este es mi primer elemento")

//saber el indice de  de cierto elemento con index

console.log(mi_arreglo.indexOf("elemento1"))
