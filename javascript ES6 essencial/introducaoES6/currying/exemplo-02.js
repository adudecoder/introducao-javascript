// FUNÇÃO CURRYING
function soma(a) { // PARA CADA PARAMÊTRO VAMOS CRIAR UMA NOVA FUNÇÃO
    return function(b) {
        return a + b;
    }
}

const SOMA2 = soma(2);

console.log(SOMA2(2));
console.log(SOMA2(3));
console.log(SOMA2(4));
console.log(SOMA2(5));