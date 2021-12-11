var jogador1 = 5;
var jogador2 = 0;
var placar;

if (jogador1 != -1) {

    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto!');
    } else {
        console.log('Ninguem marcou ponto!');
    }
    
}

// if ternario
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são validos") : console.log("Jogadores invalidos");

    // Usando if
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;

    // Usando else if
    } else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;

    // Usando else    
    } else {
        console.log('Ninguem marcou ponto!');
    }
    

// Usando switch/case
switch (placar) {

    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou!");
    break;                                  // BREAK para o codigo, caso contrario fica em loop infinito
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou!");
    break;
    default: // Default caso nenhum dos case sejam validos
        console.log("Ninguem ganhou!");

}


// Laços de repetição

// for
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for executa uma instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}


// for/in funciona como uma repetição a partir de uma propriedade
// Com array
for (let i in array) {
    console.log("Com array", i);
}


// Com object
for (i in object) {
    console.log("Com object", i);
}


// for/of funciona como uma repetição a partir de um valor
// Com array
for (i of array) {
    console.log("Com array", i);
}


// Com object
for (i of object.propriedade1) {
    console.log("Com object", i);
}


// while executa uma instrução "ENQUANTO" determinada condição for verdadeira, a verificação é feita antes da execução
var a = 0;

while (a < 10) {
    a++;
    console.log("while", a);
}


// do/while executa uma instrução "ATÉ QUE" determinada condição seja falsa, a verificação é feita depois da execução
do {
    a++
    console.log("do/while", a);
} while (a < 10)