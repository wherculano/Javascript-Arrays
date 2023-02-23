const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

// const nomesSet = new Set(nomes)
// const nomesAtualizados = [...nomesSet]
const nomesAtualizados = [...new Set(nomes)] // mesma coisa que as 2 linhas acima
console.log(nomesAtualizados)
