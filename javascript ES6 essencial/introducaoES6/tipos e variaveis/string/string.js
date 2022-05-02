// Retona o tamanho de uma string
const TEXT_SIZE = 'Texto'.length;
console.log(`Quantidade de letras: ${TEXT_SIZE}`);

// Retorna um array quebrando a string por um delimitador
const SPLITTED_TEXT = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', SPLITTED_TEXT);

// Busca por um valor e substitui por outro
const REPLACED_TEXT = 'Texto'.replace('Texto', 'replaced texto');
console.log('\nSubstituição de valor:', REPLACED_TEXT);

// Retorna a "Fatia" de um valor
const LAST_CHAR = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', LAST_CHAR);

const ALL_WITHOUT_LAST_CHAR = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', ALL_WITHOUT_LAST_CHAR);

const SECOND_TO_END = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', SECOND_TO_END);

// Retorna vários caracters a partir de uma posição
const TWO_CHARS_BEFORE_FIRST_POS = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', TWO_CHARS_BEFORE_FIRST_POS);