// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// console.log(myFish)

// myFish.splice(3,1)

// console.log(myFish)

// myFish.splice(3,1)[0]

// console.log(myFish)


// console.log(permutator[1 , 2, 3])


function factorial(n) {
    let _factorial =n

    while(--n){
        _factorial*=n
    }
    return _factorial
    
}

// console.log(factorial(0))

// FUNCIONA ORDENACION
/*a= [ 'a','b','c','d','e','f']

function permutarion(inputarr) {
    let _permutations= [];
    const permute= (arr, permutation=[])=>{
        if (arr.length===0){
            _permutations.push(permutation)
            return
        }
        for (let i in arr){
            let curr =arr.slice()
            let next =curr.splice(i,1)
            permute(curr,permutation.concat(next))
        }
    }
    permute(inputarr)
    return _permutations

}

console.log(permutarion(a))*/
// let i=1
// let suma=0
// for (i;i<10;i++){
    
//     if (i%3==0 || i%5==0){
//         suma = suma+i
//         console.log(i)
       
    

//     }
    
// }
// console.log(suma)

// let n1=1
// let n2=1
// let result =0
// let lista=[]
// let lista2=[]
// let suma=0
// for(let i=0;i<31;i++){
//     result= n1+n2 ;
//     n1=n2;
//     n2=result
//     // console.log(result)
//     lista.push(result)
    

// }
// console.log(lista)
// for(i in lista){
//     if(lista[i]%2==0){
//         lista2.push(lista[i])
//         // console.log(lista[i])
        
//     }
// }
// console.log(lista2)
// lista2.forEach(function (numero) {
//     suma+=numero
    
// })
// console.log(lista[lista.length-1])
// console.log(suma)

// la suma de 5 numeros ingresados por uno
// let suma=0
// let numero_alumnos=5
// let i=0
// while (i<numero_alumnos) {
//     Edad=parseInt(prompt("ingresa una edad"))
//     suma+=Edad
//     i++
    
// }
// console.log(suma)


//AHORRO
/*let ahorro=0
let veces_ahorro=parseInt(prompt("cuantas veces ahorrar"))
let i=0
while (i<veces_ahorro3  ) {
    c_ahorro=parseInt(prompt("ingresa cantidad:"))
    ahorro+=c_ahorro
    i++
    console.log(ahorro)
}*/
// SUCESION FIBONACCI

/*let n_sucesion=parseInt(prompt("cuantos numeros tendra la sucesion"))
a=0
b=1
// console.log(a,b)
let i=1
while (i<= n_sucesion-2) {
    c=a+b
    console.log(c)
    a=b
    b=c
    i++
    
}*/

//PUNTO DE ENCUENTRO

/*let ka =70
let kb=150
let d=kb-ka
i=0
while (d>0) {
    ka++;
    kb--;
    d=kb-ka
    console.log(ka,kb,d)
    
}*/

//DETERMINAR SALARIO

// let salario=1500
// let i=0
// while(i<6){
//     salario=1.1*salario
//     console.log(salario)
//     i++
// }


// let Monto_incial=parseInt(prompt("Ingrese Monto inicial"))
// let Numero_de_depositos=parseInt(prompt("Cuantas veces ahorrara?, sin contar el inicial"))
// let Total_Mensual=0
// let tasa= 0.04
// let Acumulado=0
// Ahorro_mens_acumula=0

// let i=0
// while (i<Numero_de_depositos) {
//     let = Monto_Ah_Mensual=parseInt(prompt("Ingrese monto a Ahorrar"))
//     console.log(Monto_Ah_Mensual)
//     Ahorro_mens_acumula= Ahorro_mens_acumula+Monto_Ah_Mensual
//     console.log(Ahorro_mens_acumula)
//     Total_Mensual=Monto_incial*((1+tasa)**(1/Numero_de_depositos))+Ahorro_mens_acumula*((1+tasa)**(1/Numero_de_depositos))
//     console.log(Ahorro_mens_acumula*((1+tasa)**(1/Numero_de_depositos)))
//     console.log(Total_Mensual)
//     i++
   
// }

// console.log(Acumulado)




// funciona esponencial e**x
// function n_exponenecial(x,numero_termino) {
//     let i=1
//     let termino=0
//     let suma_termino=0
//     while(i<=numero_termino){
//         termino=x**i/factorial(i)
//         console.log(termino)
//         suma_termino=suma_termino+termino
//         i++
//     }
//     console.log("La suma total es:",1+suma_termino)
    
// }

// n_exponenecial(1,50)
