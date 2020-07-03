// @ts-nocheck
class Node {
   constructor(element) {
      this.element = element
      this.left = null     // Subárvore à esquerda
      this.right = null    // Subárvore à direita
   }
}

// Classe de árvore binária de busca
class BinarySearchTree {
   constructor() {
      this.root = null  // Raiz da árvore 
   }

   // Inserção de um elemento na árvore
   insert(element) {

      // Envelopar o elemento dentro de um nodo
      let newNode = new Node(element)

      // Quando a árvore está vazia, o primeiro nodo
      // a ser inserido torna-se o nodo raiz
      if(this.root === null) this.root = newNode

      // Senão, chama insertNode para encontrar um lugar para o nodo na árvore
      else this.insertNode(newNode, this.root)

   }

   // Insere um nodo em uma subárvore
   // Parâmetros:
   // node: o nodo a ser inserido
   // root: raiz da subárvore onde o nodo será inserido
   insertNode(node, root) {

      if(node.element < root.element) {
         // Se a subárvore esquerda do nó ainda não existe,
         // o novo nó passa a ser sua raiz
         if(root.left === null) root.left = node

         // Caso contrário, descemos mais na subárvore da esquerda
         // em busca de um lugar apropriado para o nodo
         else this.insertNode(node, root.left)
      }
      else if(node.element > root.element) {
         // Mesma lógica do if, mas aplicada ao lado direito do nó
         if(root.right === null) root.right = node
         else this.insertNode(node, root.right)
      }
      
   }

   // Percurso em-ordem
   inOrderTraverse(root = this.root) {
      //console.log('Raiz: ', root? root.element : null)
      if(root !== null) {
         this.inOrderTraverse(root.left)
         console.log(root.element + ' ') // Exibe o valor do nodo
         this.inOrderTraverse(root.right)
      }
   }
}

let tree = new BinarySearchTree()
//console.log(tree)

tree.insert(45)
//console.log(tree)

tree.insert(19)
//console.log(tree)

tree.insert(31)
//console.log(tree)

tree.insert(66)
//console.log(tree)

tree.inOrderTraverse()