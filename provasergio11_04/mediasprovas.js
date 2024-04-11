// exercicio 4

let nomes = ["Isa", "Theo", "Amanda", "Bruna", "Julia"]
let notas = [9,8,10,8,9]
let qtdMaior5 = 0
let medMaior5 = 0
let soma = 0

// for(let i = 0; i < 5; i++){
//     nomes[i] = prompt("Digite o " + (i + 1) + "º nome:")
//     notas[i] = Number(prompt("Digite o " + (i + 1) + "º nota:"))
// }
// alert(nomes + "" + "," + notas)

for(let i = 0; i < notas.length; i++){
    if(notas[i] > 5){
        soma += notas[i]
        qtdMaior5++
    }
   medMaior5 = soma / qtdMaior5
}
console.log(medMaior5)





