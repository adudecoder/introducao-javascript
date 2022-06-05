// break
console.log('Exemplo da utilização de break');

var index = 0;

while(true) {
    index++;

    if (index > 2) {
        break;
    }

    console.log(index);
}

// continue
console.log('\nExemplo da utilização de continue');
const ARRAY = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < ARRAY.length; index++) {
    const ELEMENT = ARRAY[index];

    if (ELEMENT % 2 === 0) {
        continue;
    }

    console.log(ELEMENT);
}