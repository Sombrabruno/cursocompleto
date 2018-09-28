const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao) //o this chama essa saudacao
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // undefinido, conflito entre paradigmas, ele ja não chama o this de pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) // consegue puxar o this de dentro da função
falarDePessoa() // bind amarra um objeto para seu dono

