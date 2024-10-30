<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Login</title>
</head>
<body>
    <main>
        <div class="inicioSesion">
            <div class="formulario">
                <h1>Iniciar Sesión</h1>
                <?php include 'conexion.php'; ?>
                <form method="post" action="login.php">
                    <div class="usuario">
                        <label for="usuario">Usuario</label>
                        <input type="text" name="usuario" id="usuario" placeholder="">
                    </div>
                    <div class="boton">
                        <input type="submit" name="btnEnviar" value="Ingresar">
                    </div>
                </form>
            </div>
        </div>
    </main>
</body>
</html>
