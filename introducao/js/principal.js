var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//query selector retorna unicamente um elemento
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


for(var i =0;i<pacientes.length;i++){
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    var tdpeso = pacientes[i].querySelector(".info-peso");
    var peso = tdpeso.textContent;  

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
       
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
        
        
    }
    if(alturaEhValida && pesoEhValido){
        var imc =peso /Math.pow(altura,2);
        tdImc.textContent = imc.toFixed(2);
    }    
}

titulo.addEventListener("click",function (){console.log("Posso chamar uma função anônima")});











