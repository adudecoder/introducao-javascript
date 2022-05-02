const SYMBOL1 = Symbol();
const SYMBOL2 = Symbol();

// Symbol são únicos
console.log('Symbol1 é igual a Symbol2:', SYMBOL1 === SYMBOL2);

// Previnir conflito entre nomes de propriedades
const NAME_SYMBOL1 = Symbol('name');
const NAME_SYMBOL2 = Symbol('name');

const USER = {
    [NAME_SYMBOL1]: 'Victor',
    [NAME_SYMBOL2]: 'Outro nome',
    lastName: 'Martins'
}

console.log(USER);

// Symbols criam propriedades que não são enumberables
for (const KEY in USER) {
    if (USER.hasOwnProperty(KEY)) {
        console.log(`\nValor da chave ${KEY}: ${USER[KEY]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(USER));
console.log('Valores das propriedades do objeto user:', Object.values(USER));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(USER));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(USER));

// Criar um enum
const DIRECTIONS = {
    UP      : Symbol( 'UP' ),
    DOWN    : Symbol( 'DOWN' ),
    LEFT    : Symbol( 'LEFT' ),
    RIGHT   : Symbol( 'RIGHT' )
};

console.log(DIRECTIONS);