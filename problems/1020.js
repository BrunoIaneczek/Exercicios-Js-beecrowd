'use strict'

export function problem (lines){
    const [dias] = lines[0].split(' ')
    const intervalos = [365,30,1]
    const qtdIntervalo = (dias,intervalo)=>Math.floor(dias/intervalo)

    function qtdPintervalo(dia,intervalos){
        const lista = intervalos.map(intervalo=>{
            const qtd = qtdIntervalo(dias,intervalo)
            dia = dia -(qtd*intervalo)
            return qtd
        })
        
    }   return lista

}
