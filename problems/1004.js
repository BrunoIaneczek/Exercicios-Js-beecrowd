export function problem(lines){
    let valor1 = parseInt(lines[0])
    let valor2 = parseInt(lines[1])

    const multiplica = (v1,v2)=>{
        return v1*v2
    }

    console.log(`PROD = ${multiplica(valor1,valor2)}`)
}