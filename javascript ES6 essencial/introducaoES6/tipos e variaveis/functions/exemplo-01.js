function fn() {
    return 'Code here';
}

const ARROW_FN = () => 'Code here';
const ARROW_FN2 = () => {
    // Mais de uma expressão
    return 'Code here';
}
// Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const LOG_VALUE = value => console.log(value);
const LOG_FN_RESULT = fnParam => console.log(fnParam());

LOG_FN_RESULT(fn);