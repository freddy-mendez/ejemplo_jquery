
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

function  crear_tabla(genero, name, edad, celular, email, picture) {
    var tabla = $("<table></table>");
    var fila = $("<tr></tr>");
    var celda = $("<td></td>");
    var imagen = $("<img></img>");
    $(imagen).attr("src",picture);
    $(celda).append(imagen);
    $(fila).append(celda);
    celda = $("<td></td>");
    $(celda).append(name);
    $(fila).append(celda);
    celda = $("<td></td>");
    $(celda).append(edad);
    $(fila).append(celda);
    $(tabla).append(fila);
    fila = $("<tr></tr>");
    celda = $("<td></td>");
    imagen = $("<img></img>");
    if (genero=="male") {
        $(imagen).attr("src","img/man.png");
    } else if (genero=="female") {
        $(imagen).attr("src","img/female.png");
    }
    $(imagen).attr("width","50px");
    $(imagen).attr("height","50px");
    $(celda).append(imagen);
    $(fila).append(celda);
    celda = $("<td></td>");
    $(celda).attr("colspan","2");
    $(celda).html("<p><a href='tel:+57"+celular+"'>"+celular+"</a><br/>"+
    "<a href='mailto:"+email+"'>"+email+"</a></p>");
    $(fila).append(celda);
    $(tabla).append(fila);
    return tabla;
}

function procesar_datos(data) {
    let arreglo = data.results;
    //console.log("Resultado="+arreglo.length+" objetos");
    let rs = $("#result");

    arreglo.forEach(element => {
       //console.log(element);
       var genero = element.gender;
       var name = element.name.first+" "+element.name.last;
       var edad = element.dob.age;
       var celular = element.cell;
       var email = element.email;
       var picture = element.picture.large;
       var tabla = crear_tabla(genero, name, edad, celular, email, picture);
       $(rs).append(tabla);
    });
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
            url: 'json/users.json',
            dataType: 'json',
            success: function(data) {
              console.log(data);
              procesar_datos(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
          });
    });
});
