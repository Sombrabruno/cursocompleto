function Pessoa() {
    this.idade = 0

    // pode encontrar
    //const self = this
    // trocar para self.idade++
    // trocar o console.log(self.idade) para funcionar


    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // 1000milisegundos represnta 1 segundo // dispara outra função a partir de um intervalo
} // se não utilizar o bind, nao da

new Pessoa