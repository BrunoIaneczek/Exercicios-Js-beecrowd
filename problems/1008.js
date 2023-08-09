export function problem(lines){
    const [numFuncionario,horasTrabalhadas,valorHora] = lines

    const calculaSalario = (horasTrab,valorhr)=>{
        return horasTrab*valorhr
    }

    console.log(`NUMBER = ${numFuncionario}`)
    console.log(`SALARY = U$ ${calculaSalario(horasTrabalhadas,valorHora).toFixed(2)}`)
}