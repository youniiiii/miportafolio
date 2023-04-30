
  let contenido = ('<img src="./img/imc.PNG"  width="400" height="200"> ');
  let contenido2 =('<img src="./img/web.PNG"  width="400" height="200"> ');
  let contenido3 =('<img src="./img/alura.PNG"  width="400" height="200"> ');
let btn = document.querySelector('#uno');
let btn2 = document.querySelector('#dos');
let btn3 = document.querySelector('#tres');
let cja = document.querySelector('.cja');
 btn.addEventListener('click',()=>{
    cja.innerHTML = contenido;
 })
 btn2.addEventListener('click',()=>{
    cja.innerHTML = contenido2;
 })
 btn3.addEventListener('click',()=>{
    cja.innerHTML = contenido3;
 })
 
