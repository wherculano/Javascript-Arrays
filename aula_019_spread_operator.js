const notas = [7, 7, 8, 9]

const notasComReferecia = notas
notas.push(10)

console.log("-=".repeat(22))

console.log(`Notas originais: ${notas}`)
console.log(`Notas copiadas com referencia: ${notasComReferecia}`)

notas.pop()

console.log("-=".repeat(22))

console.log(`Notas originais: ${notas}`)
console.log(`Notas copiadas com referencia: ${notasComReferecia}`)

// spread operation (operador de espalhamento): copia array sem a referencia e adiciona 10
const notasSemReferecia = [...notas, 10]

console.log(`Notas copiadas sem referencia: ${notasSemReferecia}`)
