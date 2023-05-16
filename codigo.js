const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show');
});

const donacionMonetaria = document.querySelector('#donacion-monetaria');
const imgMediosPago = document.querySelector('#img-medios-pago');

donacionMonetaria.addEventListener('click', function(){
  imgMediosPago.classList.toggle('show')
})

const donacionEspecie = document.querySelector('#donacion-especie');
const imgProductos = document.querySelector('#img-productos');

donacionEspecie.addEventListener('click', function(){
  imgProductos.classList.toggle('show')
})
