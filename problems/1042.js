export function problem (lines){
    const valores = lines[0].split(' ').map(Number)
    const ordem = valores
    const imprimeValoresEmOrdemCrescente = (array) =>{
        const ordenados = array.sort((a,b) => a -b)
        
       return ordenados
    } 
console.log(imprimeValoresEmOrdemCrescente(ordem))
valores.map((e)=>console.log(e))
// imprimeValoresNaOrdemDeEscrita(valores)
}