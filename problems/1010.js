export function problem(lines){
    const [codigo1, qtd1, valor1] = lines[0].split(' ')
    const [codigo2, qtd2, valor2] = lines[1].split(' ')

    
    const valorPeca1 = qtd1*valor1
    const valorPeca2 = qtd2*valor2
    const total = valorPeca1+valorPeca2
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
    
}