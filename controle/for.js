let contador = 1
while (contador <= 10){
    console.log(`contador while= ${contador}`)
    contador++
}
console.log('Fim 1 parte')

for(let i = 1; i<= 10; i++){
    console.log(`contador for= ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){ //conta por indices e nao por numero - ex indice 0, 1, 2, 3 e 4 neste caso
    console.log(`notas array = ${notas[i]}`)
}
    