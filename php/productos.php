<?php
    include ("conexion.php");
    $respuesta = "";
    $codigo = $_POST['codigo'];

    $QueryString = "SELECT * FROM Productos WHERE ID_Producto = '$codigo'";
    $Query = $ConnectionString -> query($QueryString);
    while($rows = $Query -> fetch_array(MYSQLI_NUM)){
        $respuesta = "
            <tr>
                <td>$rows[1]</td>
                <td></td>
                <td>$rows[2]</td>
                <td></td>
                <td></td>
            </tr>
        ";
    }
    echo $respuesta;
?>

