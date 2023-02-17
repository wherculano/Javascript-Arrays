const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const indice = listaDeAlunosEMedias[0].indexOf(aluno)
        const media = listaDeAlunosEMedias[1][indice]
        console.log(`Nome:\t${aluno}\nMédia:\t${media}`)
    }else{
        console.log(`Aluno ${aluno} não encontrado!`)
    }
}

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=")
exibeNomeENota('Ana')
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=")
exibeNomeENota('Reginaldo')
