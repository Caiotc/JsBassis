let xhr = new XMLHttpRequest();
let buscar = document.querySelector("#buscar-cep")

console.log(cep)

buscar.addEventListener("click",buscaCep());
   
function buscaCep() { 
    

    let inputCep = document.querySelector('input[name=cep]'); 
    let cep = inputCep.value.replace('-', '');
    let url = 'http://viacep.com.br/ws/' + cep + '/json/'; 
    
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', url, true); 
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) { 
            if (xhr.status = 200) 
             console.log(xhr.responseText); 
        } 
    } 
    xhr.send(); 
}
    