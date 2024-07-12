// Exercício 1 - Inserir a informação de setor (Black ou Green), conforme status do vip.

const list = [
    {name: 'Rodolfo', vip: true},
    {name: 'Maria', vip: false},
    {name: 'João', vip: true},
    {name: 'Bruno', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Ana', vip: true},
    {name: 'Julio', vip: false}
]

const listVip = list.map( (i) => {
    if (i.vip == true){
        var newlist = {
            name: i.name, vip: i.vip, sector: 'Black'
        }
    } else {
        var newlist = {
            name: i.name, vip: i.vip, sector: 'Green'
        }
    }
    return newlist
})

console.log(listVip)

// Exercício 1 - Alterar a informação de testGrade para finalResult, conforme a nota (7 ou mais está approved, e menos que 7, está disapproved).

const students = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10}
]

const listStudents = students.map( (i) => {
    if (i.testGrade >= 7){
        var newlist = {
            name: i.name, finalResult: 'approved'
        }
    } else {
        var newlist = {
            name: i.name, finalResult: 'disapproved'
        }
    }
    return newlist
})

console.log(listStudents)