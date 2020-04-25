
//query selector retorna unicamente um elemento
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


for(var i =0;i<pacientes.length;i++){

    
    var tdpeso = pacientes[i].querySelector(".info-peso");
    var peso = tdpeso.textContent;  
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    var tdImc = pacientes[i].querySelector(".info-imc");

    if(!pesoEhValido){
        console.log("Peso inválido");        
        tdImc.textContent = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
       
    }
    if(!alturaEhValida){
        console.log("Altura inválida");        
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");                
    }
    if(alturaEhValida && pesoEhValido){
       
        tdImc.textContent = calculaImc(peso,altura);
    }    
}

function calculaImc(peso,altura){
    return (peso/Math.pow(altura,2)).toFixed(2);
}
function validaPeso(peso){
    if(peso >0 && peso <=1000)
        return true;
    else
        return false;
}
function validaAltura(altura){
    if(altura >0 && altura <= 3.00)
        return true;
    else   
        return false;
}












