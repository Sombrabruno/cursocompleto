const nome = "Bruno"

console.log(nome.charAt(4)) // 0=B 1=R 2=U 3=N 4=0
console.log(nome.charAt(5)) //nao aparece nada mas nao para a execução do código
console.log(nome.charCodeAt(3)) //valor unicode
console.log(nome.substring(1)) // a partir do indice 1 até o final
console.log(nome.substring(0,3)) // foi do indice 0 até o indice 3 mas não incluindo o 3

console.log('Nome '.concat(nome).concat("!")) //nome nesse caso é um valor que não é guardado em uma constante
console.log('Nome ' + nome + "!") //bem melhor do que a parte acima
console.log(nome.replace('u', 'e')) //alterou o u por e

console.log('Ana,Maria,Pedro'.split(',')) // ajeita em um array


