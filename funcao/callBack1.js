const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // usa o forEach para buscar

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})