var numero = 1
{
    var numero = 2
    console.log('dentro = '+numero) // se não for dentro de uma function, ele sobrescreve
}
console.log('fora = '+numero) // apenas fica um se tiver em let ou dentro de uma função

