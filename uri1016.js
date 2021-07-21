var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines)
var tempo = distancia*2;

console.log(tempo + " minutos");
