
function imprSelec(nombre) {
  var ficha = document.getElementById(nombre);
  var ventimp = window.open(' ', 'popimpr');
  ventimp.document.write(ficha.innerHTML);
  ventimp.document.close();
  ventimp.print();
  ventimp.close();
}



// CONEXION CON EL BOTON
var botonAdicionar = document.querySelector("#miBoton");
//forma anonima


botonAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  let form = document.querySelector("#formulariosCargar");
  let nombre = form.nombre.value;
  let altura = form.producto.value;
  let peso = form.cantidades.value;
  let local = form.local.value;

  let pacienteTr = document.createElement("tr");
  let nombreTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let pesoTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");

  function multiplica(x, j) {
    let re = x * j;
    return re;

  }
  nombreTd.textContent = nombre;
  alturaTd.textContent = altura;
  pesoTd.textContent = peso;
  gorduraTd.textContent = local;
  imcTd.textContent = multiplica(altura, peso);

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  var tabla = document.querySelector("#tabla-pacientes");

  tabla.appendChild(pacienteTr);

});



var pacientes = document.querySelectorAll(".paciente");

for (var z = 0; z < pacientes.length; z++) {
  var paciente = pacientes[z];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");
  var tdIMC = paciente.querySelector(".precio-total");
  pesoEsValido = true;
  alturaEsValida = true;
}

//usamos la funcion en forma generica si es de muchos usos  titulo.addEventListener("click", mostrar);function mostrar() { console.log("perro"); }
console.log(pacientes);











