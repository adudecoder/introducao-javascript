const USER = {
    name: 'Victor',
    lastName: 'Martins'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(USER));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(USER));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(USER));

// Mergear propriedades de objeto
Object.assign(USER, {fullName: 'Renan Victor Martins'});

console.log('\nAdiciona a propriedade fullName no objeto user:', USER);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, USER, {age: 24}));

// Previne todas as alterações em um objeto
const NEW_OBJ = { foo: 'bar' };
Object.freeze(NEW_OBJ);

NEW_OBJ.foo = 'Changes';
delete NEW_OBJ.foo;
NEW_OBJ.bar = 'foo';

console.log('\nVariável new_obj após as alterações:', NEW_OBJ);

// Permite apenas a alteração de propriedades existentes em um objeto
const PERSON = { name: 'Victor' };
Object.seal(PERSON);

PERSON.name = 'Victor Martins';
delete PERSON.name;
PERSON.age = 24;

console.log('\nVariável person após as alterações:', PERSON);