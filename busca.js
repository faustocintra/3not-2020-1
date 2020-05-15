let comps

// vet: vetor a ser pesquisado
// busca: valor a ser buscado
function buscaSequencialDesord(vet, busca) {
   for (let i = 0; i < vet.length; i++) {
      if (busca == vet[i]) return i // Retorna a posição
   }
   return -1 // Não encontrado
}

// vet: vetor a ser pesquisado
// busca: valor a ser buscado
function buscaSequencialOrd(vet, busca) {
   for (let i = 0; i < vet.length; i++) {
      if (busca == vet[i]) return i // Retorna a posição
      else if (busca < vet[i]) return -1 // Não encontrado
   }
}

// vet: vetor a ser pesquisado
// busca: valor a ser buscado
// posIni: posição inicial de busca (default: 0)
// posFim: posição final de busca (default: vet.length - 1)
function buscaBinaria(vet, busca, posIni = 0, posFim = vet.length - 1) {

   console.log({posIni, posFim})

   // posFim nunca pode ser menor que posIni
   comps++
   if (posFim < posIni) return -1

   // Math.floor() arredonda o resultado do cálculo para baixo
   const posMeio = Math.floor((posIni + posFim) / 2)

   console.log({posMeio, busca}, vet[posMeio])

   comps++
   if (busca == vet[posMeio]) return posMeio // Achou!
   else if (busca < vet[posMeio]) {
      comps++
      posFim = posMeio - 1
      return buscaBinaria(vet, busca, posIni, posFim)
   }
   else { // busca > vet[posMeio]
      comps += 2
      posIni = posMeio + 1
      return buscaBinaria(vet, busca, posIni, posFim)
   }

}

let numsOrd = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
let numsDesord = [65, 34, 7, 13, 98, 49, 0, -3, 85, 33]

/* let pos = buscaSequencialDesord(numsDesord, 49)

console.log(pos)
console.log(numsDesord[pos]) */

/* let pos = buscaBinaria(numsOrd, 36)

console.log(pos)
console.log(numsOrd[pos]) */

const nomes = require('./amostras/cem-mil-nomes')

// Ordenando o vetor usando o quicksort interno do JS
const nomesOrd = nomes.sort((a, b) => {
   if(a == b) return 0
   else if(a > b) return 1
   else return -1
})

//console.log(nomesOrd)

comps = 0
let pos = buscaBinaria(nomesOrd, 'MARIA')

console.log(pos, nomesOrd[pos], {comps})