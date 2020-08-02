$(document).ready(main);
var total = 0;

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
    total = 0;
    $("#totales").text("");
}

function enabled(){
    $("#idpro").prop("disabled",false);
    $("#finalizar").prop("disabled",false);
    $("#cancelar").prop("disabled",false);
    $("#empezar").prop("disabled",true);
    $("#idpro").focus();
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
            dataType: 'json',
            encode: true
        }).done(
            function(data){
                $("#tbody").append(data.tabla);
                $("#idpro").val("");
                total += data.sub;
                $("#totales").text("Total: $"+total);
            }
        )
    }
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

function eliminar(){ //con esta funcion eliminamos la fila del producto
    var producto = { 
        "producto": $(this).attr("id"),
        "precio": $(this).attr("subtotal")
    };
    $("#"+producto['producto']).remove();
    total -= producto['precio'];
    $("#totales").text("Total: $"+total);
}

function insertar(){ //con esta funcion hacemos la inserción de la compra
    //chente, aquí toca la insersion, de eso te encargas tu XD
    /*lo que necesitas para la insercion es obtener los campos de los <tr> de la tabla y
        a su vez, enviar la variable de total y traer la funcion de folio para que lo envies
        con ajax, solo eso.
    
        todo lo tienes que hacer en esta funcion, ya está asociada con el evento.
    */
}