$(document).ready(main);

function main(){
    disabled();
    $("#idpro").keypress(enter);
    $("#empezar").click(enabled);
    $("#cancelar").click(disabled);
    $("#finalizar").click(insertar);
    $("#tbody").on("click", ".btnerr",eliminar);
}

function disabled(){
    $("#idpro").prop("disabled",true);
    $("#finalizar").prop("disabled",true);
    $("#cancelar").prop("disabled",true);
    $("#empezar").prop("disabled",false);
    $(".compras").remove();
}

function enabled(){
    $("#idpro").prop("disabled",false);
    $("#finalizar").prop("disabled",false);
    $("#cancelar").prop("disabled",false);
    $("#empezar").prop("disabled",true);
}

function traer(){
    var id = { "codigo": $("#idpro").val() };
    if(id['codigo'] == ""){
        alert("El campo no puede quedar vacío");
    }
    else{
        $.ajax({
            type: 'POST',
            url: 'php/productos.php',
            data: id,
            dataType: 'html'
        }).done(
            function(data){
                $("#tbody").append(data);
                $("#idpro").val("");
            }
        )
    }
}

function insertar(){ //con esta funcion hacemos la inserción de la compra

}

function obtenerFolio(){ //Con esta mamada genera el numero unico del folio.
    var fecha = new Date();
    var folio = fecha.getFullYear()+""+fecha.getMonth()+""+fecha.getDate()+""+fecha.getHours()+""+fecha.getMinutes()+""+fecha.getSeconds();
    return folio;
}

function enter(event){ //con esta mamada haces el evento del enter
    var tecla = (event.keyCode ? event.keyCode : event.which);
    if(tecla == 13){
        traer();
    }
}

function eliminar(){
    var producto = { "producto": $(this).attr("id") };
    $("#"+producto['producto']).remove();
}