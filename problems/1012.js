export function problem(lines){
    const [A,B,C] = lines[0].split(' ').map(Number)
    const pi =  3.14159

    var tri = (A*C)/2
    var circ = pi*(C**2)
    var trap = ((A+B)*C) / 2
    var quad = B**2
    var ret = A*B
    
    console.log(`TRIANGULO: ${tri.toFixed(3)}`)
    console.log(`CIRCULO: ${circ.toFixed(3)}`)
    console.log(`TRAPEZIO: ${trap.toFixed(3)}`)
    console.log(`QUADRADO: ${quad.toFixed(3)}`)
    console.log(`RETANGULO: ${ret.toFixed(3)}`)
}