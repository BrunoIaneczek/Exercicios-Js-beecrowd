'use strict'

export function problem (lines){
    const [segundos] = lines[0].split(' ')
    const intervalos = [3600,60,1]

    const tempo = (segundos,intervalo)=>Math.floor(segundos/intervalo)

    function qtdPintervalo(seg,intervalos){
        const listaintervalos = intervalos.map(intervalo=>{
            const qtd = tempo(seg,intervalo)
            seg = seg-(qtd*intervalo)
            return qtd
        })
        return listaintervalos
    }

    
   const valoresFinais = qtdPintervalo(segundos,intervalos)
   console.log(`${valoresFinais[0]}:${valoresFinais[1]}:${valoresFinais[2]}`)
}