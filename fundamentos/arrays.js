const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// console.log(valores[4]) dara "undefined" pois não tem no vetor

valores[4] = 10

console.log(valores[4]) // aparece o valor[4]
console.log(valores) // aparece todo os valores dentro do array / adiciona até o valores[4]
console.log(valores.length) //aparece quantos arrays existem neste caso no valores normal 4 + 1(valores[4]) = 5
// bom que tenha uma array para cada tipo, numeros , produtos, fornecedor, clientes
valores.push(20, 30, 40)
console.log(valores)
console.log("valores.pop tirou o array " + valores.pop()) // retira e mostra o ultimo valor array = 10
console.log(valores)
delete valores[0] // retira o array[0] neste caso o 7.7
console.log(valores)

console.log(typeof valores) // no javascript um array é um objeto