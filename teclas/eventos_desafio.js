

document.addEventListener("click", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("#8D7724", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento)
{
    var e = evento;
    console.log(e)
    dibujarLinea("#8D7724", x, y, e.offsetX, e.offsetY, papel)
    x = e.offsetX
    y = e.offsetY
}
