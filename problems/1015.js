'use strict'

export function problem (lines){
    const [x1,y1] = lines[0].split(' ').map(Number)
    const [x2,y2] = lines[1].split(' ').map(Number)

    const distancia = (x1,y1,x2,y2) => Math.sqrt(((x2-x1)**2)+((y2-y1)**2))

    console.log(`${distancia(x1,y1,x2,y2).toFixed(4)}`)
    
}