
let btn = document.querySelector('#btn');
let con = ('<img src="../img/alura.PNG"  width="400" height="200"> ');

//
//let cancelar = document.getElementById('#cancelar');
//cancelar.addEventListener('click', () => {
//  location.reload();
//})

// memorizar las palabres funciones constantes de entrada y de salida   los datos se  reciven en forma de   un valor el cual si no se ingresa  salta errror
btn.addEventListener('click', () => {
    var random = Math.round(Math.random(1) * 10);
    const nums = document.querySelector('.n');
    let vale = nums.value;
    if (vale == random) {
        let caja = document.querySelector('#c');
        caja.innerHTML = con;

    } else { alert(vale); }

})
