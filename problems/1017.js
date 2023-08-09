'use strict'

export function problem (lines){
    const [horas] = lines[0].split(' ').map(Number)
    const [velMedia] = lines[1].split(' ').map(Number)
    
    const mediaCombustivelCarro = 12
    
    const calculaLitros = (horas,velMedia,mediaCombustivelCarro)=>(horas*velMedia)/mediaCombustivelCarro

    console.log(`${calculaLitros(horas,velMedia,mediaCombustivelCarro).toFixed(3)}`)
}