'use strict'

export function problem (lines){
    const valorTotal = lines[0]
    const notasDisponiveis = [100, 50, 20, 10, 5, 2,1]

    const qtdNotas=(valor,nota)=>Math.floor(valor/nota)

    function qtdPnota (valor,notas){
        const listaNotas = notas.map(nota=>{
            const qtd = qtdNotas(valor,nota)
            valor = valor -(qtd*nota)
            return {nota,qtd}
        })
        return listaNotas
    }

    function mostrar(valor,notas){
       const notasNecessarias = qtdPnota(valor,notas)
        console.log(valor)
       notasNecessarias.forEach(({qtd, nota})=>{
            console.log(`${qtd} nota(s) de R$ ${nota},00 `)
       })     
    }
    mostrar(valorTotal,notasDisponiveis)
}