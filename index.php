<?php
/**
 * User: Eduardo Kraus
 * Date: 13/11/2024
 * Time: 12:52
 */
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo com jQuery e Bootstrap</title>

    <!-- Link para o CSS do Bootstrap -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <!-- Link para o jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- Link para o JavaScript do Bootstrap (necessário após o jQuery) -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

    <script src="script.js"></script>
</head>
<body>

<div class="container mt-5">

    <div class="container mt-5">
        <h1>Seleção de Partidos</h1>
        <p>Escolha um partido da lista:</p>

        <!-- Caixa de seleção para partidos -->
        <select id="partidos" class="form-control">
            <option value="">Selecione um partido</option>
        </select>
    </div>

    <!-- Seção para exibir os deputados do partido selecionado -->
    <div id="deputados-block" class="mt-3" style="display: none">
        <h2>Deputados</h2>
        <div id="deputados-list" class="row"></div>
    </div>

</div>

</body>
</html>
