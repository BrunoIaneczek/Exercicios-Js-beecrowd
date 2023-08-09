export function problem(lines){
    const [raio] = lines
    const pi = 3.14159


    const calculaVolume =(vraio)=>{
        return (4*pi*(raio**3))/3
    }

    console.log(`VOLUME = ${calculaVolume(raio).toFixed(3)}`)
}