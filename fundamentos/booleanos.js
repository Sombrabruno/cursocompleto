let isAtivo = false //utiliza let apenas quando precisa alterar uma variável
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //negativa o 1 - tornando-o falso !true = falso , !falso = true
console.log(!true)
console.log(!false)

console.log('os verdadeiros..')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('os falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa')) //tendo um unico valor verdadeiro, ele passa verdadeiro "ou"

let nome = 'Bruno'
console.log(nome || 'Desconhecido') // caso não tenha nome ele aparece desconhecido

nome = '' //não precisa let no nome, porque ja foi criado
console.log(nome || 'Desconhecido') // caso não tenha nome ele aparece desconhecido