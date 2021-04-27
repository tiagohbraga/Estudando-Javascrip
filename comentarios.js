// para usar comentario em linha no javascrip eu uso essas duas barras no começo
/* para criar um comentario em bloco eu inicio com os caracteres que estão no inicio dessa linha e fecho com os que estão no final */
//console.log('Bem vindos ao Starter!!')

/*
 String

    * Cadeia de caracteres

    "" - aspas duplas
    '' - aspas siples
    `` - templete literals ou tamplate strings (posso inclusive fazer multilinhas)
*/

/* aula 5 - Tipos de dados
    Number 
    *números

        33 - inteiros
        12.5 - reais
        NaN - Not a Number
        Infinity - infinito */

/* aula 6 - Boolean (boleano)
    - somente 2 valores
    true - verdadeiro
    false - falso
*/
/*aula 7
    undefined
    -indefinido

    null
    -nulo
    -objeto que não possui nada dentro
    - diferentede indefinido
*/
/* Tipo de dado estrutural
    object
    -objeto
    -propriedade/atributos
    -funcionalidade/métodos

        { propriedade : "valor"}
*/
/* Tipo de dado estrutural
    Array (vetores)
    -Uma lista
    - Agrupamento de dados

    ["mayk", 36]
*/


/* var ou let da no mesmo nesse caso
var clima= "Quente"
clima = "Frio"

console.log (clima)

o const não se aplica dessa forma pq ele é uma constante, então não se pode atribuir novos valor
*/
___________________________________________

// Block statement - aula de scope ```js
 //vamos criarum bloco
 {
     //aqui dentro é um bloco e posso colocar qualquer código
 } //aqui fechamos o bloco

/* o bloco, tamém criará um novo escopo. Chamamo de 'block-scoped' */

/* 
    var ```JS no var acontece o hoist
 var é um global e poderá funcionar fora de um escopo de bloco*/
  
 /*console.log ('> existex antes do bloco?', x)
 {
     var x = 0
 }
 console.log ('> existe x depois do bloco?',x)
 */

 /*  const e let ```JS
    const e let são locais e só funcionam no escopo onde foi criada

 {
     let  y = 0
     console.log ('> existe y antes?', y)
 }
 console.log ('> existe y depois do bloco?',y) <-> isso dessa forma não funciona, precisa colocar dentro de um novo escopo
 */

