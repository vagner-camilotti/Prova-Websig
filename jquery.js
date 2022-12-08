$(function( ){

let eventos = {};

// dados para testes
function carregarEventos() {
    adicionarEvento("1", "2022-12-1", "08:25", "09:30", "teste1", "aberto");
    adicionarEvento("2", "2022-12-1", "08:25", "09:30", "teste1", "aberto");
    adicionarEvento("3", "2022-12-1", "08:25", "09:30", "teste1", "aberto");
}

carregarEventos()

//funções
// Adiciona um evento
function adicionarEvento(id, data, hora_in, hora_out, descricao, status){
    eventos[id] = {data, hora_in, hora_out, descricao, status}
}

// Mostra os eventos
function mostrarEventos() {
    return eventos
}

function mostrarTodosEventos() {
    const todos_eventos = mostrarEventos();
    $("#result").html(JSON.stringify(todos_eventos));
}

//Mostra um evento
function encontrarEvento(id){
    if (eventos[id]) {
        return eventos[id];
    } else {
        return false;
    }
}

// Modifica um evento
function alterarEvento(id, data, hora_in, hora_out, descricao, status){
    if (eventos[id]) {
    eventos[id] = {data, hora_in, hora_out, descricao, status}
    } else {
        return null;
    }
}

// Modifica status
function alterarStatus(id, status){
    if(eventos[id]){
        eventos[id].status = status;
        return true;
    } else {
        return false;
    }
}

// Remove evento
function removerEvento(id){
    if(eventos[id]){
        delete eventos[id];
        return true;
    } return false
}

// Captura os valores das entradas
function capturarValores(){
    const id = $("#id").val();
    const data = $("#data").val();
    const hora_in = $("#hora-in").val();
    const hora_out = $("#hora-out").val();
    const descricao = $("#descricao").val();
    const status = $("#status").val();
    return{
        id,
        data,
        hora_in,
        hora_out,
        descricao,
        status
    }
}

// Limpar o formulário
function limpar() {
    $("#id").val("");
    $("#data").val("");
    $("#hora-in").val("");
    $("#hora-out").val("");
    $("#descricao").val("");
    $("#status").val("");
}



// botões-------------------------------------------------------------------
$("#adiciona").on("click", function(){
    console.log("botão clicado");
    const valores = capturarValores();
    adicionarEvento(valores.id, valores.data, valores.hora_in, valores.hora_out,
        valores.descricao, valores.status);
    mostrarTodosEventos();
    limpar();
})

$("#procura").on("click", function(){
    console.log("botão clicado");
    const valores = capturarValores();
    const achar = encontrarEvento(valores.id);
    if (achar){
        $("#result").html(JSON.stringify(achar));
    } else {$("#result").html(`Id: ${id} não encontrado.`);
    }
    limpar();
    
})

$("#todos").on("click", function(){
    console.log("botao clicado")
    mostrarTodosEventos();
})

$("#altera").on("click", function(){
    console.log("botão clicado");
    const valores = capturarValores();
    alterarEvento(valores.id, valores.data, valores.hora_in, valores.hora_out,
        valores.descricao, valores.status);
    mostrarTodosEventos();
    limpar(); 
})


$("#atualiza").on("click", function(){
    console.log("botão clicado");
    const valores = capturarValores();
    alterarStatus(valores.id, valores.status);
    mostrarTodosEventos();
    limpar();
})


$("#remove").on("click", function(){
    console.log("botão clicado")
    const valores = capturarValores();
    removerEvento(valores.id);
    mostrarTodosEventos();
    limpar();
})

});
