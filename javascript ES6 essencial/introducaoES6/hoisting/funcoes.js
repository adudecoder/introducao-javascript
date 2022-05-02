// É sempre uma boa prática declarar a função antes de usar-lá
function fn() {
    log('Hoisting de função'); // Usando a função log porém declarando ela abaixo

    function log(value) { // Declaração da função log
        console.log(value);
    }
}
fn();

// Hoisting de função
function fn2() {
    function log2(values) { // Função sendo içada como um todo
        console.log2(values);
    }

    log2('Hoisting de função 2');
}
fn2();