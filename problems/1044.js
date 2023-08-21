export function problem (lines){
    const numeros = lines[0].split(' ').map(Number)

    const saoMultiplos = (n1,n2)=>{
        let resultado = 0
        if(n1 > n2){
            resultado = n1%n2
        }else{
            resultado = n2%n1
        }
        if(resultado === 0){
            console.log('Sao Multiplos')
        }else{
            console.log('Nao sao Multiplos')
        }
        
    }
    saoMultiplos(...numeros)
    
}