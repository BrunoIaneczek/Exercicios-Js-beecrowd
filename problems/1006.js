export function problem(lines){
    const [A,B,C] = lines
    const pesoA = 2
    const pesoB = 3
    const pesoC = 5
   
    const calculaMedia=(nota1,nota2,nota3,p1,p2,p3)=>{
        return (nota1*p1 + nota2*p2 +nota3*p3)/(p1+p2+p3)
    }

    console.log(`MEDIA = ${calculaMedia(A,B,C,pesoA,pesoB,pesoC).toFixed(1)}`)
}
