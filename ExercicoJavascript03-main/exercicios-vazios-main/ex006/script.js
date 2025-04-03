var peso = Number (prompt("Digite seu peso "))
var altura = Number (prompt("Digite sua altura "))
var IMC = peso / Math.pow(altura,2)


if(IMC < 18.5) {
alert (`Seu IMC = ${IMC} | Abaixo do peso` ) 
} else if (IMC >= 18.5 && IMC <= 24.9) {
    alert (`Seu IMC = ${IMC} | Peso normal` )
}else if (IMC >= 25 && IMC <= 29.9){
    alert(`Seu IMC = ${IMC} | Sobrepeso`)
}else {
    alert (`Seu IMC = ${IMC}| Obesidade`)
}






