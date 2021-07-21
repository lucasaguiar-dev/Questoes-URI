var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines[0])

const notas = [100, 50, 20, 10, 5, 2, 1]

console.log(valor)

for (let nota of notas) {
    let qntNotas = parseInt(valor / nota)
    console.log(qntNotas + " nota(s) de R$ " + nota + ",00")
    valor = valor % nota;
}























// var qntNotas = parseInt(valor / 100)
// console.log(qntNotas + " nota(s) de R$ " + "100,00")

// var valor = valor % 100
// var qntNotas = parseInt(valor/50)
// console.log(qntNotas + " nota(s) de R$ " + "50,00")

// var valor = valor % 50
// var qntNotas = parseInt(valor/20)
// console.log(qntNotas + " nota(s) de R$ " + "20,00")

// var valor = valor % 20
// var qntNotas = parseInt(valor/10)
// console.log(qntNotas + " nota(s) de R$ " + "10,00")

// var valor = valor % 10
// var qntNotas = parseInt(valor/5)
// console.log(qntNotas + " nota(s) de R$ " + "5,00")

// var valor = valor % 5
// var qntNotas = parseInt(valor/2)
// console.log(qntNotas + " nota(s) de R$ " + "2,00")

// var valor = valor % 2
// var qntNotas = parseInt(valor/1)
// console.log(qntNotas + " nota(s) de R$ " + "1,00")