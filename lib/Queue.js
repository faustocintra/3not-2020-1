// Classe Fila
class Queue {

   // Inicialização da fila
   constructor() {
      this.items = []
   }

   // Enfileirar um novo elemento
   enqueue(elem) {
      this.items.push(elem)
   }

   // Retirada de um elemento da fila (desenfileiramento)
   dequeue() {
      // Fila vazia
      if(this.items.length === 0) return undefined
      return this.items.shift() // Retira o 1º elemento
   }

   // Consulta o primeiro elemento da fila
   peek() {
      if(this.items.length === 0) return undefined
      // Retorna o 1º elemento sem retirá-lo
      return this.items[0] 
   }

   // Limpar a fila
   clear() {
      this.items = []
   }

   // Retorna o tamanho da fila
   size() {
      return this.items.length
   }

   // Retorna se a fila está ou não vazia
   isEmpty() {
      return this.items.length === 0
   }

}
module.exports = Queue