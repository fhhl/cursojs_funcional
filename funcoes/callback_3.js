
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = n => n[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impresora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getNome = (n => n.nome)
const getValor = (n => (n.qtde * n.preco))

console.log(carrinho.map(getNome))
console.log(carrinho.map(getValor))

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return(novoArray)
}
 

console.log(nomes.meuMap(primeiraLetra))

