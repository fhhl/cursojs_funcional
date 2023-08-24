
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impresora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const qtdeMaiorQueZero = item => item.qtde > 0
const itensValidos = carrinho.filter(qtdeMaiorQueZero)
console.log(itensValidos)

// const qtdeMaiorIgualAZero = item => item.qtde >= 0
// const qtdeMuitoGrande = item => item.qtde >= 1000

const getNome = item => item.nome
const nomesItensValidos = carrinho
   .filter(qtdeMaiorQueZero)
   .map(getNome)

 console.log(nomesItensValidos)  

 Array.prototype.myFilter = function(fn) {
  const novoArray = []
  for(let i = 0; i < this.length; i++) {
      novoArray.push(fn(this[i], i, this))
  }
  return(novoArray)
 }

 console.log('meu filtro...')
 const nomesValidos = carrinho
   .myFilter(qtdeMaiorQueZero)
   .map(getNome)
 console.log(nomesValidos)  

