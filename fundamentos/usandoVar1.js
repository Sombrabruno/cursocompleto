{{{{ var sera = "Será?"}}}}

console.log(sera)

function teste(){
    var local = 123 // quando definir variavel dentro da função não consegue acha-lo fora dela
    console.log(local)
}

teste()
// variavel ou é nivel global ou dentro de funções, no caso do global ela é modificada a qualquer hora, dentro da função ele não é alterado.

