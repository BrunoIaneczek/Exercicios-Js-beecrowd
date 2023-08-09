'use strict'

export function problem (lines) {
    const valores = lines[0].split(' ').map(Number)
   
   const maior = (a,b)=>(a+b+Math.abs(a-b))/2

   const maiorDaLista = valores.reduce(maior) //da entrada na função
   console.log(`${maiorDaLista} eh o maior`)
}
        
    

    

    
