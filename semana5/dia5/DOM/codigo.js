// const demoId = document.getElementById("demo");
// console.log(demoId)

// demoId.style.border="5px solid blue"
// const demoClass = document.getElementsByClassName("h2")

// demoClass[0].style.border = "2px dashed yellow"

// for(i in demoClass){
//     demoClass[i].style.border = "4px solid red";
// }

//seleccion por etiqueta

const demoTas = document.getElementsByTagName("article")
// console.log(demoTas)

// for (i=0;i<demoTas.length;i++){
//     demoTas[i].style.border = "1px solid orange"
// }

let i =0
while(i<demoTas.length){
    demoTas[i].style.border = "10px solid orange";
    i++
}

console.log(demoTas)

const demoQuery = document.querySelector("#demo-query");
console.log(demoQuery)

demoQuery.style.border="2 ox green"

// const demoQueryAll = document.querySelectorAll(".demo-query-all")
// demoQueryAll.forEach(elemento=>{
//     elemento.style.border = "1px solid pink"
// })

// const demoqeueryyallarray = Array.from(demoQueryAll)
// console.log(demoqeueryyallarray)

// demoqeueryyallarray.map(elemento=>{
//     elemento.style.border = "5px solid pink"
// })


const demoTitle = document.getElementById("titulo");

demoTitle.addEventListener("click",()=>{
    alert("Me clickeaste")
})