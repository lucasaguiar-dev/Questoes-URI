var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distancia = (lines[0])
var combustivel = (lines[1])
var consumoMedio = distancia/combustivel
console.log(consumoMedio.toFixed(3) + " km/l");