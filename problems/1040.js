export function problem (lines){
    //Entrada de dados
    const notas = lines[0].split(' ').map(Number)
    const notaExame = parseFloat(lines[1])
    
    //Pesos para cada nota respectivamente
    const p1 = 2
    const p2 = 3
    const p3 = 4
    const p4 = 1

    //Função que calcula media ponderada
    const calculaMediaPonderada = (n1,n2,n3,n4)=>{
       return (n1*p1 + n2*p2+ n3*p3 + n4*p4)/(p1+p2+p3+p4)
    }
    
    //Função que retorna media final caso aluno em exame
    const caculaMediaFinal = (media,notaExame)=>{
        return (media + notaExame)/2
    }
    
    //Funcao que verifica media do aluno e retorna resposta de aprovação reprovação e notas
     const verificaEstado = (media) =>{
        const mediaPonderada = calculaMediaPonderada(...notas)
        const mediaFinal = caculaMediaFinal(mediaPonderada,notaExame)
        if(media >= 7){
            return `Media: ${media.toFixed(1)}\nAluno aprovado.`
        }else if (media >= 5 && media < 7){
            if (mediaFinal<5){
                return `Media: ${mediaPonderada.toFixed(1)}\nAluno em exame.\nNota do exame: ${notaExame.toFixed(1)}\nAluno reprovado.\nMedia final: ${mediaFinal.toFixed(1)}`
            }else{
                return `Media: ${mediaPonderada.toFixed(1)}\nAluno em exame.\nNota do exame: ${notaExame.toFixed(1)}\nAluno aprovado.\nMedia final: ${mediaFinal.toFixed(1)}`
            }
        }else if(media < 5){
            return `Media: ${media.toFixed(1)}\nAluno reprovado.`
        }
    }
    
    
    //Impressão de respostas chamando as devidas funções
    console.log(verificaEstado(calculaMediaPonderada(...notas)))
}