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

// Classe Deque com armezenamento em objeto
class Deque2 {

   constructor() {
      this.items = {}
      this.head = 0    // Início do deque
      this.tail = -1   // Fim do deque
   }

   size() {
      return this.tail - this.head + 1
   }

   isEmpty() {
      return this.size() === 0
   }

   addFront(element) {
      // Cria uma nova posição ANTES do head atual
      // (Não tem problema se ficar negativo)
      this.head--
      this.items[this.head] = element
   }

   addBack(element) {
      // Cria uma nova posição DEPOIS do tail atual
      this.tail++
      this.items[this.tail] = element
   }

   removeFront() {
      if(! this.isEmpty()) {
         let tmp = this.items[this.head]
         delete this.items[this.head]
         this.head++
         return tmp
      }
      else return undefined
   }

   removeBack() {
      if(! this.isEmpty()) {
         let tmp = this.items[this.tail]
         delete this.items[this.tail]
         this.tail--
         return tmp
      }
      else return undefined
   }

   peekFront() {
      if(! this.isEmpty()) return this.items[this.head]
      else return undefined
   }

   peekBack() {
      if(! this.isEmpty()) return this.items[this.tail]
      else return undefined
   }

}

let deque = new Deque2()

deque.addFront(10)
deque.addBack(20)
deque.addFront(30)
deque.addBack(40)
deque.addFront(50)
deque.addFront(60)

console.log(deque, deque.size())

console.log(deque.peekFront())
console.log(deque.peekBack())
console.log('----')
console.log(deque.removeBack())
console.log(deque.removeFront())

console.log(deque, deque.size())


