'use strict'

export function problem (lines) {
    let raio = lines[0]
    let n = 3.14159
    let area = n * raio**2

    console.log(`A=${area.toFixed(4)}`)
}