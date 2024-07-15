// exercício 1: acrescentar 10% os valores de market.
const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const newValuesCompanies = companies.map((company)  => {
    company.marketValue += company.marketValue * 0.1    
    
    return company
})

const oldCompanies = newValuesCompanies.filter( (company) => company.foundedOn < 2000)

const sumOldCompanies = oldCompanies.reduce((acumulator, currentValue) => {
    return acumulator + currentValue.marketValue
}, 0)


console.log(`Total: $ ${sumOldCompanies.toFixed(2)}`)



