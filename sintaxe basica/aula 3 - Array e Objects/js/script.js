// O que são vetores ou arrays

// Manipulando Arrays

// Como declarar um array
let array = ['string', 1, true];
console.log("Como declarar um array", array);

// Pode guardar varios tipos de dados
let arrays = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]; // Um array com arrays
console.log("Um array com arrays", arrays[3]); // Pegando o terceiro indice

// forEach
array.forEach(function(item, index){console.log("forEach", item, index)});

// Push
array.push('novo item'); // Adiciona um novo item no final do array
console.log("Push", array);

// Pop
array.pop(); // Remove um item no final do array
console.log("Pop", array);

// Shift
array.shift(); // Remove um item do inicio do array
console.log("Shift", array);

// Unshift
array.unshift('Novo item'); // Adiciona um item no inicio do array
console.log("Unshift", array);

// IndexOf
console.log("IndexOf", array.indexOf(true)); // Retornar o indice dentro de um array

// Splice
arrays.splice(0, 3); // Remove ou substitui um ite pelo indice
console.log("Splice", array);

// Slice
let novoArray = arrays.slice(0, 3); // Retorna uma parte de um array existente
console.log("Slice", novoArray);

// Manipulando Objetos

let object = { String: 'srting', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}} // Um propriedade que ta recebendo o valor STRING

console.log("Objetos", object.boolean); // Acessando o boolean dentro do object
console.log("Objetos", object.objectInterno); // Acessando o objectInterno dentro do object

// Desestruturação do object
var string = object.String; // Dentro da let object procure a propriedade string
console.log(string);

var arrayInterno = object.array; // Dentro da let object procure a propriedade array
console.log(arrayInterno);

var { String, boolean, objectInterno } = object; // Dentro da let object procure as propriedades string, boolean e objectInterno 
console.log(string, boolean, objectInterno);