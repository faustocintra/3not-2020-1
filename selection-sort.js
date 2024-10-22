let estat = {}

function encontrarPosMenor(vet, posIni, fnComp) {
   let posMenor = posIni
   for(let i = posIni + 1; i < vet.length; i++) {
      estat.comps++
      //if(vet[i] < vet[posMenor]) posMenor = i // Ou: vet[posMenor] > vet[i]
      if(fnComp(vet[posMenor], vet[i])) posMenor = i
   }
   return posMenor
}

function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
}

function selectionSort(vet, fnComp) {
   // O for do selection sort também só vai
   // até a penúltima posição
   for(let i = 0; i < vet.length - 1; i++) {
      estat.pass++
      let posMenor = encontrarPosMenor(vet, i + 1, fnComp)
      //if(vet[posMenor] < vet[i]) { // Ou: vet[i] > vet[posMenor]
      if(fnComp(vet[i], vet[posMenor])) {
         troca(vet, posMenor, i)
         estat.trocas++
      }
   }
}

function selectionSortRec(vet, posIni = 0) { // Versão recursiva
   if(posIni < vet.length - 1) {  // Condição de saída
      estat.pass++
      let posMenor = encontrarPosMenor(vet, posIni + 1)
      if(vet[posMenor] < vet[posIni]) {
         troca(vet, posMenor, posIni)
         estat.trocas++
      }
      selectionSortRec(vet, posIni + 1)
   }
}

/* let nums = [7, 3, 9, 6, 4, 0, 2, 5, 1, 8]

selectionSort(nums, (a, b) => a < b)

console.log(nums) */

const covid = require('./amostras/covid19')

// Filtrar a cidade de Franca (cód. IBGE = 3516200)
const covidFranca = covid.filter(e => e.city_ibge_code == 3516200)

// Ordenação por data
selectionSort(covidFranca, (a, b) => a.date < b.date)

console.log(covidFranca)

/* estat = { comps: 0, trocas: 0, pass: 0}
selectionSort(nums)

console.log(nums)
console.log(estat) */

/* let nomes = require('./amostras/cem-mil-nomes')

estat = { comps: 0, trocas: 0, pass: 0}

console.time('selection-sort')
selectionSort(nomes)
//selectionSort(nums)
console.timeEnd('selection-sort')

console.log(nomes)
//console.log(nums)
console.log(estat) */