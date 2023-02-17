const salaJS = ["Evaldo", "Camis", "Mari"]
const salaPython = ["Ju", "Leo", "Raquel"]

// Como concat nao altera o array, cria-se um novo
const salasUnificadas = salaJS.concat(salaPython)
console.log(salasUnificadas)


const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)

const arrayOriginalNumeros = [50, 60, 70]
const arrayConcatNumeros = arrayOriginalNumeros.concat([80, [90, 100]])

console.log(arrayConcatNumeros)
console.log(arrayOriginalNumeros)
