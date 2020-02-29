let nums = [7, -2, 4, 8, 3, 1, -5, 9, 6]

// Calculando a soma dos elementos do vetor nums
let soma = nums.reduce((acum, n) => acum += n)
console.log(soma)

// Encontrando o maior número do vetor
let maior = nums.reduce((maior, n) => maior = n > maior ? n : maior)
console.log(maior)

// Calculando o produto dos elementos do vetor nums
let produto = nums.reduce((a, t) => a *= t)
console.log(produto)

let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

// Concatenando os elementos do vetor letras
let alfabeto = letras.reduce((a, l) => a += l)
console.log(alfabeto)
