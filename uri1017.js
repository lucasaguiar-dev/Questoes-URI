var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempo = lines[0]
var velocidade = lines[1]
var distancia = tempo*velocidade
var combustivel = distancia/12

console.log(combustivel.toFixed(3))