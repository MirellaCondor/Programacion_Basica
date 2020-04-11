class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.montoPorBillete = v*c;
  }

}

function entregarDinero()
{

  resultado.innerHTML = "";
  entregado = [];

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  if(saldoCaja >= dinero){
    saldoCaja -=dinero;

    for(var billete$ of caja)
    {
      if(dinero > 0)
      {
        division = Math.floor(dinero / billete$.valor)

        if(division > billete$.cantidad)
        {
          papeles = billete$.cantidad;
        }
        else
        {
          papeles = division;
        }

        entregado.push( new Billete(billete$.valor, papeles) );
        dinero = dinero - (billete$.valor * papeles);
      }

    }

  } else {
    resultado.innerHTML = "Saldo Insuficiente, porque soy un cajero pobre :(";
  }

  var imagenBillete;

  for(var e of entregado)
  {
    switch (e.valor) {
      case 20:
      imagenBillete = 'billetito_de_20.jpg';
      break
      case 50:
      imagenBillete = 'billetito_de_50.jpg';
      break;
      default:
      imagenBillete = 'cajero.gif';
      break;

    }

    if(e.cantidad > 0)
    {
      for (var i = 0; i < e.cantidad; i++) {
        resultado.innerHTML = resultado.innerHTML + "<img src='"+imagenBillete+"' style='width:80px;display: inline-block;margin:0 4px 4px 0' />";
      }
      //resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor +"<br />";

    }
  }

  console.log(entregado);
  console.log('SALDO ACTUAL:'+saldoCaja);

}


var caja = [];
var saldoCaja = 0;
var entregado = [];
caja.push( new Billete(200, 20) );
caja.push( new Billete(100, 20) );
caja.push( new Billete(50, 50) );
caja.push( new Billete(20, 19) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 4) );

for (var billete of caja) {
  saldoCaja += billete.montoPorBillete;
}

console.log(saldoCaja);

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
