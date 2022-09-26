$("#calcular").click(function () {
  $("#tbody").empty();
  const datasimple = {
    capital: $("#capital").val(),
    interes: $("#interes").val().replace(",", "."),
    plazo: $("#plazo").val(),
  };

  // calcular el valor de la cuota

  const percent = datasimple.interes / 100;
  const convert = percent / 12;
  let cuota = eval(
    "datasimple.capital*(((1+convert)**datasimple.plazo)*convert)/(((1+convert)**datasimple.plazo)-1)"
  );
  let interest = datasimple.capital * convert * (datasimple.plazo / 12);
  let acapital = cuota - interest;
  let saldo = datasimple.capital - acapital;

  let tr = "";
  let saldoTemp = 0;
  for (let i = 1; i <= datasimple.plazo; i++) {
    if (i === parseInt(datasimple.plazo) - 1) saldoTemp = saldo;
    if (i === parseInt(datasimple.plazo)) {
      cuota = saldoTemp;
      acapital = cuota;
      saldo = cuota - acapital;
      interest = saldo * convert * (datasimple.plazo / 12);
    }
    tr += `<tr>
    <td>${i}</td>
    <td>${cuota.toFixed(0)}</td>
    <td>${interest.toFixed(0)}</td>
    <td>${acapital.toFixed(0)}</td>
    <td>${saldo.toFixed(0)}</td>
    </tr>`;
    saldo -= acapital;
    interest = saldo * convert * (datasimple.plazo / 12);
    acapital = cuota - interest;
  }
  $("#tbody").append(tr);
});
