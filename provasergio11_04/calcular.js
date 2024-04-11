// let menu, n1, n2, resultado
// menu = Number(prompt('MENU!\n digite o numero da operação que deseja: \n 1- adição \n 2- subtração \n 3- divisão \n 4- multiplicação'))
// n1 = Number(prompt("Digite o primeiro numero para realizar uma operação"))
// n2 = Number(prompt("Digite o segundo numero para realizar uma operação"))

// switch(menu){
//     case 1:
//         resultado = n1 + n2
//     break
//     case 2:
//     resultado = n1 - n2
//     break
//     case 3:
//     resultado = n1 / n2
//     break
//     case 4: 
//     resultado = n1 * n2
//     break
//     default:
//     alert("Vc precisa escolher uma opção do menu!")
// }
// alert(resultado)

let i = 0, soma = 0
entrada = ''
while(entrada != 'pare'){
    entrada = prompt("Digite o " + (i + 1) + "º número:")
    a_somar = Number(entrada)
    if (a_somar) {
        soma += a_somar
        i++
    }
}
alert(soma)
