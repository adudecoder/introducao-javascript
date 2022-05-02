const STUDENTS = [ // Array de alunos
    {
        name: 'Victor', // 2 Atributos
        grade: '7'
    },
    {
        name: 'João',
        grade: '4'
    },
    {
        name: 'Luiz',
        grade: '10'
    }
];

function getApprovedStudents(studentsList) { // Funçao que recebe a lista de alunos
    return studentsList.filter(STUDENTS => STUDENTS.grade >= 7); // retornando só os alunos aprovados!
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(STUDENTS));

console.log('\nLista de alunos:');
console.log(STUDENTS);