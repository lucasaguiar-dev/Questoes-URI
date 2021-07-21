var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

valores = lines.shift().split(" ")
x = parseFloat(valores[0])
y = parseFloat(valores[1])

if (0 < x && y > 0){
    console.log("Q1")
} if (0 > x && y > 0){
    console.log("Q2")
} if (0 > x && y < 0){
    console.log("Q3")
} if (0 < x && y < 0){
    console.log("Q4")
} if (x===0 && y===0){
    console.log("Origem")
} if (x===0 && y!==0){
    console.log("Eixo Y")
} if (y===0 && x!==0){
    console.log("Eixo X")
}