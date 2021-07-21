var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var NUMBER = parseInt(lines[0])
var HORAS = parseInt(lines[1])
var SALARIO = parseFloat(lines[2])
var SALARY = HORAS*SALARIO
console.log("NUMBER = " + NUMBER) 
console.log("SALARY = U$ " + SALARY.toFixed(2));