const alunos = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre',
    'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
]

// Dividir a sala em duas turmas
const sala1 = alunos.slice(0,alunos.length/2) // (0,10) indo de 0 a 9, 10 exclusivo
console.log(sala1)

const sala2 = alunos.slice(alunos.length/2) // (10) do 10 ate o utlimo
console.log(sala2)
