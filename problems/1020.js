'use strict'

export function problem (lines){
    const [quantidadeEmDias] = lines[0].split(' ')
    const intervalos = [365,30,1]
    
    const qtdInter = (quantidadeEmDias,intervalo)=> Math.floor(quantidadeEmDias/intervalo)



    const determinaIdade = (dias,intervalos)=>{
        const idade = intervalos.map(intervalo=>{
            const qtd = qtdInter(dias,intervalo)
            dias%=intervalo
            return qtd

        })

        return idade
      
    }
   
    console.log(determinaIdade(quantidadeEmDias,intervalos))
}

