// #1: Função COM Parâmetros e COM Retorno
function somar(a, b) {
    return a + b;
}

let resultado =somar (30, 56);
console.log(resultado);
console.log(somar(30, 56));

// #2: Função COM Parâmetros e SEM Retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: Função SEM Parâmetros e COM Retorno
function retornaDataAtual() {
    return new Date();
}

console.log(retornaDataAtual());

// #4: Função SEM Parâmetros e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();