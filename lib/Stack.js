class Stack {
   // Inicializar a pilha
   constructor() {
      this.items = []   
   }

   // Inserir dados na pilha
   push(elem) {
      this.items.push(elem)
   }

   // Retirar dados da pilha
   pop() {
      if(!this.isEmpty()) return this.items.pop()
      else console.log('ERRO EM pop(): PILHA VAZIA')
   }

   // Retorna o tamanho da pilha
   size() {
      return this.items.length
   }

   // Retorna se a pilha está vazia ou não
   isEmpty() {
      return this.size() === 0
   }

   // Consultar o último elemento da pilha (SEM RETIRAR!!!)
   peek() {
      return this.items[this.items.length - 1]
   }

   // Destruir a pilha
   clear() {
      this.items = []
   }
}
module.exports = Stack