function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!')
}

// Passar uma função como parámetro para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// Retornar uma função a partir de uma oura função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    } 
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const potencia3ElevadoA4 = potencia(3)(4)
console.log(potencia3ElevadoA4)
