let nota = 100
function getNota(nota){

    let A = nota >= 90 && nota <= 100
    let B = nota < 89 && nota >= 80
    let C = nota < 79 && nota >= 70
    let D = nota < 69 && nota >= 60
    let F = nota < 60 && nota >= 0
    let notaFinal;
    if(A){
        notaFinal = "A"   
    }else if (B){
        notaFinal = "B"   
    }else if (C){
        notaFinal = "C"   
    }else if (D){
        notaFinal = "D"   
    }else if (F) {
        notaFinal = "F"   
    }else {
        notaFinal = "nota inválida"
    }

    return notaFinal
}
console.log(getNota (90))    
console.log(getNota (75))  
console.log(getNota (82))  
console.log(getNota (60))  
console.log(getNota (-1))  
console.log(getNota (6))  
console.log(getNota (70))  
console.log(getNota (112))  

