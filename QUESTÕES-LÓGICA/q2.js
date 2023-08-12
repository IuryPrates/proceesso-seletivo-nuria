//pega ano de nascimento
const ano_de_nascimento = parseInt(prompt("Digite o ano de nascimento:"));

//verifica se o ano é bissexto
function verifica_ano_bissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// Verificar se o ano de nascimento é bissexto
if (ehBissexto(ano_de_nascimento)) {
    console.log(`O ano ${ano_de_nascimento} é um ano bissexto.`);
} else {
    console.log(`O ano ${ano_de_nascimento} não é um ano bissexto.`);
}
