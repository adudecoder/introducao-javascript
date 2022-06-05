/**
 * if (condition) {
 *      code here
 * } else if (condition2) {
 *      code here
 * }
 */

const ARRAY = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nElse if');
ARRAY.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2.`);
    } else if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    } else if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`)
    }
});

// Se eu não quero que ele caia em mais de uma execução, então temos que executar os IF sozinhos
console.log('\nIF');
ARRAY.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2.`)
    }
    if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`)
    }
    if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`)
    }
});