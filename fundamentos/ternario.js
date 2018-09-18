const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//1 parte expressão, que retornara verdadeiro ou falso
// 2 parte caso for verdadeiro retorna o primeiro apos ?
// 3 parte retorna caso for falso o ultimo atributo

console.log(resultado(7.1)) // aprovado
console.log(resultado(6.1)) // reprovado