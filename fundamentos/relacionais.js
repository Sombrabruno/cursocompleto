console.log('01)', '1' == 1) // == number
console.log('02)', '1' === 1) // === estritamente igual, não pq o primeiro 1 é string
console.log('03)', '3' != 3) // 3 é diferente de 3? não, são iguais
console.log('04)', '3' !== 3) // !== estritamente diferente, porque o primeiro 3 é string
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2 )
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// via de regra utilizar o estritamente igual (===)