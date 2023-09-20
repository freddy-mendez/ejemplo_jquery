var contadorFilas = 0;

$(document).ready(function() {
    //alert('Documento Listo');
    $("#btnAddFila").click(function(){
        var fila = $("<tr></tr>");
        var celda = $("<td></td>");
        var caja = $("<input></input>");
        $(caja).attr("type", "text");
        $(caja).attr("id", "nombre"+contadorFilas);
        $(caja).attr("placeholder","Nombre del Producto");
        $(celda).append(caja);
        $(fila).append(celda);
        celda = $("<td></td>");
        caja = $("<input></input>");
        $(caja).attr("type", "number");
        $(caja).attr("placeholder","Cantidad del Producto");
        $(caja).attr("id", "cantidad"+contadorFilas);
        //$(caja).
        $(caja).focusout(function(){
            var valor = $(this).val();
            if ($(this).val().length==0) {
                $(this).removeClass("negativo");
                $(this).removeClass("positivo");
                return;
            }
            if (Number(valor)>=0) {
                $(this).addClass("positivo");
                $(this).removeClass("negativo");
            } else {
                $(this).addClass("negativo");
                $(this).removeClass("positivo");
            }
        });
        $(celda).append(caja);
        $(fila).append(celda);
        celda = $("<td></td>");
        caja = $("<input></input>");
        $(caja).attr("type", "number");
        $(caja).attr("placeholder","Precio del Producto");
        $(caja).attr("id", "precio"+contadorFilas);
        $(caja).keyup(function(e) {
            var code = e.key;
            if(code==="Enter") {
                var txtId=$(this).attr("id");
                var value = $(this).val();
                var valorPrecio = Number(value);
                var numeroId = txtId.substr(6);
                value = $("#cantidad"+numeroId).val();
                var valorCantidad = Number(value);
                $("#subtotal"+numeroId).val(""+(valorCantidad*valorPrecio))

                e.preventDefault();
                /*var value = $(this).val();
                var valorPrecio = Number(value);
                var padre = $(this).parent();
                var abuelo = $(padre).parent();
                //console.log(abuelo);
                var hijo2 = $(abuelo).children().eq(1).children().first();
                //console.log(hijo2);
                value = $(hijo2).val();
                var valorCantidad = Number(value);

                var hijo4 = $(abuelo).children().eq(3).children().first();

                $(hijo4).val(""+(valorCantidad*valorPrecio));*/

            }
        });
        $(celda).append(caja);
        $(fila).append(celda);
        celda = $("<td></td>");
        caja = $("<input></input>");
        $(caja).attr("type", "number");
        $(caja).attr("placeholder","Subtotal del Producto");
        $(caja).attr("readonly", "readonly");
        $(caja).attr("id", "subtotal"+contadorFilas);
        $(celda).append(caja);
        $(fila).append(celda);
        celda = $("<td></td>");
        var boton = $("<button></button>");
        $(boton).attr("type", "button");
        $(boton).text("Eliminar");
        $(boton).click(function(){
            var padre = $(this).parent();
            var abuelo = $(padre).parent();
            $(abuelo).remove();
        });
        $(celda).append(boton);
        $(fila).append(celda);

        $("#cuerpo-tabla-1").append(fila);
        contadorFilas=contadorFilas+1;
    });
});