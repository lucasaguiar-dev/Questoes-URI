var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines.shift().split(" ")
var peca2 = lines.shift().split(" ")

var idPeca1 = peca1.shift()
var unidadesPeca1 =  peca1.shift()
var precoPeca1 = peca1.shift()

var idPeca2 = peca2.shift()
var unidadesPeca2 =  peca2.shift()
var precoPeca2 = peca2.shift()

var total = (unidadesPeca1*precoPeca1) + (unidadesPeca2*precoPeca2)

console.log("VALOR A PAGAR: R$ " + total.toFixed(2))