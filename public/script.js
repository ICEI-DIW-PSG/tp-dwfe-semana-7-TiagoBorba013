var nome = prompt("Informe seu nome");

var renda_mensal = Number(prompt("Informe sua renda"));
while(isNaN(renda_mensal))
{
    renda_mensal = Number(prompt("Valor inválido! Digite novamente"));
}


var qtd = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));
while (isNaN(qtd)) {
    qtd = Number(prompt("Valor inválido! Digite um número entre 1 e 5:"));
}

if (qtd < 1) {
    qtd = 1;
} else if (qtd > 5) {
    qtd = 5;
}

var soma = 0;

for (let i = 1; i <= qtd; i++) {
    var despesa = Number(prompt("Informe o valor da despesa:"));

    while (isNaN(despesa)) {
        despesa = Number(prompt("Valor inválido! Informe novamente a despesa:"));
    }

    soma += despesa;
}


var sobra = renda_mensal - soma;
var msg = "";
if(soma > renda_mensal)
{
    msg = "⚠️Atenção: você gastou mais do que ganhou.";
}
 if ( sobra >= renda_mensal * 0.3)
{
    msg ="✅ Ótimo: boa margem de sobra."
}
else
{
   msg = "🙂 Ok: dá para melhorar a sobra."
}

var resultado = 
`Nome: ${nome}
Renda: ${renda_mensal.toFixed(2)}
Total de despesas: ${soma.toFixed(2)}
Sobra: ${sobra.toFixed(2)}
Mensagem: ${msg}`;

alert(resultado);

console.log("Nome:", nome);
console.log("Renda:", renda.toFixed(2));
console.log("Despesas:", totalDespesas.toFixed(2));
console.log("Sobra:", sobra.toFixed(2));
console.log("Classificação:", mensagem);


