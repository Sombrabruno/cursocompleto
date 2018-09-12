const nome = 'Bruno'
const concatenacao = 'Ola ' + nome + '!'

console.log(concatenacao)
//utiliza-se crase e não aspas simples
const template = ` 
    Olá
    ${nome}!`

console.log(template)

//colocar expressões dentro dos templates
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // uppercase para por todas as letras em maiusculas

console.log(`Ei... ${up('cuidado')}`) // utiliza da variavel up para tornar as letras em maiuscula
// para chamar uma função em um template tem que usar o $ e ser com cráse

