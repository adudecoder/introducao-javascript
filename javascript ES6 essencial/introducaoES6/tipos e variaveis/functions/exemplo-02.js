this.name = 'Nome no contexto de criação';

const GET_NAME_ARROW_FN = () => this.name;

function getName() {
    return this.name;
}

const USER = {
    name: 'Nome no objeto de execução',
    GET_NAME_ARROW_FN,
    getName
}

console.log(USER.GET_NAME_ARROW_FN());
console.log(USER.getName());