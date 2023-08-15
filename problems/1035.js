export function problem (lines){
    const [a,b,c,d] = lines[0].split(' ').map(Number)
    const somaAeB =a+b
    const somaCeD = c+d

    const verifica  = (a,b,c,d)=>{
        if(b>c && d>a && somaCeD>somaAeB && c>0 && d>0 && a%2==0){
            console.log('Valores aceitos')
        }else{
            console.log('Valores nao aceitos')
        }
    }
    verifica(a,b,c,d)
}