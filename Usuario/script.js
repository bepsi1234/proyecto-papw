function cargarDatos(){
  var datos = ["imagenes/dog test.jpg", 'nombre del articulo', 'descripcion del articulo'];
  return datos;
}

function cargarCarrusel(index){

  var datos = cargarDatos();

  var id_image = '#image_art' + index;
  var id_nombre = '#nombre_art' + index;
  var id_descripcion = '#descripcion_art' + index;

  $(id_image).attr("src", datos[0]);
  $(id_nombre).text(datos[1]);
  $(id_descripcion).text(datos[2]);
}

$(document).ready(function(){

			$('#btnEjecutar').click(function(){
        cargarCarrusel(1);
        cargarCarrusel(2);
        cargarCarrusel(3);
        }
      )
});
