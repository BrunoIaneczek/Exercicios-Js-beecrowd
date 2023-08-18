export function problem (lines){
    const valores = lines[0].split(' ').map(Number)

    const determinaQuadrante = (valorDeX,valorDeY)=>{
        if(valorDeX === 0 && valorDeY === 0){
            return  'Origem'
        }else{
            if(valorDeX > 0 && valorDeY> 0){
                return 'Q1'
            }else if(valorDeY > 0 && valorDeX < 0){
                return 'Q2'
            }else if(valorDeX < 0 && valorDeY < 0){
                return 'Q3'
            }else if(valorDeX > 0 && valorDeY < 0){
                return 'Q4'
            }
        }
    }

    console.log(determinaQuadrante(...valores))
}