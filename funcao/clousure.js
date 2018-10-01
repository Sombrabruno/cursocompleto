// clousure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas á função

// contexto léxico em ação

const x = 'Global' // não le esse pois le sempre a função

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // procura na memória, é o escopo que envolve a função
