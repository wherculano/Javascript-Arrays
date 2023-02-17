const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"]
console.log(nomes)

/* 
splice: Altera o array original. Parametros:
    start: indice do elemento que quer remover
    deleteCount: quantidade de indices a serem removidos a partir do indice dado
    items: Elemento que irá substituir os que forem removidos
*/

nomes.splice(1, 2, "Rodrigo") // removendo 2 elementos a partir do indice 1 (Ana, Caio) e inserindo Rodrigo

/*
Ou poderia nao passar o Rodrigo como parametro e depois usar 
nomes.push("Rodrigo")
que o colocaria no ultimo indice, ao inves de coloca-lo no indice removido anteriormente.
*/
console.log(nomes)

// Apenas adicionar sem remover
nomes.splice(1,0, "Matheus") // na posicao 1, nao exclua ninguem e adicione o Matheus
// splice pode ser usado ao inves do push pois permite escolher a posicao que irá incluir, push é sempre no fim
console.log(nomes)
