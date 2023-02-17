const numerosPares = [2, 4, 6, 8, 10]
const numerosImpares = [1, 3, 5, 7, 9]

// concat: Une (concatena) dois Arrays)
const concatenacaoArrays = numerosImpares.concat(numerosPares)
console.log(concatenacaoArrays)

console.log("-=-=-=-=-=-=-=-=-=-=-")

// filter: Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós
const pares = concatenacaoArrays.filter(par => par % 2 == 0)
console.log(pares)

console.log("-=-=-=-=-=-=-=-=-=-=-")

// find: informa o primeiro elemento do valor passado (ainda que possua valores iguais)
const nomes = ["Joao", "Maria", "Jose", "Josefa", "Pedro", "Camila"]
const nomeEncontrado = nomes.find(nome => nome === "Maria")
console.log(nomeEncontrado)

console.log("-=-=-=-=-=-=-=-=-=-=-")

// findIndex: informa o primeiro indice do valor passado (ainda que possua valores iguais)
const pedroIndice = nomes.findIndex(nome => nome === "Pedro")
console.log(pedroIndice)
console.log(nomes[pedroIndice])

console.log("-=-=-=-=-=-=-=-=-=-=-")

// lastIndexOf: informa o ultimo indice do valor passado (ainda que possua valores iguais)
const josefaIndice = nomes.lastIndexOf("Josefa")
console.log(josefaIndice)
console.log(nomes[josefaIndice])

console.log("-=-=-=-=-=-=-=-=-=-=-")

// forEach: itera sobre os elementos
const vogais = ['a', 'e', 'i', 'o', 'u']
vogais.forEach(letra => console.log(letra))

console.log("-=-=-=-=-=-=-=-=-=-=-")

// shift: remove primeiro elemento da lista
const numerosZeroADez = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numerosZeroADez)
numerosZeroADez.shift()
console.log(numerosZeroADez)

console.log("-=-=-=-=-=-=-=-=-=-=-")

// unshift: Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
const vogaisFaltandoA = ['e', 'i', 'o', 'u']
vogaisFaltandoA.unshift('a')
console.log(vogaisFaltandoA)

console.log("-=-=-=-=-=-=-=-=-=-=-")

/* reduce: Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável 
   que pode ser acessada dentro da função que foi definida, retornando um único valor no final, 
   reduzindo o array para um único valor.
*/
const arrayDezenas = [10, 20, 30, 40, 50]
const valorInicial = 0

const soma = arrayDezenas.reduce((acumulador, valorAtual) => acumulador + valorAtual + valorInicial)
console.log(soma)

// reduceRight: Funciona igual o reduce() porém começa do final do array e segue até o início.
const vogaisReversa = vogais.reduceRight((acumulador, valorAtual) => acumulador.concat(` ${valorAtual}`))
console.log(vogaisReversa)

console.log("-=-=-=-=-=-=-=-=-=-=-")

// reverse: Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
console.log(vogais.reverse())

console.log("-=-=-=-=-=-=-=-=-=-=-")

// slice: Copia uma parte do array para outro array.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals)
console.log(`slice(2, 4): ${animals.slice(2, 4)}`)
console.log(`slice(-2): ${animals.slice(-2)}`)
console.log(`slice(2, -1): ${animals.slice(2, -1)}`)

console.log("-=-=-=-=-=-=-=-=-=-=-")

/* sort: Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, 
    porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
*/
const numerosAleatorios = [1,5,7,9,6,3,4,2,8]
console.log(numerosAleatorios.sort())

console.log("-=-=-=-=-=-=-=-=-=-=-")

/* splice: Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, 
    e incluir um ou mais elementos a partir de um índice escolhido
*/
const months = ['Jan', 'March', 'April', 'June'];
console.log(`Inicial: ${months}`)

months.splice(1, 0, 'Feb')
console.log(`splice(1, 0, 'Feb'): ${months}`)

months.splice(4, 1, 'May')
console.log(`splice(4, 1, 'May'): ${months}`)

console.log("-=-=-=-=-=-=-=-=-=-=-")
/*
Mais em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
