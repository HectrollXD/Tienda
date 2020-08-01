<?php
    include ("conexion.php");
    $respuesta = "";
    $codigo = $_POST['codigo'];

    $QueryString = "SELECT * FROM Productos WHERE ID_Producto = '$codigo'";
    $Query = $ConnectionString -> query($QueryString);
    while($rows = $Query -> fetch_array(MYSQLI_NUM)){
        $respuesta = "
            <tr class='compras' id='$rows[0]'>
                <td>$rows[1]</td>
                <td></td>
                <td>$rows[2]</td>
                <td></td>
                <td><input type='button' value='eliminar' class='btnerr' id='$rows[0]'></td>
            </tr>
        ";
    }
    echo $respuesta;
?>