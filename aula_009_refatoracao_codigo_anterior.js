const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosEMedias[0]
        // const medias = listaDeAlunosEMedias[1]
        const [alunos, medias] = listaDeAlunosEMedias  // faz a mesma coisa que as linhas acima

        const indice = alunos.indexOf(aluno)
        const media = medias[indice]
        console.log(`Nome:\t${aluno}\nMédia:\t${media}`)
    }else{
        console.log(`Aluno ${aluno} não encontrado!`)
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=")
exibeNomeENota('Juliana')
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=")
exibeNomeENota('Bartolomeu')
