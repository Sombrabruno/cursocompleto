console.log(soma(3,4)) // direto a de baixo, ela carrega as funções primeiro, sendo assim não importa em qual linha que foi chamada a função
// console.log(sub(3,4)) não funciona pq ainda não foi declarado, ela está em um constante "sub"
// console.log(mult(3,4)) não funciona pq ainda não foi declarado, ela está em um constante "mult"

// function declaration / tradicional
function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
} 

// named function expression
const mult = function mult(x,y) {
    return x * y
}

console.log(sub(3,4))
console.log(mult(3,4))
