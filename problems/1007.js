export function problem(lines){
    const [A,B,C,D] = lines
    
    const diferenca = (v1,v2,v3,v4)=>{
        return v1*v2 - v3*v4
    }
    console.log(`DIFERENCA = ${diferenca(A,B,C,D)}`)
}