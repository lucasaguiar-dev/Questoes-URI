var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

valores = lines.shift().split(" ")
valores2 = lines.shift()

notaExame = parseFloat(valores2)

nota1 = parseFloat(valores[0])
nota2 = parseFloat(valores[1])
nota3 = parseFloat(valores[2])
nota4 = parseFloat(valores[3])

media = [(nota1*2) + (nota2*3) + (nota3*4) + (nota4)]/10

console.log("Media: " + (media).toFixed(1));

if (7.0 <= media){
    console.log("Aluno aprovado.");
} else if (5.0 <= media && media < 7.0){
    console.log("Aluno em exame.");
} else {
    console.log("Aluno reprovado.");
}

if (7.0 > media && media >= 5.0){
console.log("Nota do exame: " + (notaExame).toFixed(1));
}

media2 = [(media)+(notaExame)]/2

if (7.0 > media && media >= 5.0){
    if (5.0 <= media2){
    console.log("Aluno aprovado.");
    console.log("Media final: " + (media2).toFixed(1));
    } else {
    console.log("Aluno reprovado.");
    console.log("Media final: " + (media2).toFixed(1));
}
}
