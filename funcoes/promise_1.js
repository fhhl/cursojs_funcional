function primeiroElemento(array) {
    return array[0]
}


let p = new Promise(function(resolve) {
    // cumprirPromessa({
    //     x: 3,
    //     y: 4,
    // })
    resolve([ 'Ana', 'Bia', 'Carlos', 'Daniel'])
})

// p.then(function(valor) {
//     console.log(valor.x)
// })



// .then(valor => valor[0])
// .then(primeiro => primeiro[0])
// .then(letra => letra.toLowerCase())
// .then(letraMinuscula => console.log(letraMinuscula))
.then(primeiroElemento)
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
//.then(letraMinuscula => console.log(letraMinuscula))
.then(letraMinuscula => letraMinuscula)
.then(console.log)
