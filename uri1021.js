var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var total = parseFloat(lines[0])

const valores = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00]
const valores2 = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")

for (let valor of valores) {
    let qntd = parseInt(total / valor)
    console.log(qntd + " nota(s) de R$ " + valor + ".00")
    total = total % valor
}

console.log("MOEDAS:")

for (let valor of valores2) {
    let qntd = parseInt(total / valor)
    console.log(qntd + " moeda(s) de R$ " + valor.toFixed(2))
    total = (total % valor) + 0.001
}
