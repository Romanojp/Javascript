var campoFiltro = document.querySelector("#filtrar-tabela");//selecionando o campo filtro com a id filtrar tabela

campoFiltro.addEventListener("input",function(){// criando um evento no input

    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");// pesquisando todos os clientes na classe paciente

    if (this.value.length >0 ) {

        for(var i = 0; i<pacientes.length; i++){//pesquisando por dentro da array
            var paciente = pacientes[i];

            var tdNome = paciente.querySelector(".info-nome");//selecionando o id info nome 
            var nome = tdNome.textContent;//trazendo o que tem dentro do info nome

            var expressao = new RegExp(this.value,"i");

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
      for(var i = 0; i<pacientes.length;i++){//pesquisando por dentro da array
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
            
        }
    }
});




