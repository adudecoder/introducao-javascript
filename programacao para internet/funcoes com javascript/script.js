// Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(1, 1));

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome);
}
console.log(setReplace('Lets go', 'Brasil', 'USA'));

function validaIdade(idade) {
    let valida;

    if(idade >= 18) {
        valida = true;
    } else {
        valida = false;
    }

    return valida;

}
console.log(validaIdade(24));