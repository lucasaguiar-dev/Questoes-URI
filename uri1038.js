var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")

var codigo = parseFloat(valores[0])
var quantidade = parseFloat(valores[1])

if (codigo === 1){
    console.log('Total: R$ ' + (4.00*quantidade).toFixed(2))
} else if (codigo === 2){
    console.log('Total: R$ ' + (4.50*quantidade).toFixed(2))
} else if (codigo === 3){
    console.log('Total: R$ ' + (5.00*quantidade).toFixed(2))
} else if (codigo === 4){
    console.log('Total: R$ ' + (2.00*quantidade).toFixed(2))
} else if (codigo === 5){
    console.log('Total: R$ ' + (1.50*quantidade).toFixed(2))
}

