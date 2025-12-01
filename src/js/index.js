$(document).ready(function () {

    $("#btn-limpar").click(function () {

        $("#tabela-inventario tbody").empty();

        alert("Inventário limpo com sucesso!");
    });

    $("#btn-carregar").click(function () {
        $.ajax({
            url: '../data/itens.json',
            type: "GET",
            dataType: "json",

            success: function (loot) {
                $("#tabela-inventario tbody").empty();

                $.each(loot, function (index, item) {
                    var novaLinha = `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.tipo}</td>
                        <td>${item.qtd}</td>
                        <td>${item.atributo}</td>
                        <td>${item.raridade}</td>
                    </tr>
                    `;
                    $(novaLinha).hide().appendTo("#tabela-inventario tbody").fadeIn(1000);
                });

                alert("Loot carregado com sucesso!");
            },
            error: function () {
                alert("Erro ao carregar o loot! Verifique se o Live Server está rodando.");
            }
        });

    });

    $("#campo-busca").on("keyup", function () {

        var valorDigitado = $(this).val().toLowerCase();

        $("#tabela-inventario tbody tr").filter(function () {

            var textoDaLinha = $(this).text().toLowerCase();

            $(this).toggle(textoDaLinha.indexOf(valorDigitado) > -1);
        });
    });

});