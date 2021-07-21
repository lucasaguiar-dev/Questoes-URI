var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")
var A = parseFloat(valores[0])
var B = parseFloat(valores[1])
var C = parseFloat(valores[2])
var R1 = [(-B) + Math.sqrt(B*B-(4*A*C))]/(2*A)
var R2 = [(-B) - Math.sqrt(B*B-(4*A*C))]/(2*A)


if (2*A===0 || (B*B-(4*A*C))<0 ){
    console.log("Impossivel calcular")
} else{
    console.log("R1 = " + R1.toFixed(5))
    console.log("R2 = " + R2.toFixed(5))
}







