const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// pode criar a função Factory
// Factory Simples

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())
