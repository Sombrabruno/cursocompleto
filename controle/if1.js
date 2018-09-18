function soBoaNoiticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
    else{
        console.log('Reprovado com '+ nota)
    }
}

soBoaNoiticia(8.1)
soBoaNoiticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ...'+valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) // daqui pra cima todos falsos
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})