const USERS = ['Victor', 'Pedro', 'Jennifer'];

const GENDER = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const PERSONS = [
    {
        name: 'Victor',
        age: 24,
        gender: GENDER.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: GENDER.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: GENDER.WOMAN
    }
];

// Retornar a quantidade de itens de um aray
console.log('Item:', PERSONS.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(PERSONS));

// Iterar os itens do array
PERSONS.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array
/**
 * Filter, Map e Reduce não altera a referencia do objeto, eles retornam um novo
 */
const MENS = PERSONS.filter(person => person.gender === GENDER.MAN);
console.log('\nNova lista apenas com homens:', MENS);

// Retornar um novo
const PERSONS_WITH_COURSE = PERSONS.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', PERSONS_WITH_COURSE);

// Transformar um array em outro tipo
const TOTAAL_AGE = PERSONS.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', TOTAAL_AGE);

// Juntando operações
const TOTAL_EVEN_AGES = PERSONS.filter(person => person.age % 2 === 0).reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas que possuem idade par:', TOTAL_EVEN_AGES);