const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1)
console.log(peso2)

console.log(Number.isInteger(peso1)) //saber se é numero inteiro
console.log(Number.isInteger(peso2)) //também é valor inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //seta a quantidade de casas que ficam apos o ponto
console.log(media.toString()) //mostra o valor de constante pq constante não muda
console.log(media.toString(2)) //transforma em valor binario
console.log(typeof media) //mostra tipo do media