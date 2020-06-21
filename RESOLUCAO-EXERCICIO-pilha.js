const Stack = require('./lib/Stack')

let expr1 = '((2 + 3) * 5 + 4) - 2'
let expr2 = '5 + (2 - 5)) + 7 / 4'
let expr3 = '6 - 2) + 4 * (2 / 5)'

// Analisar as expressões para verificar se
// os parênteses estão bem formados

/*

   1) Crie uma pilha
   2) Percorra cada uma das expressões. Quando 
      encontrar um abre parênteses, empilhe sua
      posição na string
   3) Quando encontrar um fecha parênteses, 
      desempilhe
   4) A expressão é válida quando, ao término
      da análise da expressão, a pilha está vazia

*/

// Criei uma função para evitar repetição de código
function analisarExpressao(expr) {
   // 1) Crie uma pilha
   let pilha = new Stack()
   let temErro = false

   console.log('Analisando expressão: ' + expr)
   
   // 2) Percorra cada uma das expressões...
   for(let i = 0; i < expr.length; i++) {
      // ... Quando encontrar um abre parênteses, empilhe sua
      // posição na string
      if(expr.charAt(i) === '(') pilha.push(i)
      
      // 3) Quando encontrar um fecha parênteses, desempilhe
      else if(expr.charAt(i) === ')') {
         // Não se pode retirar nada de uma pilha vazia
         if(pilha.isEmpty()) temErro = true
         else pilha.pop() // Desempilha
      }

   }

   // 4) A expressão é válida quando, ao término
   // da análise da expressão, a pilha está vazia
   if(!temErro && pilha.isEmpty()) console.log('A expressão é válida.')
   else console.log('A expressão é INVÁLIDA.')
   
   console.log('-------------------------------------------')

}

// Chamadas de função para validar as expressões dadas
analisarExpressao(expr1)
analisarExpressao(expr2)
analisarExpressao(expr3)