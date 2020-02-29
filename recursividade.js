// Cálculo do fatorial de n, versão ITERATIVA
function fatI(n) {
   if(n < 0) return 0
   else if(n == 0) return 1
   else {
      let res = 1
      for(let i = 1; i <= n; i++) {
         res *= i
      }
      return res
   }
}
//console.log('5! = ' + fatI(5))
//console.log('10! = ' + fatI(10))

// Cálculo do fatorial de n, versão RECURSIVA
function fatR(n) {
   if(n < 0) return 0 // Condição de saída
   else if(n == 0) return 1 // Condição de saída
   else return n * fatR(n - 1)
}
//console.log('5! = ' + fatR(5))
//console.log('10! = ' + fatR(10))

// Versão de debug do fatorial RECURSIVO
function fatRdebug(n) {
   console.log('n -> ' + n)
   if(n < 0) return 0
   if(n == 0) return 1
   else {
      let res = n * fatRdebug(n - 1)
      console.log(`fatRdebug(${n}) = ${res}`)
      return res
   }
}
console.log('5! = ' + fatRdebug(5))
//console.log('10! = ' + fatRdebug(10))

// Potenciação, versão ITERATIVA
function potI(n, p) {
   let res = 1
   for(let i = 1; i <= p; i++) {
      res *= n
   }
   return res
}
console.log(potI(2, 5))

// Potenciação, versão RECURSIVA
function potR(n, p) {
   if(p < 0) return undefined  // Não suportado pela função
   else if(p == 0) return 1 // Condição de saída
   else return n * potR(n, p - 1)
}
console.log('-----------------------')
//console.log(potR(2, 5))
//console.log(potR(3, -2))
//console.log(potR(7, 0))

// Potenciação, versão RECURSIVA com mensagens de debug
function potRdebug(n, p) {
   console.log(`n, p -> ${n}, ${p}`)
   if(p < 0) return undefined
   else if(p == 0) return 1
   else {
      let res = n * potRdebug(n, p - 1)
      console.log(`potRdebug(${n}, ${p}) -> ${res}`)
      return res
   }
}
console.log(potRdebug(2, 5))