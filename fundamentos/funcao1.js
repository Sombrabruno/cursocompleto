// função sem retorno
function imprimirSoma(a, b){ //definir bons nomes nas funções sempre
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // vai dar undefined, resultado NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // irá pegar somente os dois primeiros no caso o 2 e o 10
imprimirSoma() // NaN pois não existe numeros

//função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3)) // somou 2 e 3
console.log(soma(2)) // retorna 2 pois o b é 1
console.log(soma()) // NaN pois o primeiro valor (a) é obrigado a ser passado