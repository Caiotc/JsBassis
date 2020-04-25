var botaoAdicionar = document.querySelector("#buscar-paciente")
botaoAdicionar.addEventListener("click",function(){
    console.log("Buscando pacientes")
    
    //responsável por requisições http
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){
        var erroAJAX = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            erroAJAX.classList.add("invisivel");        
            var pacientes = JSON.parse(resposta);
            console.log(xhr.status);
            pacientes.forEach(element=>{
                adicionaPaciente(element)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
           
            erroAJAX.classList.remove("invisivel");
        }

        
     
    })

    xhr.send();



});