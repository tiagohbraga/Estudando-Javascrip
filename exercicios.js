// 1. Declare uma variável denome weight:
let weight

// 2. Que tipo de dado é variável acima?
    //console.log (typeof wight)

/* 3. Declare uma variavéle atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer or inteiro)
        * stars: (float or quebrado)
        * IsSubscribed: Boolean

        let name = "Tiago"
        let age = 33
        let stars = 2.5
        let isSubscribed = true*/

/* 4. A variável student abaixo é de que tipo de dado?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostr no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
        *ATENÇÃO, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto*/

    let student = {
        name: "Tiago",
        age: 32,
        weight: 65,
        stars: 5.3,
        isSubscribed: true,

    }
   // console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)

    /*5. Declare uma variável do tipo Array, de nome student e atribua a ela nenhum valor, ou seja, somente o array vazio*/

    let students = []

    /*6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto,mas usar o objeto criado e inserir ele no array)*/
    
    students = [
        student
    ]

    /*7. Coloque no consoleo valor da posição zero do Array acima*/
    //console.log(students [0])

    /*8. Crie um novo student e coloque na posição 1 do Array students*/

    const ludmila = {
        name: "Ludmila",
        age: 23,
        weight: 50,
        isSubscribed: true
    }
    students = [
        student,
        ludmila
    ]
console.log(students)

/*9. Sem rodar o código respoda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
console.log(a)
var a = 1*/