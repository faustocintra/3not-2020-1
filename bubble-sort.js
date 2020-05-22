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

let trocas, comps, pass

function bubbleSort(vet, fnComp) {
   let trocou
   do {
      pass++ // Incrementa passadas
      trocou = false
      // O for do bubbleSort precisa terminar no PENÚLTIMO
      // elemento (vet.length - 1), porque um elemento sempre 
      // será comparado com seu sucessor
      for(let i = 0; i < vet.length - 1; i++) {
         comps++ // Incrementa comparações
         //if(vet[i + 1] < vet[i]) {  // Ou: vet[i] > vet[i + 1]
         if(fnComp(vet[i], vet[i + 1])) {
            troca(vet, i, i + 1)
            trocou = true
            trocas++ // Incrementa trocas
         }
      }
   } while(trocou) // Se houve troca (trocou == true), precisa passar de novo
}

/* //let nums = [8, 5, 7, 3, 1, 9, 4, 0, 2, 6]
let nums = [7, 3, 9, 6, 4, 0, 2, 5, 1, 8]

function comparaNums(x, y) {
   return x > y
}

// bubbleSort(nums, comparaNums)
bubbleSort(nums, (x, y) => x > y)

console.log(nums) */

//console.log(nums)
//console.log(nomes)

/* let nomes = require('./amostras/cem-mil-nomes')

trocas = 0
comps = 0
pass = 0

console.time('bubblesort')
//bubbleSort(nums)
bubbleSort(nomes)
console.timeEnd('bubblesort')

console.log(`Comparações: ${comps}; trocas: ${trocas}; passadas: ${pass}`)

//console.log(nums)
console.log(nomes) */

const covid = require('./amostras/covid19')

// Filtrando apenas os dados do dia 2020-05-15
const covid1505 = covid.filter(e => e.date == "2020-05-15")

//bubbleSort(covid1505, (a, b) => a.city > b.city)
bubbleSort(covid1505, (a, b) => a.last_available_confirmed < b.last_available_confirmed)

//console.log(covid1505)

// Mostrar os 20 primeiros
for(let i = 1; i <= 20; i++) {
   console.log(covid1505[i])
}


