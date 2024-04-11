// let sorvete = [];
// const limiteSabores = 3;
//     switch (opcao) {
//         case 1:
//             adicionarSabor();
//             break;
//         case 2:
//             removerSabor();
//             break;
//         case 3:
//             visualizarSorvete();
//             break;
//         case 4:
//             finalizarPedido();
//             break;
//         default:
//             alert("Opção inválida!")
//             break;
//     }
//     while (sorvete.length < limiteSabores) {
//         let sabor = prompt("Digite o sabor:");
//         if (sabor !== null && sabor.trim() !== "") {
//             sorvete.push(sabor);
//             alert("Sabor adicionado")
//             break;
//         } else {
//             alert("Por favor, digite um sabor válido!")
//         }
//     }
//     if (sorvete.length === limiteSabores) {
//        alert("Limite de sabores atingido, remova um sabor!")
//     }
//     if (sorvete.length > 0) {
//         sorvete.pop();
//         alert("Sabor removido!")
//     } else {
//         alert("Não existem sabores adicionados!")
//     }
//     if (sorvete.length > 0) {
//         let mensagem = "Seu sorvete:";
//         sorvete.forEach(function(sabor, index) {
//             mensagem += " Camada " + (index + 1) + " - " + sabor + ",";
//         });
//         mensagem = mensagem.slice(0, -1)
//         mensagemElement.innerText = mensagem;
//     } else {
//         alert("Seu sorvete não possui sabores!")
//     }
//     if (sorvete.length > 0) {
//        alert("Pedido realizado!")
//         sorvete = [];
//     } else {
//         alert("Adicione pelo menos um sabor!")
//     }



let sabores = []
let opcao = -4
let qntSabores = 0

while (opcao != 0) {
    opcao = prompt(`MENU \n
    1- Adicionar sabor
    2- Remover sabor
    3- Visualizar sorvete
    4- Finalizar pedido
    `)
    switch(opcao){
        case '1':
            sabores.push(prompt("Cadastre um Sabor: "))
            qntSabores++
                if(qntSabores <= 3){
                    alert('Sabor adicionado!')
                } else{
                    alert('Limite de sabores atingido, remova um sabor!')
                }
                
            break
        case '2':
            sabores.pop()
            if(qntSabores > 0){
                alert('Sabor removido!')
            } else {
                alert('Não existem sabores adicionados!')
            }
            break
        case '3':
            alert(sabores+' ')
            break
        case '4':
            if(qntSabores > 0){
                alert('Pedido realizado')
            } else {
                alert('Seu sorvete não pussui sabores')
            }
            break
    }
}