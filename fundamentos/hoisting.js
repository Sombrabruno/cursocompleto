function teste(){
    console.log("a = ", a)
    var a = 2 // sofre o hoisting e não da erro no js, mesmo dentro de uma função, somente uma curiosidade, nunca ponha antes
    console.log("a =", a)
}
teste()
// console.log("a = ", a) da erro pois a variavel não sai da função

console.log("b = ",b)
let b = 2 // erro pois o let não faz o hoisting
console.log("b =", b)