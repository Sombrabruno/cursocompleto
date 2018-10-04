//IIFE -> Imediately Invoked Function Expression

(function(){
    console.log('Sera executado na hora!')
    console.log('Foga do escopo mais abrangente')
})() //precisa ter esses parenteses para executar

// funcão anonima para fugir do escopo global
// tudo sera invocado, como se fosse diretamente no arquivo
// como abaixo

console.log('Sera executado na hora!')
console.log('Foga do escopo mais abrangente')