function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

var xCerdo = 190;
var yCerdo = 200;


function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for (var v=0; v< cantidad; v++)
    {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }

  }

  if(pollo.cargaOK)
  {
    console.log(cantidad);
    for (var v=0; v< cantidad; v++)
    {
      var x = aleatorio(0, 4);
      var y = aleatorio(0, 4);
      var x = x * 100;
      var y = y * 100;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
  }

}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}



function moverCerdo(evento)
{
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
    yCerdo -= movimiento;

    break;
    case teclas.DOWN:
    yCerdo += movimiento;
    break;
    case teclas.RIGTH:
    xCerdo += movimiento;
    break;
    case teclas.LEFT:
    xCerdo -= movimiento;
    break;
    default:
    console.log("Otra tecla")
    break;
  }

  vp.width = vp.width;
  papel.drawImage(cerdo.imagen, xCerdo, yCerdo)

}
