var grauCelsius = Number (prompt("Digite a temperatura em Graus Celsius "))

if(grauCelsius < 15) {
    alert("Frio")
}else if (grauCelsius >= 15 && grauCelsius <= 25){
    alert ("Agradável")
}else{
    alert("Quente")
}