$(document).ready(function() {
    carregaPartidos();

    $('#partidos').change(carregaParlamentares);
});

function carregaPartidos() {
    // URL da API da Câmara para listar partidos
    const apiUrl = "https://dadosabertos.camara.leg.br/api/v2/partidos?itens=100";

    // Requisição para obter a lista de partidos
    $.getJSON(apiUrl, function(data) {
        // Para cada partido, cria um item na lista <select>
        data.dados.forEach(function(partido) {
            $('#partidos').append(
                $('<option>', {
                    value : partido.sigla,
                    text  : partido.nome
                })
            );
        });
    }).fail(function() {
        alert('Erro ao carregar os partidos!');
    });
}

function carregaParlamentares() {
    const partidoSelecionado = $('#partidos').val();
    if (partidoSelecionado) {

        const deputadosBlock = $('#deputados-block');
        deputadosBlock.show();
        var deputadosList = $("#deputados-list");
        deputadosList.html("Carregando...");


        // Carregar deputados do partido selecionado
        $.ajax({
            url     : `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${partidoSelecionado}`,
            type    : "GET",
            success : function(response) {
                const deputados = response.dados;

                if (deputados.length > 0) {
                    deputadosList.empty();
                    // Adiciona os deputados à lista
                    deputados.forEach(deputado => {
                        deputadosList.append(`
                            <div class="col-md-3">
                                <div class="card">
                                    <img src="${deputado.urlFoto}" class="card-img-top" alt="${deputado.nome}">
                                    <div class="card-body">
                                        <h5 class="card-title">${deputado.nome}</h5>
                                        <p class="card-text"><strong>Partido:</strong> ${deputado.siglaPartido}</p>
                                        <p class="card-text"><strong>Estado:</strong> ${deputado.siglaUf}</p>
                                        <p class="card-text"><strong>E-mail:</strong> <a href="${deputado.email}">${deputado.email}</a></p>
                                    </div>
                                </div>
                            </div>`);
                    });
                } else {
                    deputadosList.html('<div class="alert alert-warning">Nenhum deputado encontrado para este partido.</div>');
                }
            },
            error   : function() {
                deputadosList.html('<div class="alert alert-danger">Erro ao carregar os deputados.</div>');
            }
        });
    } else {
        // Se não houver partido selecionado, limpa a lista de deputados
        $('#deputados').empty();
    }
}