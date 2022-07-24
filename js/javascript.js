
var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 1200, 400);

var puedoDibujar = false;

//Variables para dibujar la paleta
var xRojo = 0;
var xVerde = 50;
var xAzul = 100;
var yCuadrados = 0;
var tamanhoCuadrados = 50;
var colorActual = "black";

function dibujarCirculo(x, y, colorActual) {

    if (puedoDibujar) {

        pincel.fillStyle = colorActual;
        pincel.beginPath();
        pincel.arc(x, y, 1.5, 0, 2 * 3.14);
        pincel.fill();

    }
}

//Función para dibujar cada uno de los cuadrados de la paleta
function dibujarCuadrado(x, y, tamanho, color) {

    pincel.fillStyle = color;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();

}

//Función para dibujar la paleta de colores
function dibujarPaletaColores() {

    dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, 'red');
    dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, 'green');
    dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, 'blue');

}

function habilitarDibujar() {

    puedoDibujar = true;

}

function deshabilitarDibujar() {

    puedoDibujar = false;

}

//Función para delimitar el área
function puedeDisenharArea(xCoordenada, yCoordenada) {

    if ((xCoordenada >= 0 && xCoordenada < (3 * tamanhoCuadrados + 5)) &&
        (yCoordenada >= 0 && yCoordenada < (tamanhoCuadrados + 5))) {

        return false;

    } else {

        return true;

    }

}

function capturarMovimientoDelMouse(evento) {

    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if (puedeDisenharArea(x, y)) {

        dibujarCirculo(x, y, colorActual);

    }

}

function seleccionarColor(evento) {

    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    //Cada condición altera el color de la variable colorActual

    //Comenzamos por la condición del eje Y que es común para todas
    if (y > yCuadrados && y < (yCuadrados + tamanhoCuadrados)) {

        if (x > xRojo && x < (xRojo + tamanhoCuadrados)) {

            colorActual = "red";
            console.log(colorActual);

        } else if (x > xVerde && x < (xVerde + tamanhoCuadrados)) {

            colorActual = "green";

        } else if (x > xAzul && x < (xAzul + tamanhoCuadrados)) {

            colorActual = "blue";

        }


    }


}

pantalla.onmousemove = capturarMovimientoDelMouse;

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

dibujarPaletaColores();

pantalla.onclick = seleccionarColor;

var cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', _ => {
            location.reload();
})
cancelar.addEventListener.onclick
function descargar() {

    var c = document.getElementById("myCanvas");
    let filename = prompt("Guardar como", ""),
        link = document.createElement('a');

    if (filename == null) {//si el usiario dio cancelar
        return false;
    }
    else if (filename == "") {//si el usuario le dio click y no puso nombre al archivo
        link.download = "Sin título";
        link.href = c.toDataURL("image/png");//usa la imagen del canvas

    }
    else {//si el usuario le dio aceptar y puso un nombre al archivo
        link.download = filename;
        try {
            link.href = c.toDataURL("image/jpg");
        } catch (error) {
            alert(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }
    }
    link.click();

}




