const USER = {
    name: 'Victor',
    lastName: 'Martins'
};

function getUserWithFullName(user) {
    return {
        ...user, // Spread Operator, para cada propriedade que recebemos do user, ele vai colocar dentro do novo objeto
        fullName: `${user.name} ${user.lastName}` // String Literal
    }
}

const USER_WITH_FULL_NAME = getUserWithFullName(USER);

console.log(USER_WITH_FULL_NAME);