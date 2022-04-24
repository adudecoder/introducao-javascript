console.log('------------------------------------------------')
console.log('Arrays')

var lista = ['Maça', 'Pêra', 'Laranja']; // Uma lista de array
console.log(lista);

var lista = ['Maça', 'Pêra', 'Laranja'];
console.log(lista[1]); // Para exibir um indece da lista usamos chaves é a posição do item ta lista

var lista = ['Maça', 'Pêra', 'Laranja'];
lista.push('Uva'); // push() Para adicionar um item ao final da lista
console.log(lista);

var lista = ['Maça', 'Pêra', 'Laranja'];
lista.pop(); // pop() Para tirar o ultimo item da lista
console.log(lista);

var lista = ['Maça', 'Pêra', 'Laranja'];
console.log(lista.length); // length Para ver o tamanho da lista

var lista = ['Maça', 'Pêra', 'Laranja'];
console.log(lista.reverse()); // reverse() para exibir a lista ao contrario

var lista = ['Maça', 'Pêra', 'Laranja'];
console.log(lista.toString()); // toString() converte a lista para string

var lista = ['Maça', 'Pêra', 'Laranja'];
console.log(lista.join(' - ')); // join para substituir um elemento e transforma os itens em string

console.log('------------------------------------------------')

console.log('------------------------------------------------')
console.log('Dicionário')

var carro = {nome: 'Supra', cor: 'Preto'}; // Parece um objeto JSON
console.log(carro);

var carro = {nome: 'Supra', cor: 'Preto'};
console.log(carro.nome); // Para buscar um item no dicionário

var carros = [{nome: 'Supra', cor: 'Preto'}, {nome: 'SilviaS15', cor: 'Prata'}]; // Agora temos uma lista de dicionários
console.log(carros);

var carros = [{nome: 'Supra', cor: 'Preto'}, {nome: 'SilviaS15', cor: 'Prata'}]; // Agora temos uma lista de dicionários
console.log(carros[1].nome); // Para buscar um item dentro de uma lista de dicionários