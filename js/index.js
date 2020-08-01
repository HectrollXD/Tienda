$(document).ready(main);

function main(){
    $("#idpro").keypress(function(event){
        var tecla = (event.keyCode ? event.keyCode : event.which);
        if(tecla == 13){
            traer();
        }
    });
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
            }
        )
    }
}