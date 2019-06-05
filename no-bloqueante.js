//Obtenemos la fecha en milisegundos
let myTime = Date.now()
//Agregamos 3 segundos a la fecha
const endTime  = myTime + 3000
// Función que imprime 2
function printTwo (){
    console.log(2)
}

console.log(1)
while (myTime < endTime) {
    myTime = Date.now()
}
// Este código manda el event loop la función
setTimeout(printTwo, 0)
console.log(3)
