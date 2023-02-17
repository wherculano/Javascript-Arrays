const nomes = ["Evaldo", "Mari", "Camis"]

// function imprimeNomes(nome){
//     console.log(nome)
// }
const imprimeNomes = (nome) => console.log(nome)
nomes.forEach(imprimeNomes)

console.log("-=".repeat(15))

// funcao que retorna um numero se ele for maior que 0
const callbackExample = (x) => x >= 0

// Retorna apenas numeros positivos de uma lista
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray
}

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = removeNeg(myNumbers, callbackExample);

console.log(posNumbers)