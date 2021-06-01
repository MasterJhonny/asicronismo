// function suma(a, b) {
//     return a + b;
// }

// function calcular(a, b, callback){
//     return callback(a, b);
// }

// console.log(calcular(6, 2, suma))


// function data(callback){
//     console.log(new Date)
//     setTimeout(function(){
//         let date = new Date;
//         callback(date)
//     }, 3000);
// }

// function printDate(dataNow){
//     console.log(dataNow)
// }

// data(printDate)
var valor = 1
console.log('primera llamada')
function hacerllamada(valor) {
    console.log(`segunda llamada ${valor}`)
}

for(let i = 0; i < 4; i++) {
    setTimeout( () => hacerllamada(i), 3000);
}