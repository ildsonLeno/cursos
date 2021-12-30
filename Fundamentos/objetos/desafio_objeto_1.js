// Objeto - data
// Atributos - dia, mes e ano.
// Metodo - exibir -> "dia/mes/ano"

const data = {
    dia: 23,
    mes: 11,
    ano: 2022,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

console.log(data.exibir());