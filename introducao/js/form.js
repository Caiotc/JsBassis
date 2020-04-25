var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(event){
    
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");    
    //extrai informações do paciente do form no HTML
    var paciente = obtemPacienteFormulario(form);
    
    //cria a tr e as tds
    //adiciona paciente na tabela
    var erro = validaPaciente(paciente);
    if(erro.length != 0)
    {
        console.log(erro)
        exibeErro(erro);
        return;
    }
    adicionaPaciente(paciente)
    form.reset();
    var mensagemDeErro = document.querySelector("mensagem-de-erro");
    mensagemDeErro.innerHTML = ""
    
});

function adicionaPaciente(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
}

function exibeErro(erro) {

    var ul = document.querySelector("#mensagem-de-erro");
    ul.innerHTML= "";

    erro.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}

function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0){
        erros.push("o nome não pode estar vazio");
    }
    if(!validaPeso(paciente.peso)){ 
        erros.push("Peso é inválido");
    }    
    if(!validaAltura(paciente.altura)){
        erros.push("Altura não é válida");
    }    
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ficar em branco");        
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ficar em branco");
    }
    return erros;
}

function obtemPacienteFormulario(form)
{
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}
function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild( montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
