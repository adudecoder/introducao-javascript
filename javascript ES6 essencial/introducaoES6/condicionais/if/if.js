/**
 * if (condition) {
 *      code here
 * }
 */

const ARRAY = [0, 1, 2, 3, 4, 5];

ARRAY.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`);
    } else {
        console.log(`O número ${item} é impar.`);
    }
});