const valor = 'Global'

function minhaFuncao(){
    console.log(valor) //pega o valor global
}
function exec(){
    const valor = 'Local'
    minhaFuncao() // chama o minhafuncao
}

exec() // ele apos trocal pra local, chama o minhaFuncao() e retorna a mostrar Global