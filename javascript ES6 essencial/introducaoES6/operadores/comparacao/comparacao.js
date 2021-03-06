// Igual (==)
// Retorna verdadeiro caso operandos sejam iguais. 3 == var1
"3" == var1
3 == '3'

// Não igual (!=)
//Retorna vardadeiro caso os operandos não sejam iguais. var1 != 4
var1 != "3"

// Estritamente igual (===)
// Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. veja também Object.is e igualdade
3 === var1

// Estrtitamente não igual (!==)
// Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo
var1 !== "3"
3 !== '3'

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita
var2 > var1
"12" > 2

// Maior que ou igual (>=)
// Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita
var2 >= var1
'12' >= 3

// Menor que (<)
// Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
"12" < "2"

// Menor que ou igual (<=)
// Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita
var1 <= var2
var2 <= 5