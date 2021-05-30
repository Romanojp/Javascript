	var titulo = document.querySelector(".titulo");//buscando dentro do html a classe titulo
	titulo.textContent = "Aparecida nutricionista"; //modificando a nomenclatura do titulo


    var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i< pacientes.length; i++){
        var paciente = pacientes[i];
            
        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;


        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido =true;
        var alturaEhValida = true;


        if(peso <= 0|| peso >= 1000 ){

            console.log("peso invalido");
            pesoEhValido = false;
            tdImc.textContent="peso é invalido";
            paciente.classList.add("paciente-invalido");
        }

        if(altura<=0 || altura >=3.00){
            console.log("altura invalida!!")
            alturaEhValida = false;
            tdImc.textContent="altura invalida!!";
            paciente.classList.add("paciente-invalido");
        }

        if(alturaEhValida && pesoEhValido){
            var imc = calculaImc (peso,altura);
        
            tdImc.textContent =  imc;
            
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso/(altura * altura);

    return imc.toFixed(2);
}





