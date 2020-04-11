
var horaTransferencia = prompt("¿Cuando deseaa que se realize la transacción?");
var transaccion = prompt("¿Cuanto desea transferir?");


 transferir("MCD","BCP",horaTransferencia,transaccion,1000000);



function transferir(banco_cliente, banco_destino, hora_transferencia, una_transaccion, saldo)
{

    var hora = parseInt(hora_transferencia);
    var monto = parseInt(una_transaccion);
    var costoTransaccion;

      if(hora_transferencia >=9 && hora <=12 || hora >=15 && hora <=20)
        {
          if(banco_cliente == banco_destino)
          {
            costoTransaccion = 100
          }
          else
          {
            costoTransaccion = 0
          }

          if(saldo > monto + costoTransaccion)
          {
            console.log("La transacción fue realizada con éxito")
          }
          else
          {
            console.error("hubo un fallo en el sistema")
          }
        }
        else
        {
          console.warn("no estamos en horario de atencion")
        }
}
