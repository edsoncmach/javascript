
/* [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"*/

const number = 10
let numberToCompare = 12
if (numberToCompare > number) {
    console.log(`O número ${numberToCompare} é maior que ${number}`)
} else if (numberToCompare < number) {
    console.log(`O número ${numberToCompare} é menor que ${number}`)
} else {
    console.log(`O número ${numberToCompare} é igual a ${number}`)
}

/* [ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO*/

const person = {
    name : 'Edson',
    age: 40,
    nationality: 'Brasileiro'
}

console.log(person.nationality == 'Brasileiro' ? "É brasileiro." : "Não é brasileiro.")

/* [ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.*/

const drawnNumber = Math.floor(Math.random() * 10)
const luckyNumber = 7
const award = Math.floor(Math.random() * 500)

if (drawnNumber == luckyNumber) {
    console.log(`Você acaba de ganhar um prêmio de R$ ${award},00.`)
} else {
    console.log("Que pena. Tente outra vez!")
}

/* [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.*/

let number1 = 5
let number2 = 8
let number3 = 14

console.log(Math.max(number1, number2, number3))
console.log(Math.min(number1, number2, number3))

/* [ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.*/

let person1 = {
    name: "Edson",
    age: 40,
    genre: "Male",
    profession: "Developer",
    nationality: "Brasileira"
}

let person2 = {
    name: "Jocineia",
    age: 33,
    genre: "Female",
    profession: "Domestic",
    nationality: "Brasileira"
}

let person3 = {
    name: "Sophie",
    age: 8,
    genre: "Female",
    profession: "Student",
    nationality: "Brasileira"
}

if (person1.age >= 18 && person1.nationality == "Brasileira") {
    console.log(`${person1.name} está aprovado(a).`)
}else {
    console.log(`${person1.name} não está aprovado(a).`)
}
/* [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.*/

const note = 7

switch (note) {
    case 0:
        console.log('0 - Exercício não concluído!')
    break;
    case 1:
        console.log('1 - Exercício iniciado e não concluído!')
    break;
    case 2:
        console.log('2 - Exercício iniciado e não concluído!')
    break;
    case 3:
        console.log('3 - Exercício iniciado e apresenta falhas!')
    break;
    case 4:
        console.log('4 - Exercício iniciado e apresenta falhas!')
    break;
    case 5:
        console.log('5 - Exercício iniciado, apresenta falhas, mas com evolução!')
    break;
    case 6:
        console.log('6 - Exercício iniciado, apresenta falhas, mas com evolução!')
    break;
    case 7:
        console.log('7 - Exercício completo, apresenta falhas, poucas alterações!')
    break;
    case 8:
        console.log('8 - Exercício completo, apresenta falhas, poucas alterações!')
    break;
    case 9:
        console.log('9 - Exercício completo, sem bugs, e poucas alterações!')
    break;
    case 10:
        console.log('10 - Exercício completo!')
    break;
}

/* [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.*/

let number4 = 16

if (number4 % 2 == 0) {
    console.log(`O número ${number4} é par.`)
} else {
    console.log(`O número ${number4} é ímpar.`)
}

/* [ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.*/

let number5 = 17

if (number5 % 2 == 0) {
    if (number5 % 5 == 0) {
        console.log(`O número ${number5} é par e divisível por 5.`)
    } else {
        console.log(`O número ${number5} é par, mas não é divisível por 5.`)
    }
} else {
    for (let i = 2; i < number5; i++){
        if (number5 % i == 0) {
            console.log(`O número ${number5} é ímpar mas não é primo.`)
        } else {
            if (i == number5 - 1) {
            console.log(`O número ${number5} é ímpar e é primo.`)
            }
        }
    }
}

/* [ ] Faça um programa onde ele leia 3 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.*/

let number7 = 2
let number8 = 15
let number9 = 8

if (number7 % 2 == 0 && number8 % 2 == 0 && number9 % 2 == 0) {
    console.log('Todos os número são pares!')
} else if (number7 % 2 != 0 && number8 % 2 != 0 && number9 % 2 != 0) {
    console.log('Todos os número são ímpares!')
} else {
    console.log('Há números pares e ímpares!')
}