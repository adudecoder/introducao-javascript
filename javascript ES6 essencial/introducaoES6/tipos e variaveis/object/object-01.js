let user = {
    name: 'Victor'
};

// Alterando a propriedade de um objeto
console.log(user);
user.name = 'Outro nome 1';

console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);
const PROP = 'name';

user[PROP] = 'Outro nome 3';
console.log(user);

// Criando uma prorpiedade
user.lastName = 'cabrini da Silva';
console.log(user);

// Deletando uma propriedade
delete user.name;
console.log(user);