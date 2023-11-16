function calcular() {
    var formulario = document.getElementById("formulario");
    var kilos = +formulario.kilos.value;
    var alturaCentimetros = +formulario.centimetros.value;
    var alturaMetros = alturaCentimetros / 100; // Convertendo para metros
    var imc = kilos / (alturaMetros * alturaMetros);

    // Atualiza o campo IMC
    formulario.imc.value = imc.toFixed(2);

    // Exibe mensagens com base no IMC
    var mensagemElement = document.getElementById("mensagem");
    mensagemElement.innerHTML = "";

    if (imc < 20) {
        mensagemElement.innerHTML = "Você está abaixo do peso.";
    } else if (imc <= 25) {
        mensagemElement.innerHTML = "Peso Ideal.";
    } else if (imc <= 30) {
        mensagemElement.innerHTML = "Sobrepeso.";
    } else if (imc <= 35) {
        mensagemElement.innerHTML = "Obesidade Moderada.";
    } else if (imc <= 40) {
        mensagemElement.innerHTML = "Obesidade Severa.";
    } else if (imc <= 50) {
        mensagemElement.innerHTML = "Obesidade Mórbida.";
    } else {
        mensagemElement.innerHTML = "Gordo.";
    }
}
