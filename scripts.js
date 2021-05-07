/* SISTEMA DE GASTOS FAMILIARES
Crie um objetoque possuirá 2 propriedades, abas do tipo array
    - receitas: []
    - despesas: []

agora crieuma função que irá calular o total de receitas e despesas e irá mostrar uma mensagem se a familía está com saldo positivo ou negativo, seguido do valor do saldo

let family = {
    incomes: [1500, 2200, 250.43,360.45],
    expenses: [320.34, 128.42, 176.87, 1450.00, 2000]
}
function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}
function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if (itsOk){
        balanceText = "Positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}
calculateBalance()
*/