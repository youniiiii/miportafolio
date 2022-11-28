
let btn = document.querySelector('.checkbox');
let espahol = document.getElementById('español');
let ingles = document.getElementById('ingles');

btn.addEventListener('click', idiomas)


 function idiomas() {
let  es = btn.checked;
if (es==true) {
    location.href ='./inde.html';
}else{
    location.href ='./indes.html';
}
}
