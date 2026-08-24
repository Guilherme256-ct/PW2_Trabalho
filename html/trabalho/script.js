function Calcular(){
    var pesoKg=getElementById("peso").value();
    var alturaMetro=getElementById("altura").value();
    var genero=getElementById("sexo").value();

    if(isNaN(pesoKg)){
        alert("Forneça apenas números!");
        getElementById("peso").focus();
    }else if(isNaN(alturaMetro)){
        alert("Forneça apenas números!");
        getElementById("altura").focus();
    }
}