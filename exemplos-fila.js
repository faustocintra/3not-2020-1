// const Queue = require('./lib/Queue')
const Queue = require('./lib/Queue2')

// Criação de uma nova fila
let fila = new Queue()

// Colocando algumas pessoas na fila
fila.enqueue('Epaminondas')
fila.enqueue('Lutécia')
fila.enqueue('Belarmino')
fila.enqueue('Waldisney')

console.log(fila)

let proximo = fila.dequeue() // Chamando o próximo da fila

console.log({proximo})
console.log(fila)

fila.enqueue('Jurosmar')
fila.enqueue('Norberval')
fila.enqueue('Francivalda')

console.log(fila)

let consultaProx = fila.peek()

console.log({consultaProx})
console.log(fila)

proximo = fila.dequeue()

console.log({proximo})
console.log(fila)

