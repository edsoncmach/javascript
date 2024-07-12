/* Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo*/

/* [ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou*/

function printNumber(number) {
    for (let i = 1; i < number + 1; i++){
        console.log(i)
    }
}

printNumber(15)

/* [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.*/

function multiplicationTable(number) {
    if (number < 10 && number > 0) {
        for (let i = 1; i < 11; i++){
            console.log(`${i} x ${number} = ${i * number}`)
        }
    } else {
        console.log('Aceitamos apenas números de 1 a 10!')
    }
}

multiplicationTable(7)

/* [ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!*/

function rightTime(){
    let horaAtual = new Date().toLocaleTimeString('pt-BR');
    console.log(`Hora certa: ${horaAtual}`)
}

rightTime()


/* [ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!*/

function currentYear(){
    let dataAtual = new Date();
    console.log(`Você está em ${dataAtual.getFullYear()}`)
}

currentYear()

/* [ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior*/

function higherNumber(number1, number2){
    if (number1 > number2){
        console.log(`${number1} é maior que ${number2}`)
    } else {
        console.log(`${number2} é maior que ${number1}`)
    }
}

higherNumber(23, 15)

/* [ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
    - média do salário da população;
    - média do número de filhos;
    - maior salário;
- O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!*/

let populationInformation = [
    {wage: 1200, numberOfChildren: 2,},
    {wage: 890, numberOfChildren: 5,},
    {wage: 1450, numberOfChildren: 1,},
    {wage: 2100, numberOfChildren: 2,},
    {wage: -50, numberOfChildren: 3,},
]

function senseSearch(){
    let totalWage = 0
    let arrayWage = []
    for(let i = 0; i < populationInformation.length; i++){
        totalWage += populationInformation[i].wage
        arrayWage.push(populationInformation[i].wage)
    }

    averageWage = totalWage / populationInformation.length
    maxWage = Math.max(...arrayWage)

    let totalChildren = 0
    for(let i = 0; i < populationInformation.length; i++){
        totalChildren += populationInformation[i].numberOfChildren
    }

    averageChildrens = totalChildren / populationInformation.length

    console.log(`Média salarial: R$ ${averageWage}.`)
    console.log(`Média de filhos: ${averageChildrens}.`)
    console.log(`Maior salário: R$ ${maxWage}.`)
}

senseSearch()

/* [ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investido. A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.*/

function interestRate(initialValue, currentValue, investmentTime) {
    let interestAmount = currentValue - initialValue
    let rate = interestAmount / (initialValue * investmentTime)

    return `Taxa: ${rate * 100}%.`
}

console.log(interestRate(2000, 2600, 12))

/* [ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
e NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
- A função deve imprimir na tela:
- Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
- Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/

function calculateDiscount(name, value, isFirstPurchase, isCashPayment){
    
    let discount = 0
    let discountCoupon = Math.floor(Math.random() * (20 - 10) + 10)

    if (isFirstPurchase && isCashPayment){

        if (value >= 1000){
            discount = value - (value * 0.3)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 30% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else if (value < 1000 && value >= 500){
            discount = value - (value * 0.25)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 25% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else {
            discount = value - (value * 0.2)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 20% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        }

    }

    if (isFirstPurchase && !isCashPayment){
        
        if (value >= 1000){
            discount = value - (value * 0.2)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 20% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else if (value < 1000 && value >= 500){
            discount = value - (value * 0.15)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 15% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else {
            discount = value - (value * 0.1)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 10% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        }

    }

    if (!isFirstPurchase && isCashPayment){
        
        if (value >= 1000){
            discount = value - (value * 0.2)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 20% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else if (value < 1000 && value >= 500){
            discount = value - (value * 0.15)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 15% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else {
            discount = value - (value * 0.1)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 10% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        }

    }

    if (!isFirstPurchase && !isCashPayment){
        
        if (value >= 1000){
            discount = value - (value * 0.1)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 10% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else if (value < 1000 && value >= 500){
            discount = value - (value * 0.05)
            console.log('Obrigado pela compra!')
            console.log(`Valor da compra: R$${value}`)
            console.log('Você ganhou 5% de desconto!')
            console.log(`Valor a pagar: R$${discount}`)
        } else {
            discount = value - (value * 0.3)
            console.log('Obrigado pela compra!')
            console.log(`Valor a pagar: R$${value}`)
            console.log(`Você ganhou um cupom de desconto de ${discountCoupon}% na próxima compra!`)
        }

    }
}

calculateDiscount('Edson', 450, false, false)