function imagen_despues() {
  x = (x == images.length - 1) ? 0 : x + 1;
  document.getElementById("talleres").src = images[x];
}

function imagen_anterior() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("talleres").src = images[x];
}
function imagen_despues1() {
  x1 = (x1 == images1.length - 1) ? 0 : x1 + 1;
  document.getElementById("musica").src = images1[x1];
}

function imagen_anterior1() {
  x1 = (x1 <= 0) ? images1.length - 1 : x1 - 1;
  document.getElementById("musica").src = images1[x1];
}
function imagen_despues2() {
  x2 = (x2 == images2.length - 1) ? 0 : x2 + 1;
  document.getElementById("viajes").src = images2[x2];
}

function imagen_anterior2() {
  x2 = (x2 <= 0) ? images2.length - 1 : x2 - 1;
  document.getElementById("viajes").src = images2[x2];
}
function enviar() {
	
	
	$( "button[name='invitacion']" ).click(function () {
		alert("Solicitación enviada");
	});
	
	$( "button[name='enviarPalabras']" ).click(function () {
		var texto = $( "textarea[name='palabras']" ).val();
		alert("Enviando: "+texto);
	});
}

$( document ).ready(function() {
	enviar();
});

var images = [],images1 = [],images2 = [], x = 1, x1 =1 , x2 = 1;         
images[0] = "img/teatro.png";
images[1] = "img/futbol.jpg";
images[2] = "img/astrologia.jpg";
images1[0] = "img/rock.jpg";
images1[1] = "img/jazz.jpg";
images1[2] = "img/pop.jpg";
images2[0] = "img/italia.jpg";
images2[1] = "img/francia.jpg";
images2[2] = "img/tailandia.jpg";
