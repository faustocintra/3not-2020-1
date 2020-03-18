let comps, chamadas

function juntarVetores(vetEsq, vetDir) {
   let pEsq = 0, pDir = 0, resultado = []
   while(pEsq < vetEsq.length && pDir < vetDir.length) {
      if(vetEsq[pEsq] < vetDir[pDir]) {
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

function mergeSort(vet) {
   chamadas++
   if(vet.length > 1) {
      let meio = Math.floor(vet.length / 2)
      let vetEsq = vet.slice(0, meio)
      let vetDir = vet.slice(meio)
      vetEsq = mergeSort(vetEsq)
      vetDir = mergeSort(vetDir)
      vet = juntarVetores(vetEsq, vetDir)
   }
   return vet
}

//let nums = [9, 8, 7, 6, 2, 1, 0, 10, 11, 5, 4, 3]

comps = 0, chamadas = 0
//console.log(mergeSort(nums))
//console.log({comps, chamadas})

let nomes = require('./amostras/cem-mil-nomes')

console.time('merge-sort')
console.log(mergeSort(nomes))
console.timeEnd('merge-sort')
console.log({comps, chamadas})