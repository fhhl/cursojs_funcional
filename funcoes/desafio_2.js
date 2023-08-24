const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impresora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// filter, map, reduce

// 1) fragil: true

const getFrageis = item => item.fragil

const frageis = carrinho.filter(getFrageis)
console.log(frageis)

// 2) qtde * preco --> total
const getValores = item => item.qtde * item.preco
const valores = frageis.map(getValores)
console.log(valores)
// 3) média dos totais
console.log(valores.reduce((total, item) => total + item)/valores.length)

Array.prototype.meureduce = function(fn, inicial) {
    let acc = inicial
    for(let i = 0; i <this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i] 
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

console.log(valores.meureduce((total, item) => total + item)/valores.length)

