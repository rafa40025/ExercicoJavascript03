var valorTotal = Number(prompt("Digite o valor total de compra"))
var codigoDesconto = prompt("Digite o código de desconto")

if ( codigoDesconto == "DESC10") {
    alert("Desconto Aplicado!")

var desconto = valorTotal * (10 /100)
var valorTotal = valorTotal - desconto 

alert (`Preço Inicial = ${valorTotal}
    Desconto Aplicado = ${desconto}
    Preço Total = ${valorTotalDesconto}`)
} else {
    alert(`Código de Desconto não Existe
    Preço total = ${valorTotal}`)
}