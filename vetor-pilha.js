// Inicializando uma pilha
let pilha = []

let n = 2020

while(n > 0) {
   pilha.push(n % 2) // Empilha o resto da divisão
   n = Math.floor(n / 2) // Divisão inteira
}

console.log(pilha)

let bin = ''

while(pilha.length > 0) {
   bin += pilha.pop()
}

console.log(bin)

/*************************************************** */

// Inversão de string

pilha = []

let str = 'ESTRUTURAS DE DADOS E ALGORITMOS'

for(let i = 0; i < str.length; i++) {
   pilha.push(str.charAt(i))
}

let strRev = ''

while(pilha.length > 0) {
   strRev += pilha.pop()
}

console.log(pilha)
console.log(strRev)

// Inversão nativa em JavaScript

// 1) Transformar a string em vetor
let vet = str.split('')

// 2) Inverter o vetor
vet = vet.reverse()

// 3) Transformar de volta o vetor em string
strRev = vet.join('')

strRev = str.split('').reverse().join('')

console.log(vet)
console.log(strRev)