<?php

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "hackathon_halloween";

$conexion = new mysqli($servidor, $usuario, $password, $baseDatos);

if ($conexion->connect_error){
    die("Conexión fallida: " . $conexion->connect_error);
}

if(!empty($_POST['usuario'])){
    $usuario = $_POST['usuario'];
    
    // Consulta a la base de datos
    $consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $resultado = $conexion->query($consulta);
    if($resultado -> num_rows > 0){
    //El usuario existe, inicia sesión
        session_start();
        $_SESSION['usuario'] = $usuario;
        header("Location: ../index.php");
        exit();
    } else {
        //El usuario no existe, lo insertamos en la base de datos
        $insercion = "INSERT INTO usuarios (usuario) VALUES ('$usuario')";
        if ($conexion->query($insercion) === TRUE) {
            session_start();
            $_SESSION['usuario'] = $usuario;
            header('Location: ../html/index.html');
            exit();
        }
        else {
            echo "Error al guardar el usuario" . $conexion->error;
        }
    }
}else{
    echo "Por favor ingrese un usuario";
}

$conexion->close();
