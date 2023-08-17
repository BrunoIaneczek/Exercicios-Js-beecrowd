export function problem (lines){
    const notas = lines[0].split(' ').map(Number)
    const p1 = 2
    const p2 = 3
    const p3 = 4
    const p4 = 1

    const calculaMediaPonderada = (n1,n2,n3,n4)=>{
       return (n1*p1 + n2*p2+ n3*p3 + n4*p4)/(p1+p2+p3+p4)
    }

    const verificaEstado = (media) =>{
        if(media >= 7){
            return 'Aluno aprovado.'
        }else if (media >= 5 && media < 7){
            return 'Aluno em exame.'
        }else if(media < 5){
            return 'Aluno reprovado.'
        }
    }
    console.log(verificaEstado(calculaMediaPonderada(...notas)))
}