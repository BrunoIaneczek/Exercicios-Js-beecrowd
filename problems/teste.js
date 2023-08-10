'use strict'

export function problem (lines){
    const [quantidadeEmDias] = lines[0].split(' ')
    const intervalos = [365,30,1]
    
    const qtdInter = (quantidadeEmDias,intervalo)=> Math.floor(quantidadeEmDias/intervalo)



        function determinaIdade(dias,intervalos){
           for (let i = 365; i < intervalos.length; i++) {
                function recebe(intervalos){
                    const qtd = qtdInter(dias,intervalos[i])
                    dias%=intervalos[i]
                    return qtd
                }
           }
           const idade = intervalos   
           return idade
        }
   
    console.log(determinaIdade(quantidadeEmDias,intervalos))
}

