function enviar(){
    const nombre= document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = document.getElementById("edad").value;
    const altura = document.getElementById("altura").value;
    const correo = document.getElementById("correo").value.trim();
    const resultado = document.getElementById("resultado");

    let errores = [];

    if ( nombre === "" || nombre.length > 50){
        errores.push("Nombre inválido, vacío o más de 50 caracteres.");
    }
    if (apellido === ""|| apellido.length >50){
        errores.push("Apellido invalido, vacio o mas de 50 caracteres");
    }
    if(isNaN(edad)||edad <=0 ){
        errores.push("Edad invalida, no puede ser negativa")
    }else if(edad <18){
       errores.push("Debe ser mayor de edad");
    }
    if( altura <= 0 || altura > 230 || isNaN(altura)){
        errores.push("Altura invalida, debe ser entre 0 y 230 cm")
    }
    if(correo === "" || !correo.includes("@")){
       errores.push("Correo electronico no valido");
    }

    if (errores.length > 0) {
        resultado.innerText = errores.join("\n");
        resultado.className = "invalido";
    }else {
        resultado.innerText = "Formulario enviado correctamente.";
        resultado.className = "valido";
    }

}
