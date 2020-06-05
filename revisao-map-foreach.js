//let vet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//let dobro = vet.map(x => x * 2)

//console.log(dobro)

//vet.forEach(x => console.log(x * 2))

/* for(let i = 0; i < vet.length; i++) {
   console.log(vet[i] * 2)
} */
/* for(let x of vet) {
   console.log(x * 2)
} */

//let filtrado = vet.filter(n => n > 3 && n < 7)

//console.log(filtrado)

/* let vet2 = [0, 1, [2, 4], 2, [3, 6, 7], 9]

let achatado = vet2.flat()

console.log(achatado)

let vet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let mapeado = vet.map((n, idx) => (n + arr[idx]) / 2)

let mapeado = vet.map((n, idx) => (vet[idx] + arr[idx]) / 2)

console.log(mapeado) */

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!

function fat(n) {
   if(n == 1) return 1 // Condição de saída
   return n * fat(n - 1)
}

console.log(fat(5))