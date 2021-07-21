var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var todos = lines.shift().split(" ")
var A = parseFloat(todos.shift())
var B = parseFloat(todos.shift())
var C = parseFloat(todos.shift()) 

var triangulo = (A*C)/2
var circulo = Math.pow(C, 2)*3.14159
var trapezio = [(A+B)*C]/2
var quadrado = B*B
var retangulo = A*B

console.log('TRIANGULO: ' + triangulo.toFixed(3))
console.log('CIRCULO: ' + circulo.toFixed(3))
console.log('TRAPEZIO: ' + trapezio.toFixed(3))
console.log('QUADRADO: ' + quadrado.toFixed(3))
console.log('RETANGULO: ' + retangulo.toFixed(3))