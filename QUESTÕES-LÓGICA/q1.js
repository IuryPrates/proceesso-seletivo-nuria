
const valor_1 = parseFloat(prompt('Digite o primeiro valor:'))
const valor_2 = parseFloat(prompt('Digite o segundo valor:'))

const menor_valor = Math.min(valor_1,valor_2)
const maior_valor = Math.max(valor_1,valor_2)

console.log(`O valor do quadrado de ${menor_valor} é ${menor_valor * menor_valor}`)

if(maior_valor >= 0)//pode ter raiz quadrada
{
    console.log(`o valor da raiz quadrada de de ${maior_valor} é ${Math.sqrt(maior_valor)}.`)
}