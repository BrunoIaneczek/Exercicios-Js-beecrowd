export function problem (lines){
    const [a,b,c] = lines[0].split(' ').map(Number)
    const delta = (b**2) - (4*a*c)
    if(a > 0 && delta > 0){
        const raiz1 = (-b + Math.sqrt(delta.toFixed(5)))/(2*a)
        const raiz2 = (-b - Math.sqrt(delta.toFixed(5)))/(2*a)
        console.log(`R1 = ${raiz1.toFixed(5)}`)
        console.log(`R2 = ${raiz2.toFixed(5)}`)
    }else{
        console.log('Impossivel calcular')
    }

    
}