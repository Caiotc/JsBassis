var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").on("click",reiniciaJogo);
})
$('.botao-remover').click(function(event){
    event.preventDefault();
    $(this).parent().parent().remove();
})

function inicializaContadores(){
    campo.on("input",function(){

        var conteudo = campo.val();
        var qtdPalavras =conteudo.split(/\S+/).length - 1;
        $("#contador-de-palavras").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-de-caracteres").text(qtdCaracteres);
    })
}

function inicializaCronometro(){
    $("#botao-reiniciar").attr("disabled",true);
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus",function(){
        var cronometroID = setInterval(function(){
            tempoRestante--;            
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(cronometroID);
                finalizaJogo();
            }

        },1000)
    });
}
function inicializaMarcadores(){
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(13,digitado.length);              
        if(digitado == comparavel) {
            campo.addClass("campo-certo");
            campo.removeClass("campo-errado");
        } else {
            campo.addClass("campo-errado");
            campo.removeClass("campo-certo");
        }
    });
}
function reiniciaJogo(){
    $(".campo-digitacao").attr("disabled",false);
    $(".campo-digitacao").val("");
    $("#contador-de-palavras").text(0);
    $("#contador-de-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado")
    campo.removeClass("campo-certo");
    campo.removeClass("campo-errado");
}
function finalizaJogo(){
    campo.attr("disabled",true);
    $(".campo-digitacao").toggleClass("campo-desativado");
    $("#botao-reiniciar").removeAttr("disabled");
    inserePlacar();
                
}
function atualizaTamanhoFrase(){
    var frase = $(".frase");
    var numPalavras = frase.text().split(" ").length;
    var tamanhoFrase =$("#tamanho-da-frase");
    tamanhoFrase.text(numPalavras);
}