export function problem (lines){
    const valores = lines[0].split(' ').map(Number)
    const ordem = valores
    const imprimeValoresEmOrdemCrescente = (array) =>{
          return array.sort((a,b) => a -b)
        
       
    } 
console.log(imprimeValoresEmOrdemCrescente(ordem))
valores.map((e)=>console.log(e))
// imprimeValoresNaOrdemDeEscrita(valores)
}