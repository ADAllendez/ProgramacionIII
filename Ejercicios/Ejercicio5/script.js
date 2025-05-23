function calcular(){
    const ladoA = parseFloat(document.getElementById("ladoA").value);
    const ladoB = parseFloat(document.getElementById("ladoB").value);
    const ladoC = parseFloat(document.getElementById("ladoC").value);

    if (isNaN(ladoA) || isNaN(ladoB) ||isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <=0) {
        alert("Los valores no deben estar vacios");
        return;
    }
    const areaRectangular = ladoB * ladoC ;
    const areaTriangular = (ladoB * (ladoA - ladoC))/2;
    const Area = areaRectangular + areaTriangular;
    alert(`El Area es ${Area.toFixed(2)} m²`);
}