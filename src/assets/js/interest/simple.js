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
  for (let i = 1; i <= datasimple.plazo; i++) {
    
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
    if (i === datasimple.plazo -1){
      cuota = saldo;
    }
  }
  $("#tbody").append(tr);
});
