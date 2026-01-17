const numbers = [1, 2, 3, 4, 5];

// callback
const resultado = numbers.map((element) => {
    const porDos = element * 2
    return porDos
})
console.log(resultado)

// reduce
const resultado2 = numbers.reduce((acc, el) => {
    
    return acc
}, 0)
