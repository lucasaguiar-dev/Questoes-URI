var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

valores = lines.shift().split(" ")
U = parseFloat(valores[0])
B = parseFloat(valores[1])
C = parseFloat(valores[2])

var numero = [U,B,C]
var resultado = []

for (var i = 0; i < 3; i++) numero[i]
numero.sort(function (a, b) { return a - b });
for (var i = 0; i < 3; i++) resultado.push(numero[i]);

n1 = parseFloat(resultado[0])
n2 = parseFloat(resultado[1])
n3 = parseFloat(resultado[2])
n4 = parseFloat(Math.abs(n2 - n1))
n5 = n1+n2
perimetro = n1 + n2 + n3
area = [(U + B) * C] / 2

if (n3 > n4 && n3 < n5) {
    console.log("Perimetro = " + perimetro.toFixed(1))
}
else {
    console.log("Area = " + area.toFixed(1))
}