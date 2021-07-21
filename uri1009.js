var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var NOME = (lines[0]);
var SalarioFixo = parseFloat(lines[1])
var TotalVendas = parseFloat(lines[2])
var SalarioTotal = SalarioFixo+(TotalVendas*0.15) 

console.log("TOTAL = R$ " + SalarioTotal.toFixed(2))