// armazenando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

// armazenando uma função arrow em uma variável

const soma = (a,b) => { // a palavra "function" é trocada por a seta "=>"
    return a + b
}

console.log(soma(2,3))

// retorno implicito

const subtracao = (a, b) => a - b // quando é apenas um retorno, neste caso o return a-b porem não é necessário pois ja esta aqui
console.log(subtracao(2,3))

const imprimir = a => console.log(a)
imprimir("legal d+")