<?php
    include ("conexion.php");
    $respuesta = array();
    $codigo = $_POST['codigo'];
    //$codigo = "2*2";
    $cantidad = 0;
    $subtotal = 0;

    if((substr(strchr($codigo, "*"),0,1)) == "*" ){ //sirve para saber si es mas de un producto
        $aux = stripos($codigo, "*"); //solo es para saber en que posicion del string está el asterisco
        $cantidad = substr($codigo,0,$aux); //extrae la cantidad de productos
        $codigo = substr(strchr($codigo, "*"),1); //extrae el código del producto
        $QueryString = "SELECT * FROM Productos WHERE ID_Producto = '$codigo'";
        $Query = $ConnectionString -> query($QueryString);
        while($rows = $Query -> fetch_array(MYSQLI_NUM)){
            $subtotal = $cantidad * $rows[2]; //Aquí hacemos las operaciones para sacar el subtotal
            $respuesta['tabla'] = "
                <tr class='compras' id='$rows[0]'>
                    <td>$rows[1]</td>
                    <td>$cantidad</td>
                    <td>$rows[2]</td>
                    <td>$subtotal</td>
                    <td><input type='button' value='eliminar' class='btnerr' id='$rows[0]' subtotal='$subtotal'></td>
                </tr>
            ";
        }
    }
    else{
        $cantidad = 1;
        $QueryString = "SELECT * FROM Productos WHERE ID_Producto = '$codigo'";
        $Query = $ConnectionString -> query($QueryString);
        while($rows = $Query -> fetch_array(MYSQLI_NUM)){
            $subtotal = $cantidad * $rows[2];
            $respuesta['tabla'] = "
                <tr class='compras' id='$rows[0]'>
                    <td>$rows[1]</td>
                    <td>$cantidad</td>
                    <td>$rows[2]</td>
                    <td>$subtotal</td>
                    <td><input type='button' value='eliminar' class='btnerr' id='$rows[0]' subtotal='$subtotal'></td>
                </tr>
            ";
        }
    }
    $respuesta['sub'] = $subtotal;
    echo json_encode($respuesta);
?>