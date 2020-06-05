const Stack = require('./lib/Stack')

let pilha = new Stack()

let n = 189

while(n > 0) {
   pilha.push(n % 2)
   n = Math.floor(n / 2)
}

console.log(pilha)

let bin = ''

while(!pilha.isEmpty()) {
   bin += pilha.pop()
}

console.log(bin)

