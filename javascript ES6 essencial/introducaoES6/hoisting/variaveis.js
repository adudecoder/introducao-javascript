// HOISTING DE VÁRIAVEIS

// Exemplo 1 - Teremos um erro de declaração de váriavel
function fn() {
    console.log(text); // Retornando indefined

    var text = 'Exemplo';

    console.log(text); // Retorna o valor Exemplo

}
fn();

// Exemplo 2 - Hoisting em ação, não teremos um erro de declaração de váriavel
function fn2() {
    var text2; // Içar a declaração
    console.log(text2);

    text2 = 'Exemplo 2';

    console.log(text2);
}
fn2();