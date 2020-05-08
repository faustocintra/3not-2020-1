let comps, trocas, pass

function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
}

function quickSort(vet, posIni = 0, posFim = vet.length - 1) {
   pass++
   
   // Só processa se houver mais de um elemento no vetor
   if(posFim > posIni) { 
      const posPivot = posFim // O último elemento é o pivô
      let posDiv = posIni - 1    // Começa um antes do início

      //console.log({posIni, posFim, posPivot, posDiv})

      for(let i = posIni; i < posFim; i++) {
         
         //console.log('vet[i] = ' + vet[i])
         //console.log('vet[posPivot] = ' + vet[posPivot])
         
         // Quando o elemento da posição atual for MENOR
         // que o elemento da posição do pivô, incrementa-se
         // o div e procede-se à troca dos elementos nas
         // posições i e div entre si
         
         comps++
         if(vet[i] < vet[posPivot]) {
            posDiv++
            troca(vet, i, posDiv)
            trocas++
         }

         //console.log({i, posDiv})
         //console.log('-------------------')

      }
      posDiv++
      troca(vet, posDiv, posPivot)

      // Subvetor à esquerda
      quickSort(vet, posIni, posDiv - 1)

      // Subvetor à direita
      quickSort(vet, posDiv + 1, posFim)
   }
}

//let letras = ['C', 'F', 'A', 'G', 'J', 'I', 'E', 'B', 'H', 'D']
let letras = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

let nomes = require('./amostras/cem-mil-nomes')

comps = 0
pass = 0
trocas = 0
//quickSort(letras)

console.time('quick-sort')
quickSort(nomes)
console.timeEnd('quick-sort')

console.log({comps, pass, trocas})
//console.log(letras)
console.log(nomes)