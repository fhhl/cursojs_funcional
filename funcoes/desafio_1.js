// somar (3)(4)(5)

const somaDoisNumeros = ( n1, n2 ) => n1 + n2
let soma3e4 = somaDoisNumeros(3, 4)
console.log(somaDoisNumeros(soma3e4, 5))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function operacaoDe2Fatores(operacao) {
    return function(n1, n2) {
        switch(operacao) {
            case '+':
                return(n1 + n2)
            case '-':
                return(n1 - n2)
            case '*':
                return(n1 * n2)    
        }
    } 
} 

const somar = operacaoDe2Fatores('+')
const diminuir = operacaoDe2Fatores('-')
const multiplicar = operacaoDe2Fatores('*')

console.log(somar(3, 7))
console.log(diminuir(3, 7))
console.log(multiplicar(3, 7))

// exemplo do curso

function somar2(a, b) {
    return a + b
}

function subtrair2(a, b) {
    return a - b
}

function multiplicar2(a, b) {
    return a * b
}

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    } 
}

 const r1 = calcular(10)(5)(somar2)
 const r2 = calcular(10)(5)(multiplicar2)
 const r3 = calcular(10)(5)(subtrair2)

 console.log('=======================')
 console.log(r1)
 console.log(r2)
 console.log(r3)
 
 console.log('=======================')
 function operacao(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
 } 

 const operacaoAB = operacao(3)(4)
 console.log(operacaoAB(13))
 console.log(operacao(10)(20)(30))