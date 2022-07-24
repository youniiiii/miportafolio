
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 1200, 400);

var radio = 10;
var xAleatorio;
var yAleatorio;
var cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', _ => {
	location.reload();
})
function disenharCircunferencia(x, y, radio, color) {
	pincel.fillStyle = color;
	pincel.beginPath();
	pincel.arc(x, y, radio, 0, 2 * Math.PI);
	pincel.fill();
}

function limpiarPantalla() {

	pincel.clearRect(0, 0, 1200, 400);

}

var x = 0


function disenharObjetivo(x, y) {
	disenharCircunferencia(x, y, radio + 15, "red");
	disenharCircunferencia(x, y, radio + 10, "black");
	disenharCircunferencia(x, y, radio + 5, "white");
	disenharCircunferencia(x, y, radio, "green");
}


function sortearPosicion(maximo) {

	return Math.floor(Math.random() * maximo);

}


function actualizarPantalla() {

	limpiarPantalla();
	xAleatorio = sortearPosicion(1200);
	yAleatorio = sortearPosicion(400);
	disenharObjetivo(xAleatorio, yAleatorio);
	x++;
}
//funciona solo le falta agregar mas    mejoras  numeros de puntos    imagen relacionada 
setInterval(actualizarPantalla, 1000);
let contenido = ('<img src="../img/bb.gif" class="m-auto"  width="100%" height="400">');
let p = document.querySelector('#p');
function disparar(evento) {

	var x = evento.pageX - pantalla.offsetLeft;
	var y = evento.pageY - pantalla.offsetTop;

	if ((x < xAleatorio + radio) &&
		(x > xAleatorio - radio) &&
		(y < yAleatorio + radio) &&
		(y > yAleatorio - radio)) {

     p.innerHTML = contenido;
	}
}

pantalla.onclick = disparar;






