var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

document.addEventListener("keydown", moverCerdo);


var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39,
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url:"vaca.png",
  cargaOK: false
};

var cerdo = {
  url:"cerdo.png",
  cargaOK: false
};

var pollo = {
  url:"pollo.png",
  cargaOK: false
};

var cantidad  = aleatorio(0, 64);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);
