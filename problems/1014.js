'use strict'

export function problem (lines) {
    const kms = lines[0]
    const combustivel = lines[1]
    
    const consumoMedio = (dist, combgasto) => dist/combgasto

    console.log(`${consumoMedio(kms,combustivel).toFixed(3)} km/l`)
}