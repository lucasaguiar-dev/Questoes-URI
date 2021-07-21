var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines)

if (0 <= valor && valor <= 25.0000) {
    console.log("Intervalo [0,25]")
} else if (25 < valor && valor <= 50.0000) {
    console.log("Intervalo (25,50]")
} else if (50 < valor && valor <= 75.0000) {
    console.log("Intervalo (50,75]")
} else if (75 < valor && valor <= 100.0000) {
    console.log("Intervalo (75,100]")
} else {
    console.log("Fora de intervalo")
}