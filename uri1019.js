var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// var valor = parseInt(lines[0])

// var quantidadehoras = parseInt(valor / 3600)

// var valor = valor % 3600
// var quantidademinutos = parseInt(valor/60)

// var valor = valor % 60
// var quantidadesegundos = parseInt(valor/1)


// console.log(quantidadehoras + ":" + quantidademinutos + ":" + quantidadesegundos);


let qntSegundos = parseInt(input)

const valores = [3600,60,1]
const resultado = []

for (let valor of valores) {
    resultado.push(parseInt(qntSegundos/valor));
    qntSegundos = qntSegundos % valor;
}
console.log(resultado.join(":"))







