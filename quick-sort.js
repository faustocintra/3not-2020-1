let comps, trocas, pass

function troca(vet, i, j) {
   let aux = vet[i]
   vet[i] = vet[j]
   vet[j] = aux
}

function quickSort(vet, fnComp, posIni = 0, posFim = vet.length - 1) {
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
         //if(vet[i] < vet[posPivot]) {
         
         /*
            COMPARAÇÃO USANDO FUNÇÃO PERSONALIZADA
            fnComp() é uma função que deverá ser informada ao
            chamar o algoritmo quickSort().
            Essa função recebe dois argumentos, e deve retornar
            true caso o primeiro argumento seja MAIOR que o segundo
            e false caso contrário.
         */
         
         if(fnComp(vet[posPivot], vet[i])) {
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
      quickSort(vet, fnComp, posIni, posDiv - 1)

      // Subvetor à direita
      quickSort(vet, fnComp, posDiv + 1, posFim)
   }
}

//let letras = ['C', 'F', 'A', 'G', 'J', 'I', 'E', 'B', 'H', 'D']
let letras = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

let nomes = require('./amostras/cem-mil-nomes')

/* comps = 0
pass = 0
trocas = 0
//quickSort(letras)

console.time('quick-sort')
quickSort(nomes)
console.timeEnd('quick-sort')

console.log({comps, pass, trocas})
//console.log(letras)
console.log(nomes) */

let pessoas = [
   { codigo: 5, nome: 'GERALDO GOMES', idade: 63, sexo: 'M' },
   { codigo: 2, nome: 'PAULA PIRES', idade: 35, sexo: 'F' },
   { codigo: 6, nome: 'JULIANA JUNQUEIRA', idade: 20, sexo: 'F' },
   { codigo: 1, nome: 'CARLOS CARDOSO', idade: 44, sexo: 'M' },
   { codigo: 4, nome: 'LUÍS LIMA', idade: 51, sexo: 'M' },
   { codigo: 3, nome: 'RITA RODRIGUES', idade: 15, sexo: 'F' }
]

function comparaCodigo(a, b) {
   return a.codigo > b.codigo
}

function comparaNome(x, y) {
   return x.nome > y.nome
}

function comparaSexoNome(a, b) {
   if(a.sexo == b.sexo) return a.nome > b.nome
   return a.sexo > b.sexo
}

//quickSort(pessoas, comparaCodigo)
//quickSort(pessoas, comparaNome)

// Ordenação por idade usando arrow function
// quickSort(pessoas, (a, b) => a.idade > b.idade)

// Ordenação por idade EM ORDEM DESCENDENTE usando arrow function
// (basta inverter o sinal de comparação)
quickSort(pessoas, (a, b) => a.idade < b.idade)

// Ordenação por sexo usando arrow function
//quickSort(pessoas, (a, b) => a.sexo > b.sexo)

//quickSort(pessoas, comparaSexoNome)

console.log(pessoas)