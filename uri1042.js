var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

valores = lines.shift().split(" ")
numero1 = parseInt(valores[0])
numero2 = parseInt(valores[1])
numero3 = parseInt(valores[2])

var numero = [numero1, numero2, numero3]
var numeroo = [numero1, numero2, numero3]

for (var i = 0; i < 3; i++) numero[i]
numero.sort(function(a, b){return a-b});
for (var i = 0; i< 3; i++) console.log(numero[i]);

console.log()
for (var i = 0; i < 3; i++) numeroo[i]
for (var i = 0; i< 3; i++) console.log(numeroo[i]);


