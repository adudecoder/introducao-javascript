// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedra", "carvalho", "sicômoro");
0 in arvores;           // Retorna true
3 in arvores;           // Retorna true
6 in arvores;           // Retorna false
"cedro" in arvores;     // Retorna false (você deve especificar o número do índice, não o valor naquele índice)
"length" in arvores;    // Retorna true (length é uma propriedade de array)

// Objetos predefinidos
"PI" in Math;           // Retorna true
var minhaString = new String("coral");
"length" in minhaString;// Retorna true

// Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Civic", ano: 2015};
"marca" in meuCarro;    // Retorna true
"modelo" in meuCarro    // Retorna true

// instaceof
object instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    // Code here
}