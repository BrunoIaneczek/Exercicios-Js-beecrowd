export function problem (lines){
    const valores = lines[0].split(' ').map(Number)
    
    //Reorganizando valores
    valores.sort((a,b)=>{
        return b - a
    })

    
    const determinaTriangulo = (a,b,c)=>{
        let resp = ''
        switch (true) {
            case a >= (b+c):
                resp = 'NAO FORMA TRIANGULO' 
                break;
            case a**2 == (b**2 + c**2):
                resp = 'TRIANGULO RETANGULO' 
                break
            case a**2 < (b**2 + c**2) && a==b && b==c:
                resp = 'TRIANGULO ACUTANGULO\nTRIANGULO EQUILATERO' 
                break
            case a**2 > (b**2 + c**2) && a==b || b==c:
                resp = 'TRIANGULO OBTUSANGULO\nTRIANGULO ISOSCELES' 
                break
            case a**2 > (b**2 + c**2):
                resp = 'TRIANGULO OBTUSANGULO' 
                break
            case a**2 < (b**2 + c**2) && a==b || b==c:
                resp = 'TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES' 
                break
            case a**2 < (b**2 + c**2):
                resp = 'TRIANGULO ACUTANGULO' 
                break
            case a==b && b==c:
                resp = 'TRIANGULO EQUILATERO'
                break
            case a==b || b==c:
                resp = ' TRIANGULO ISOSCELES' 
                break
            default:
                resp = 'erraod'
                break;
        }
        return resp
    }

}