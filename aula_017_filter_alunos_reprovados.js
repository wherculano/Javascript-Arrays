const alunos = ["Ana", "Marcos", "Maria", "Mauro"]
const medias = [7, 4.5, 8, 7.5]

// filter: retorna novo array
const reprovados = alunos.filter((_, indice) =>{
    return medias[indice] < 7
})

console.log(`Alunos reprovados: ${reprovados}`)

const aprovados = alunos.filter((_, indice) => {
    return medias[indice] >= 7
})

console.log(`Alunos aprovados: ${aprovados}`)
