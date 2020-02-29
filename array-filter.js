let numeros = [9, 4, -3, 5, 2, 0, -6, 1, 8, 11, -7]

// Filtrando apenas os números pares
let pares = numeros.filter(n => n % 2 == 0)
console.log(pares)

// Filtrando apenas os números negativos
let negativos = numeros.filter(x => x < 0)
console.log(negativos)

// Filtrando os números maiores que 6
let maioresQue6 = numeros.filter(i => i > 6)
console.log(maioresQue6)

let palavras = ['estrela', 'planeta', 'asteroide', 'galáxia', 'nebulosa', 'cometa', 'constelação']

// Filtrando apenas as palavras com mais de 7 letras
let longas = palavras.filter(p => p.length > 7)
console.log(longas)