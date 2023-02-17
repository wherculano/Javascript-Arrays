
const pares = [2,4,6]
const impares = [1,3,5]
let imparesEPares = [impares, pares]
console.log(imparesEPares)

let imparesEParesDesestruturados = [...impares, ...pares]  // ... "abre" o array
console.log(imparesEParesDesestruturados)

const numeros = [1,2,3,4,5]
const [n1, n2, ...nN] = numeros
console.log(n1)
console.log(n2)
console.log(nN)

const pessoa = {
    nome: "Wagner",
    idade: 34,
    profissao: "Dev. Backend"
}

// Se o nome da variavel for igual ao nome do atributo, também da para fazer destructing
const pessoaComTelefone = {...pessoa, telefone: '(xx) xxxxx-xxxx'}
const {telefone} = pessoaComTelefone  // mesma coisa que telefone = pessoaComTelefone.telefone
console.log(`Tel: ${telefone}`)

const exibeDados = ({nome, idade}) => console.log(`${nome} tem ${idade} anos de idade.`)
exibeDados(pessoa)