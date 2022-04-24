// tipos primitivos

// Boolean
var verdadeiroOuFalso = false;
console.log(typeof(verdadeiroOuFalso)); // Typeof para ver o tipo da variavel

// Number
var numero = 1;
console.log(typeof(numero));

// String
var nome = 'Victor';
console.log(typeof(nome));

// Function
var funcao = function() {}
console.log(typeof(funcao));


// Como Declarar variaveis
var variavel = 'Victor'; // var para escopo global
variavel = 'Martins';
console.log(variavel);

let variavel2 = 'Victor'; // let para escopo local
variavel2 = 'Martins';
console.log(variavel2);

const constante = 'Vitcor';
constante = 'Martins'; // Nessa declaração surgira um erro, pois const não é variavel :p
console.log(constante);


// Escopos globais e locais
var escopoGlobal = 'global'; // Escopo global visivel para todo o codigo
console.log(escopoGlobal);

// Criando uma função de escopo local
function escopoLocal() {

    let escopoLocalInterno = 'Local'; // Escopo local não visivel para todo o codigo
    console.log(escopoLocalInterno);

}

escopoLocal(); // Invocando a função de espoco local agora visivel para todo o codigo


// Atribução
var atribuicao = 'Victor';

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Operadores aritméticos

    // adição
    var adicao = 1 + 1;
    console.log(adicao);

    //subtração
    var subtracao = 2 - 1;
    console.log(subtracao);

    //multiplicação
    var multiplicacao = 2 * 3;
    console.log(multiplicacao);

    //divisão real
    var divisaoReal = 6 / 2;
    console.log(divisaoReal);

    //divisão inteira
    var divisaoInteira = 5 % 2;
    console.log(divisaoInteira);;
        
    //potenciação
    var potenciacao = 2**10;
    console.log(potenciacao);


// operadores relacionais
    // maior que
    var maiorQue = 5 > 2;
    console.log(maiorQue);
        
    // menor que
    var menorQue = 5 < 2;
    console.log(menorQue);
        
    // maior ou igual a
    var maiorOuIgual = 5 >= 2;
    console.log(maiorOuIgual);
        
     // menor ou igual a
    var menorOuIgual = 5 <= 2;
    console.log(menorOuIgual);


// operadores lógicos

    // && - todos os valores devem ser true
    var e = true && true;
    console.log(e);

    // || - somente um valor deve ser true
    var ou = true || false;
    console.log(ou);

    // ! - inverte os valores
    var nao = !true;
    console.log(nao);