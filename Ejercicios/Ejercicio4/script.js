function calcular(){
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Los valores no deben estar vacios");
        return;
    }
    const imc = peso / (altura*altura);
    alert(`Tu IMC es ${imc.toFixed(2)}`);
}
