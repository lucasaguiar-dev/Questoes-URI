var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")
var A = valores[0]
var B = valores[1]
var C = valores[2]
var D = valores[3]
var E = C + D
var F = A + B

if (B > C && D > A && E > F && C > 0 && D > 0 && A % 2 === 0) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}
