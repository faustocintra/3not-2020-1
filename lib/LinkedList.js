// @ts-nocheck
class Node {
   constructor(element) {
      // Parte informativa para o usuário
      this.element = element
      // Ponteiro para o próximo nodo
      this.next = null
   }
}

class LinkedList {
   
   // Inicializaççao da lista encadeada
   constructor() {
      this.head = null // Início da lista
      this.count = 0
   }

   // Inserção ao final da lista
   push(element) {
      let newNode = new Node(element)

      // Lista vazia
      if(this.count === 0) this.head = newNode
      else {
      
         // Começa com a cauda na mesma posição que a cabeça
         let tail = this.head

         // Percorre a lista até encontrar o último nodo - aquele
         // cujo next é nulo, ou seja, não tem nenhum outro nodo
         // depois dele
         while(tail.next !== null) {
            tail = tail.next
         }

         tail.next = newNode
      }

      this.count++

   }

   // Insere o elemento em uma posição arbitrária
   insert(position, element) {
      
      // A posição para inserção não pode ser negativa nem maior que a
      // contagem de elementos da lista
      if(position >= 0 && position <= this.count) {

         // Criação do novo nodo
         let newNode = new Node(element)

         // Caso particular: inserção em posição correspondente ao
         // número de elementos da lista; equivale a inserir no final
         // da lista. Redirecionamos para o push()
         if(position === this.count) this.push(element)

         // Caso particular: inserção na posição 0 (zero)
         else if(position === 0) {
            // O novo nodo passa a apontar para atual head
            newNode.next = this.head
            // O novo nodo passa a ser o novo head
            this.head = newNode

            this.count++
         }

         else {
            let nodePos = this.head

            for(let i = 1; i < position; i++) {
               nodePos = nodePos.next
            }

            // Novo nodo passa a apontar para o seguinte do nodo
            // que ocupa a posição atual
            newNode.next = nodePos.next

            // O nodo da posição passa a apontar para o novo nodo
            nodePos.next = newNode

            this.count++

         }

      }  

   }


   // Remove um elemento em uma posição arbitrária
   removeAt(position) {

      // Posição de remoção deve ficar entre 0 e o número de elementos menos 1
      if(position >= 0 && position < this.count) {

         let removed

         // Caso particular: remoção do início da lista (posição 0)
         if(position === 0) {
            
            // Remoção da cabeça
            removed = this.head.element
            
            // A nova cabeça passa a ser o próxima da cabeça removida
            this.head = this.head.next

            this.count--

            return removed
         }

         else {
            let nodePos = this.head
            let nodePrev = null // Anterior da posição

            for(let i = 1; i <= position; i++) {
               nodePrev = nodePos
               nodePos = nodePos.next
            }

            removed = nodePos.element

            // O anterior ao removido passa a apontar para o sucessor
            // do removido
            nodePrev.next = nodePos.next

            this.count--

            return removed

         }
      }

   }

   // Gera uma representação da lista em string
   toString() {
      let tail = this.head, pos = 0, str = ''

      // Percurso da lista encadeada, exibindo cada um dos elementos
      // e a sua posição
      while(tail !== null) {
         str += `[${pos}] => ${tail.element}\n`
         tail = tail.next
         pos++
      }
      str += `count = ${this.count}\n` 
      return str
   }

}
module.exports = LinkedList

let lista = new LinkedList()
console.log(lista)

lista.push(7)
console.log(lista)

lista.push(4)
console.log(lista)

lista.push(9)
console.log(lista.toString())

lista.push(2)
console.log(lista.toString())

lista.insert(4, 1)
console.log(lista.toString())

lista.insert(0, 5)
console.log(lista.toString())

lista.insert(3, 0)
console.log(lista.toString())

lista.insert(10, 8)
console.log(lista.toString())

// Remoção no início da lista
console.log(lista.removeAt(0))
console.log(lista.toString())

// Remoção no meio da lista
console.log(lista.removeAt(3))
console.log(lista.toString())

// Remoção no fim da lista
console.log(lista.removeAt(4))
console.log(lista.toString())