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

/*<script> (revisão)
    //variáveis e tipos de dados
    var name // declaração or declaration

    name = "Mike" //assignment or atribuição de valores

    //console.log(typeof name) //que tipo de dado foi colocado na variável

    let age, isHuman //agrupamento de declarações

     age = 20 
     isHuman = true //finaliza aqui
     //console.log (name, age, isHuman) //multiplos argumentos na função

     //console.log('o '+ name + ' tem ' + age + ' anos.')//escrita de texto + variáveis concatenando valores

     console.log(`o ${name} tem ${age} anos`)//escrita de texto + variáveis interpolando valores com template literals or tamplate strigs
</script>*/

/*puxando no html o js ou qualquer outro colocando o endereço
<body>
    <script src="./scripts.js"></script>
</body>
*/


/*object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos`)*/

/*Array (usar let em vez de const) - revisão

const animals = [
    'Lion',
    'Monley',
    {
        name: 'Cat',
        age: 3
    }
]

//acessar valores
console.log (animals[2])*/
__________________________________________________________

//Aula de functions
/*

function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
} //delaration - declaração da função (function statement)
dessa forma não aparece no console, ele esta armazenado na memoria aguardando ser chamado por outro comando*/

/*createPhrases() - Executar a função -> rodar, chamar, invocar or execut, run, call, invoke (outras formas de falar essa execução da função)*/

/* pra que a função? serve para agrupar código, reutilização varias vezes do código, dar signifiado a um bloco de código e mantem organizado*/

/*const sum = function (number1, number2)//parâmetros (parameters)
 {
    console.log(number1 + number2)
} //função anonima or function expression or function anonymous
sum(2, 3)//arguments or argumentos*/

/*const sum = function (number1, number2){
   total = number1 + number2
   return total
} 

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log (`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)*/

/*Função é um liquidificador (bem ludico)

function fazerSuco (fruta1, fruta2){
    return 'suco de: ' + fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')

console.log(copo)*/


 /*function scope

let subject

function createThink(){
    subject = 'study'
    return subject
}
console.log(subject) //esse puxou do let (que ta fora do escopo) que me retornou undefined pq não tem argumeto 
createThink()//esse só acionou o createTHink (dentro do escopo) mas não mostra nada pq não tem um console.log
console.log(subject)//esse puxou da function ja acionada pelo createThink anterior e mostra no console (o que ta dentro do escopo)*/

/*functions hoisting

sayMyName()
function sayMyName(){
    console.log('Tiago')
}*/

/*arrow function (+ moderno ele fica mais compacto e é um jeito do tipo expression)

const sayMyName = () => {
    console.log('Tiago')
}
sayMyName()

geralmente se atribui ela para uma constante (const)*/

/*callback function

function sayMyName(name){
    console.log(name)

}
sayMyName(
    () => {
        console.log('estou emuma callback')
    }
)*/

/*
Function () constructor
    *expressão new
    *criar um novo objeto
    *this keyword

function Person (name){
    this.name = name
    this.walk = function (){
        return this.name + " esta andando"
    }
}
const mayk = new Person ("Mayk")
const joao = new Person ("João")
console.log(mayk)
console.log(joao)
console.log(mayk.walk())
console.log(joao.walk())*/

/*isso é o lance do js
    *prototype-based language
    *prototype chan
    *__proto__
*/

/*
    Type conversion (typecasting) (eu faço manualmente) vs Type coersion (o proprio programa faz de forma forçada)

    *Alteração de um tipo de dado para outro tipo de dado
*/
    
/*
manipulando String e Números
Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

/* manipulando String e Números

contar quantos caracteres tem uma palavra e quantos digios tem um numero

let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

/* manipulando String e Números
    Transformar um número quebrado com 2 casas deimais e trocar ponto por vírgula
    let number = 345.33452345
    console.log(number.toFixed(2).replace(".",","))
*/

/* manipulando String e Números
Transforme letras minúsculas em maiúsculas. faça o contrario também
    let word = "Programar é muito bacana!"
    console.log (word.toLowerCase())
    console.log (word.toUpperCase())
*/

/* manipulando String e Números
Separe um texto que contem espaços. em um novo array onde cada texto é uma posição do array.

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

Depois disso transforme o array em um texto onde eram espaços, coloque _
    let phraseWithUnderscore = myArray.join ("_")
console.log(phraseWithUnderscore)

*/

/* manipulando String e Números
    Verificando se o texto contém a palavra Amor
    let phrase = "Eu quero viver o Amor!"
    console.log(phrase.includes("Amor"))
o .includes é case sensitive, então faz diferença pra ele maiúsculas e miúsculas!
*/
/*Manupulando Arrays
    Criar Array com construtor
    let myArray = new Array ('a', 'b', 'c')
    console.log(myArray)
*/

/*Manupulando Arrays
contar elemeto de um array
    console.log([
"a", "b", "c"].length)
*/

/*Manupulando Arrays
Transformar uma cadeia de caracteres (uma String) em elemetos de um array
        let word = "manipulação"
console.log(Array.from(word))
*/
/*Manipulando Arrays
let techs = ["html", "css", "js"]
//adcionar um item no fim
techs.push ("nodejs")
//adicionar um item no começo
techs.unshift ("sql")
//remover do fim
//techs.pop()
//remover do começo
//techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))
//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1,2)
//encontrara posição de um elemento no array
let index = techs.indexOf ('css')

console.log(index)*/
/*
/*Expressões e Operadores
-Expressions (é qualquer linha de codigo que resolve alguma coisa no js)
-Operators
    Binary
    Unary
    Ternary

let number = 1/*isso aqui é uma expressão*/

/*console.log(--number) unary*/
/*console.log(number + 1) Binary*/
/*console.log (false ? 'alo' : 'nada') Ternary (unico no js por enquanto)*/

/* new
    *left-hand-side expression
    *criar um novo projeto


let name = new String ('Mayk')
let age = new Number (23)
let date = new Date ('2021-05-06')
console.log(date)
*/

/* operadores do tipo unário
typeof
console.log(typeof "mayk")

delete
const person = {
    name: 'mayk',
    age: 25,
}
delete person.age
console.log(person)
*/

/*Operadores Aritiméticos

Multiplicação *
console.log(3.2 * 5.5)

Divisão / 
console.log(12 / 2)

Soma +
console.log(34 + 67)

Subtração - 
console.log(34 - 23)

Resto da divisão %
let remainder
remainder = 11 % 3
console.log(remainder)

Incremento ++
let increment = 0
increment ++
console.log(increment)

Decremento --
let decrement = 0
console.log(--decrement)

Expenencial **
console.log(3 ** 2)
*/

/*Gouping operator () faz mais sentido usar para calculos matematicos

let total = (2 + 3) * 5
console.log (total)*/

/*operadoresde comparação

Irá comparra valores e retornar um Boolean como resposta a comparação

let one = 1
let two = 2

 == igual a
 = recebe
console.log(two == 1)
console.log(one == 1)

 != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

=== estritamente igual a
onsole.log(one === "1")
onsole.log(one === 1)

!== estitamente diferente
console.log(two !== "22")
console.log(two !== 2)
*/

