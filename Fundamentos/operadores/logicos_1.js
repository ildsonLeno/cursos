let temDinheiroNaConta = false;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiroNaConta && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);