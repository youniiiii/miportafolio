
let btn = document.querySelector('#btn');
let con = ('<img src="https://c.tenor.com/qg8K8VOmzJwAAAAj/party-popper-confetti.gif"  width="400" height="400"> <br> <h1>felicidades  es correcto :</h1>');

let mens = ('<img src="https://c.tenor.com/fKmjHZoUYc4AAAAC/no-nodding.gif"  width="400" height="400"> ');

// memorizar las palabres funciones constantes de entrada y de salida   los datos se  reciven en forma de   un valor el cual si no se ingresa  salta errror
btn.addEventListener('click', () => {
    var random = Math.round(Math.random(1) * 10);
    const nums = document.querySelector('.n');
    let vale = nums.value;
    let caja = document.querySelector('#c');
   if (vale == random ) {
        caja.innerHTML = con + ('<h1 class="text-center" style="color:white;">' + random + '</h1>');
    } else{
        caja.innerHTML = mens + (' <h1 class="text-center" style="color:white;">'+random+' te quedan de intentos '+intentos+'</h1>');
    }
 

})
var cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', _ => {
    location.reload();
})
