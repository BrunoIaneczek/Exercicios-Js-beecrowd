export function problem(lines){
    const [nota1,nota2] = lines
    const pesoNota1 = 3.5
    const pesoNota2 = 7.5

    const media = (nota1,nota2,pesoNota1,pesoNota2)=>{
        return (nota1*pesoNota1 + nota2*pesoNota2)/(pesoNota1+pesoNota2)
    }

    console.log(`MEDIA = ${media(nota1,nota2,pesoNota1,pesoNota2).toFixed(5)}`)
}