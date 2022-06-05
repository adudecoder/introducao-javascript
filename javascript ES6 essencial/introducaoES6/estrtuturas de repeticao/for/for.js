/**
 * 
 *  for ([expressaoInicial]; [condicao]; [incremento])
 *      declaração
 * 
 */

const ARRAY = ['one', 'two', 'three'];

for (let index = 0; index < ARRAY.length; index++) {
    const ELEMENT = ARRAY[index];
    console.log(`Element #${index}: ${ELEMENT}.`);
}