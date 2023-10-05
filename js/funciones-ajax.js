
function information_persona(instructor) {
    var fila = $("<tr></tr>");
    var celda = $("<td></td>");
    celda.html("<b>" + instructor.nombre + "</b>");
    $(fila).append(celda);
    celda = $("<td></td>");
    celda.html("<b>" + instructor.apellido + "</b>");
    $(fila).append(celda);
    celda = $("<td></td>");
    celda.html("<b>" + instructor.edad + "</b>");
    $(fila).append(celda);
    celda = $("<td></td>");
    celda.html("<b>" + instructor.lenguajes + "</b>");
    $(fila).append(celda);
    return fila;
}


function mostrar_informacion(data) {
    console.log(data.instructores.length);
    var rs = $("#result");
    var tabla = $("<table></table>");
    for (var i = 0; i < data.instructores.length; i++) {
        var inst = data.instructores[i];
        var fila = information_persona(inst);
        $(tabla).append(fila);
    }
    $(rs).append(tabla);
}

$(document).ready(function () {
    $("#btnCarga").on("click", function () {
        console.log("OK");
        $.ajax({
            url: "json/instructores.json",
            dataType: "json",
            success: function (data) {
                mostrar_informacion(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    });
    $("#btnCarga2").click(function () {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
              console.log(data);
            }
          });
    });
});
