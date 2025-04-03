var regiao = Number (prompt(`Digite sua Regio ==ã=
[1] - Brasil  
[2] - EUA  
==========`))
var idade = Number(prompt("Digite sua idade"))
 
if (regiao == 1 && idade >= 18){
    alert (`Brasil ${idade} anos = Maior idade`)
} else if ( regiao == 1 && idade < 18) {
    alert (`Brasil`)
}