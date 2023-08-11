'use strict'

export function problem (lines){
    const valor = lines[0]
    const valoresReais = [100, 50, 20, 10, 5, 2,1, 0.50, 0.25, 0.10, 0.05,0.01]
    
    

    const qtdmoeda = (valor,valorReal)=>Math.floor(valor/valorReal)

    const determinaqtdCed = (valor,valoresReais)=>{
        const qtdced = valoresReais.map(valorReal=>{
            const    qtd = qtdmoeda(valor,valorReal)
            valor = valor - (qtd*valorReal)
            return {
                tipoCed: valorReal,
                quantidade: qtd
            }
        })
        return qtdced
            

        
    }
    const exibir = () =>{
        const cedulas = determinaqtdCed(valor,valoresReais)
        const notas = cedulas.slice(0,6)
        const moedas = cedulas.slice(6,12)
        
        console.log("NOTAS:")
        notas.forEach(nota=>{
            console.log(`${nota.quantidade} nota(s) de R$ ${nota.tipoCed.toFixed(2)}`)
        })

        console.log("MOEDAS:")
        moedas.forEach(moeda=>{
            console.log(`${moeda.quantidade} moeda(s) de R$ ${moeda.tipoCed.toFixed(2)}`)
        })
    }
    exibir()
}