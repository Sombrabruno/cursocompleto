let valor // só fez uma variavel mas não declarou, se torna undefined
console.log(valor) // undefined quando não tem valor algum
// console.log(valor2) vai dar erro por que ela não foi declarado

valor = null //ausencia de valor, neste caso voce definiu que é nulo
console.log(valor)

// é interessante sempre que for zerar uma variável apontem como NULO

// console.log(valor.toString()) da erro pois é impossivel ler algo em Nulo

const produto = {}
console.log(produto.preco) //Undefined porque não esta

produto.preco = 3.50
console.log(produto.preco) // atribuiu valor ao produto

produto.preco = undefined // evitar atribuir Undefined
console.log(!!produto.preco) //retorna false pois é indefinido
console.log(produto) // mostra que o preco do objeto produto é undefined

produto.preco = null // sem preço
console.log(!!produto.preco) // retorna false pois é nulo
console.log(produto) // mostra que o preço do objeto produto é nulo