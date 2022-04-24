console.log('Condicionais');

var idade = 18;
if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}

idade = prompt('Qual sua idade?');
if (idade >= 18) {
    alert('Maior de idade')
} else {
    alert('Menor de idade')
}

console.log('---------------------------------------');

console.log('---------------------------------------');
console.log('Laços de repetição');

// A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
var countWhile = 0;
while (countWhile < 5) {
    console.log(countWhile);
    count++
}

// A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
var countFor;
for (countFor = 0; countFor <= 10; countFor++) {
    console.log(countFor);
}

console.log('---------------------------------------');
console.log('Data no JavaScript');

// Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).
var data = new Date();
console.log(data);

var data = new Date();
console.log(data.getMonth()+1); // Para exibir só o mês