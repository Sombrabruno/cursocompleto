let dobro = function(a){
    return 2 * a
}

dobro = (a) => { // eu acho que vou usar esta
    return 2 * a
}

dobro = a => 2 * a // return implicito

// todos são iguais , só diminui-se com o arrow
console.log(dobro(Math.PI)) // dobro do PI

let ola = function(){
    return 'Ola'
}

ola = () => 'Olá' // return implicito

console.log(ola())