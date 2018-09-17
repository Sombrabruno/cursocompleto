const [a] = [10] // utilizando o destruturador com conchete
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7 , 9 , 8]
console.log(n1, n3, n5, n6) // n5 não tem, no caso undefined

const [, [, nota ] ] = [[, 8, 8], [9, 6, 8]] //pega apenas o numero 6 pois é a casa que é mencionada antes no array como "nota" 
console.log(nota) // não é usual usar este
