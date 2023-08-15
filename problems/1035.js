export function problem (lines){
    const [a,b,c,d] = lines[0].split(' ').map(Number)
    const somaAeB =a+b
    const somaCeD = c+d

    if(b>c && d>a){
        if(somaCeD > somaAeB){
            if(c>0 && d> 0){
                if(a%2==0){
                    console.log('valores aceitos')
                }
            }else{
                console.log('Valores nao aceitos') 
            }
        }else{
            console.log('Valores nao aceitos') 
        }
    }else{
        console.log('Valores nao aceitos')
    }

}