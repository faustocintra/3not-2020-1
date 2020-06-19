// Classe Fila com armazenamento em objeto
class Queue2 {

   constructor() {
      this.items = {}
      this.head = 0    // Início da fila
      this.tail = -1   // Fim da fila
   }

   // Inserção na fila
   enqueue(elem) {
      // Cria um novo lugar no fim da fila
      this.tail++
      // Insere o novo elemento no lugar criado
      this.items[this.tail] = elem
   }

   // Retirada da fila
   dequeue() {
      // Fila vazia
      if(this.isEmpty()) return undefined
      
      // Salva o primeiro da fila (apontado por head)
      let aux = this.items[this.head]

      // Apagar o primeiro da fila
      delete this.items[this.head]

      // Ajusta o head para apontar para o seguinte da fila
      this.head++

      // Retorna o dado salvo
      return aux
   }

   // Consulta o primeiro elemento da fila
   peek() {
      // Fila vazia
      if(this.isEmpty()) return undefined
      return this.items[this.head]
   }

   // Limpa a fila (idêntico ao construtor)
   clear() {
      this.items = {}
      this.head = 0
      this.tail = -1
   }

   // Tamanho da fila
   size() {
      return this.tail - this.head + 1
   }

   isEmpty() {
      return this.size() === 0
   }

}
module.exports = Queue2