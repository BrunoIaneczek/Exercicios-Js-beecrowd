export function problem(lines){
    const [nomeVend, salario, vendas] = lines
    const comissao =  15

    const calculaSalarioTotal = (sla, vend, comis)=>{   
        return parseFloat(sla) + (vend * comissao/100)
    }
    
    console.log(`TOTAL = R$ ${(calculaSalarioTotal(salario,vendas,comissao).toFixed(2))}`)
}