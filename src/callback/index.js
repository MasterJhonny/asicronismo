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
// var valor = 1
// console.log('primera llamada')
// function hacerllamada(valor) {
//     console.log(`segunda llamada ${valor}`)
// }

// for(let i = 0; i < 4; i++) {
//     setTimeout( () => hacerllamada(i), 3000);
// }

// console.log('taco 1')
// console.log('taco 2')
// setTimeout( () => console.log('Torta'), 0);
// console.log('taco 3')

// practice..
function suma(num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function calcular(callback){
    return callback()
}
console.log(resta(4, 4))
calcular(() => {
    setTimeout(() => console.log(suma(2, 5)), 0)
})
console.log(4)

function data(callback){
    console.log(new Date)
    setTimeout(() => {
        let dato = new Date;
        callback(dato);
    }, 3000)
}

function printDato(valor){
    console.log(valor)
}

data(printDato)