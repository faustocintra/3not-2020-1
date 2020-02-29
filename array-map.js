let frutas = ['abacaxi', 'morango', 'laranja', 'caju', 'melancia', 'limão', 'abacate', 'framboesa', 'maçã']

// Encontrando o tamanho de cada uma das palavras do vetor
let tamanhos = frutas.map(f => f.length)
console.log(tamanhos)

// Colocando as palavras em maiúsculas
let maiusc = frutas.map(x => x.toUpperCase())
console.log(maiusc)

// Calculando a raiz quadrada do tamanho das palavras
let raizQ = tamanhos.map(n => Math.sqrt(n))
console.log(raizQ)