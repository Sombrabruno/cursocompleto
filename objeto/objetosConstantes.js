// pessoa -> 123 (endereço de memória)
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' // não mudou a referencia mas mudou a constante
console.log(pessoa)

// pessoa -> 456 -> {...} (aponta para novo objeto)
//pessoa = { nome: 'Ana'} // nao consegue atribuir outro objeto para constante
//console.log(pessoa)

Object.freeze(pessoa) // congelar o objeto pessoa

pessoa.nome = 'Maria' // foi congelado acima e continua pedro!
pessoa.end = 'Rua ABC' // não consegue sequer atribuir algo
delete pessoa.nome // não deleta pois esta congelado

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) // Ja inicia congelado
pessoaConstante.nome = 'Maria' // não altera pois foi congelado
console.log(pessoaConstante)
