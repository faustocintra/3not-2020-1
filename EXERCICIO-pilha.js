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

