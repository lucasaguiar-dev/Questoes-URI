var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = lines.shift().split(" ")
var y = lines.shift().split(" ")

var x1 = x.shift()
var y1 = x.shift()

var x2 = y.shift()
var y2 = y.shift()

var distancia1 = [(Math.pow((x2-x1), 2)) + (Math.pow((y2-y1), 2))]
var distancia = Math.sqrt(distancia1)

console.log(distancia.toFixed(4))