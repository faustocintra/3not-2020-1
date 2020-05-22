let comps, chamadas

function juntarVetores(vetEsq, vetDir, fnComp) {
   let pEsq = 0, pDir = 0, resultado = []
   while(pEsq < vetEsq.length && pDir < vetDir.length) {
      //if(vetEsq[pEsq] < vetDir[pDir]) { // Ou: vetDir[pDir] > vetEsq[pEsq]
      if(fnComp(vetDir[pDir], vetEsq[pEsq])) {
         resultado.push(vetEsq[pEsq])
         pEsq++
      }
      else {
         resultado.push(vetDir[pDir])
         pDir++
      }
      comps++
   }
   let sobra
   if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
   else sobra = vetDir.slice(pDir)
   return resultado.concat(sobra) // resultado + sobra (arrays)
}

function mergeSort(vet, fnComp) {
   chamadas++
   if(vet.length > 1) {
      let meio = Math.floor(vet.length / 2)
      let vetEsq = vet.slice(0, meio)
      let vetDir = vet.slice(meio)
      vetEsq = mergeSort(vetEsq, fnComp)
      vetDir = mergeSort(vetDir, fnComp)
      vet = juntarVetores(vetEsq, vetDir, fnComp)
   }
   return vet
}

/* let nums = [9, 8, 7, 6, 2, 1, 0, 10, 11, 5, 4, 3]

console.log(mergeSort(nums, (a, b) => a < b))
 */

let covid = require('./amostras/covid19')

console.time('comp')
//console.log(mergeSort(covid, (a, b) => a.city < b.city))

// Comparação de strings ignorando a ordem binária das letras acentuadas,
// em ordem descendente
console.log(mergeSort(covid, (a, b) => a.city.localeCompare(b.city, 'pt-br') < 0))
console.timeEnd('comp')
console.log(covid.length)

/* comps = 0, chamadas = 0
//console.log(mergeSort(nums))
//console.log({comps, chamadas})

let nomes = require('./amostras/cem-mil-nomes')

console.time('merge-sort')
console.log(mergeSort(nomes))
console.timeEnd('merge-sort')
console.log({comps, chamadas}) */