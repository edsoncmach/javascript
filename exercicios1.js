/* [ ] Faça um programa que SOME 2 números */

let number1 = 10
let number2 = 7
resultSum = number1 + number2

console.log(resultSum)

/* [ ] Faça um programa que multiplique 2 números e o resultado adicione 10 */

let number3 = 10
let number4 = 7
resultMult = number1 * number2 + 10

console.log(resultMult)

/* [ ] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33 */

let number5 = 144
let raizQuadrada = Math.sqrt(number5, 2)
resultSqrt = (raizQuadrada * 10) / 33

console.log(resultSqrt)

/* [ ] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2) */

let name = 'Edson'
let partner = 'Casca de Bala'

console.log(`Olá, meu nome é ${name} e meu partner do DevClub é ${partner}.`)

/* [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false. */

let name1 = 'Edson'
let name2 = 'Edson'

console.log(name1 == name2)

/* [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true. */

let name3 = 'Edson'
let name4 = 'Sophie'

console.log(name3 != name4)

/* [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false. */

const names = ['Carlos', 'Carlos']

console.log(names[0] == names[1])

/* [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true. */

const names2 = ['Carlos', 'Ana']

console.log(names[0] == names[1])

/* [ ] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa. */

let person1 = {
    name: "Edson",
    age: 40,
    eyeColor: "Castanho Escuro",
    skinColor: "Parda",
    height: 1.70
}

let person2 = {
    name: "Jocineia",
    age: 33,
    eyeColor: "Castanho Claro",
    skinColor: "Branca",
    height: 1.70
}

let person3 = {
    name: "Sophie",
    age: 8,
    eyeColor: "Castanho Claro",
    skinColor: "Branca",
    height: 1.40
}

console.log(person1)
console.log(person2)
console.log(person3)

/* [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.*/

let person4 = {name: "Edson"}
let person5 = {name: "Edson"}

console.log(person4.nome == person5.nome)

/* [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.*/

let persons = {fisrtName: "Edson", secondName: "Jocineia"}

console.log(persons.fisrtName != persons.secondName)

/* [ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.*/

let numberRandom = Math.floor(Math.random() * 100)

console.log(numberRandom)

/* [ ] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.*/

let number6 = 15
let number7 = 9

console.log(number6 % number7)

/* [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.*/

let number8 = 15
let number9 = 9

console.log(number8 > number9)

/* [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.*/

let number10 = 15
let number11 = 9

console.log(number6 < number7)

/* [ ] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3*/

const frutas = ['Morango', 'Banana', 'Melancia']
const verduras = ['Abobrinha', 'Chuchu', 'Cenoura', 'Beterraba', 'Pepino']

console.log(frutas.length)
console.log(verduras.length)