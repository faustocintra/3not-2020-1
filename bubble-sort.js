/*
   Parâmetros:
   vet: o vetor onde será efetuada a troca
   i e j: as posições do vetor entre as 
      quais será feita a troca
*/
function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
}

//let nums = [8, 5, 7, 3, 1, 9, 4, 0, 2, 6]
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

let trocas, comps, pass

function bubbleSort(vet) {
   let trocou
   do {
      pass++ // Incrementa passadas
      trocou = false
      // O for do bubbleSort precisa terminar no PENÚLTIMO
      // elemento (vet.length - 1), porque um elemento sempre 
      // será comparado com seu sucessor
      for(let i = 0; i < vet.length - 1; i++) {
         comps++ // Incrementa comparações
         if(vet[i + 1] < vet[i]) {
            troca(vet, i, i + 1)
            trocou = true
            trocas++ // Incrementa trocas
         }
      }
   } while(trocou) // Se houve troca (trocou == true), precisa passar de novo
}

let nomes = require('./amostras/dez-mil-nomes')

//console.log(nums)
console.log(nomes)

trocas = 0
comps = 0
pass = 0

//bubbleSort(nums)
bubbleSort(nomes)

console.log(`Comparações: ${comps}; trocas: ${trocas}; passadas: ${pass}`)

//console.log(nums)
console.log(nomes)


