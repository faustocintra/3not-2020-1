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