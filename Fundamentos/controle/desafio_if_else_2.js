const nota = 4;
let notaFinal;

if (nota <= 10 && nota >= 9) {
    notaFinal = 'A';     
} else if(nota <= 8.9 && nota >= 7) {
    notaFinal = 'B';
} else if(nota <= 6.9 && nota >= 5) {
    notaFinal = 'C';
} else if(nota <= 4.9 && nota >= 4.5) {
    notaFinal = 'D';
} else {
    notaFinal = 'E';
}
    
console.log(notaFinal);