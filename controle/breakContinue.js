const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if ( x== 5) 
    break // breka o laço e sai
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue // não usa o indice 5 e continua
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){ // não use, fica horrível
    for(b in nums){
        if (a == 2 && b == 3)
        break externo
        console.log(`Par = ${a},${b}`)
    }
}