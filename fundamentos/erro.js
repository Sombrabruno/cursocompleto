function tratarErroELancar(erro) {
    // tipos de erro abaixo
    // throw new Error('Erro bocaberta')
    // throw 10
    // throw true

}

function imprimirNome() {
    try{ //tentar que pode gerar um tipo de erro
        console.log(obj.name.toUpperCase()+ "!!!")
    } catch(e){ //tratar o erro ou mostrar mensagem usuario
        tratarErroELancar(e)
    } finally { // aparece sempre
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto'} // erro é o "name" e "nome"

imprimirNome(obj)