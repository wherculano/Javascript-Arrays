const notas = [10, 9.5, 8, 7, 6]

// map não altera o conteudo
notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10? 10 : nota + 1
})
console.log("\n" + "-=".repeat(13))
console.log(`Notas sem ponto adicional:\n${notas}`)
console.log("-=".repeat(13))
console.log(`Notas com ponto adicional:\n${notasAtualizadas}`)
