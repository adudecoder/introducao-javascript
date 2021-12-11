// Tipos de funções

// Declarativas
function funcao() {
    console.log("Função declarativa");
}

funcao();


// Expressão de função
// Com nomeação
var funcaoN = function funcaoN() {
    console.log("Função de expressão, com nomeação!")
}

funcaoN();

// Sem nomeação
var funcaoX = function() {
    console.log("Função de expressão, sem nomeação!")
}

funcaoX();


// Arrow Function
var funcaoY = () => {
    console.log("Arrow function!")
}

funcaoY();