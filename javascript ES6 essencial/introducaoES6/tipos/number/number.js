const MY_NUMBER = 12.4032;

// Transformar número para string
const NUMBER_AS_STRING = MY_NUMBER.toString();
console.log('Número transformado em string:', typeof NUMBER_AS_STRING);

// Retorna número com um número de casas decimais
const FIXED_TWO_DECIMAIS = MY_NUMBER.toFixed(2); // Passando o número de casas decimais
console.log('\nNúmero com duas casas decimais:', FIXED_TWO_DECIMAIS);

//Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));