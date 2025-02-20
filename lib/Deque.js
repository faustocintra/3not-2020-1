/*

   Imagine as seguintes situações com filas no mundo real:

   - O último colocado desiste de esperar e abandona a fila
   - Alguém com prioridade é colocado à frente da fila, antes dos demais

   Na computação, situações como essa também são comuns. Para representá-
   -las, existe uma estrutura de dados chamada DEQUE (= double ended queue,
   ou fila de duas pontas). Ela permite que tanto inserções quanto remoções
   aconteçam em qualquer lado da fila.

   Os métodos que precisam ser implementados em um deque são:

   - addFront(element): insere no início da fila
   - addBack(element): insere no final da fila
   - removeFront(): remove do início da fila
   - removeBack(): remove do final da fila
   - peekFront(): consulta o início da fila
   - peekBack(): consulta o final da fila

   Os métodos constructor(), clear(), size() e isEmpty() continuam existindo
   como de costume.

   Implemente o deque usando primeiro armazenamento em vetor e, depois,
   armazenamento em objeto.

*/

// Classe Deque com armezenamento em vetor
class Deque {

   constructor() {
      this.items = []
   }

   size() {
      return this.items.length
   }

   isEmpty() {
      return this.size() === 0
   }

   addFront(element) {
      this.items.unshift(element)
   }

   addBack(element) {
      this.items.push(element)
   }

   removeFront() {
      if(! this.isEmpty()) return this.items.shift()
      else return undefined
   }

   removeBack() {
      if(! this.isEmpty()) return this.items.pop()
      else return undefined
   }

   peekFront() {
      if(! this.isEmpty()) return this.items[0]
      else return undefined
   }

   peekBack() {
      if(! this.isEmpty()) return this.items[this.items.length - 1]
      else return undefined
   }

}

let deque = new Deque()

deque.addFront(10)
deque.addBack(20)
deque.addFront(30)
deque.addBack(40)

console.log(deque)

console.log(deque.peekFront())
console.log(deque.peekBack())
console.log('----')
console.log(deque.removeBack())
console.log(deque.removeFront())

console.log(deque)


