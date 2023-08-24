// arrow function
const felizNatal = () => console.log('Feliz Natal!!')
felizNatal() 

const saudacao = (nome) => "Fala " + nome + " blz?!!!"
// se tem apenas um parámetro, dá para retirar os paréntesis
const saudacao2 = nome => "Fala " + nome + " blz?!!!"
// se usar backchicken
const saudacao3 = nome => `Fala ${nome} blz?!!!`

console.log(saudacao("Maria"))
console.log(saudacao2("João"))
console.log(saudacao3("Fernando"))

//const somar = functrion array {
//const somar = (array) => {
const somar = array => {
    let total = 0
    for(let n of array) {
        total += n
    }
    return total
}

// parámetro rest
const somar2 = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(somar2(1, 2, 3, 4, 5))
console.log(somar2(1, 2, 3, 4, 5, 6, 7, 8))
console.log(somar2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    } 
}

let potenciaArrow = base => exp => Math.pow(base, exp)
console.log(potenciaArrow(2)(8))

// this na arrowfunction não funciona o this, tem que ser function()
Array.prototype.ultimoElemento = function() {
    console.log(this[this.length-1]) // inseriu .ultimoElemento no Array
}

Array.prototype.primeiroElemento = function() {
    console.log(this[0]) // inseriu .primeiroElemento no Array
}

const numeros = [1, 2, 3]
numeros.ultimoElemento()
numeros.push(4, 5, 6, 7)
numeros.ultimoElemento()
numeros.primeiroElemento()

