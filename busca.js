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
// fnComp: função de comparação
function buscaSequencialOrd(vet, busca, fnComp) {
   for (let i = 0; i < vet.length; i++) {
      comps++
      let resultadoComp = fnComp(busca, vet[i])
      
      //if (busca == vet[i]) return i // Retorna a posição
      //else if (busca < vet[i]) return -1 // Não encontrado
      if (resultadoComp == 0) return i // Retorna a posição
      else if (resultadoComp < 0) return -1 // Não encontrado

      comps++
   }
}

// vet: vetor a ser pesquisado
// busca: valor a ser buscado
// posIni: posição inicial de busca (default: 0)
// posFim: posição final de busca (default: vet.length - 1)
function buscaBinaria(vet, busca, fnComp, posIni = 0, posFim = vet.length - 1) {

   // console.log({posIni, posFim})

   // posFim nunca pode ser menor que posIni
   comps++
   if (posFim < posIni) return -1

   // Math.floor() arredonda o resultado do cálculo para baixo
   const posMeio = Math.floor((posIni + posFim) / 2)

   // console.log({posMeio, busca}, vet[posMeio])

   let resultadoComp = fnComp(busca, vet[posMeio])

   comps++
   //if (busca == vet[posMeio]) return posMeio // Achou!
   if (resultadoComp == 0) return posMeio // Achou!
   //else if (busca < vet[posMeio]) {
   else if (resultadoComp < 0) {
      comps++
      posFim = posMeio - 1
      return buscaBinaria(vet, busca, fnComp, posIni, posFim)
   }
   else { // busca > vet[posMeio] ou resultadoComp > 0
      comps += 2
      posIni = posMeio + 1
      return buscaBinaria(vet, busca, fnComp, posIni, posFim)
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

/* comps = 0
console.time('sequencial-ord')
let pos = buscaSequencialOrd(nomesOrd, 'WALLACE')
console.timeEnd('sequencial-ord')
console.log(pos, nomesOrd[pos], {comps})

comps = 0
console.time('binaria')
pos = buscaBinaria(nomesOrd, 'WALLACE')
console.timeEnd('binaria')
console.log(pos, nomesOrd[pos], {comps}) */

/* comps = 0
console.time('sequencial-ord')
let pos = buscaSequencialOrd(numsOrd, 54)
console.timeEnd('sequencial-ord')
console.log(pos, numsOrd[pos], {comps})

comps = 0
console.time('binaria')
pos = buscaBinaria(numsOrd, 54)
console.timeEnd('binaria')
console.log(pos, numsOrd[pos], {comps}) */

/* function comparaFirstName(busca, elemVet) {
   if(busca == elemVet.first_name) return 0
   else if (busca > elemVet.first_name) return 1
   else return -1
}

const objs = require('./amostras/cem-mil-objetos')

comps = 0
console.time('sequencial-ord')
let pos = buscaSequencialOrd(objs, 'WALLACE', comparaFirstName)
console.timeEnd('sequencial-ord')
console.log(pos, objs[pos], {comps})

comps = 0
console.time('binaria')
pos = buscaBinaria(objs, 'WALLACE', comparaFirstName)
console.timeEnd('binaria')
console.log(pos, objs[pos], {comps}) */

const covid19 = require('./amostras/covid19')

// Filtrando apenas o dia 13/05
const data15_05 = covid19.filter(o => o.date == '2020-05-15')

// Ordenando por city
const data15_05ordCity = data15_05.sort((a, b) => {
   if(a.city == b.city) return 0
   else if(a.city > b.city) return 1
   else return -1
})

function comparaCity(busca, obj) {
   if(busca == obj.city) return 0
   else if (busca > obj.city) return 1
   else return -1
}

comps = 0
console.time('sequencial-ord')
let pos = buscaSequencialOrd(data15_05ordCity, 'Franca', comparaCity)
console.timeEnd('sequencial-ord')
console.log(pos, data15_05ordCity[pos], {comps})

comps = 0
console.time('binaria')
pos = buscaBinaria(data15_05ordCity, 'Franca', comparaCity)
console.timeEnd('binaria')
console.log(pos, data15_05ordCity[pos], {comps}) 

/* let data15_05filtroEstados = covid19.filter(o => o.date == '2020-05-15' && o.place_type == 'state')

for(let o of data15_05filtroEstados) {
   console.log(o.state, o.last_available_deaths)
} */