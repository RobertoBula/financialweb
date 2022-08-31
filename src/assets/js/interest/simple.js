$("#calcular").click(function () {
  $("#tbody").empty();
  const datasimple = {
    capital: $("#capital").val(),
    interes: $("#interes").val().replace(",", "."),
    plazo: $("#plazo").val(),
  };
  console.log(datasimple);

  // calcular el valor de la cuota

  const percent = datasimple.interes / 100;
  const convert = percent / 12;
  const cuota = eval(
    "datasimple.capital*(((1+convert)**datasimple.plazo)*convert)/(((1+convert)**datasimple.plazo)-1)"
  );
  console.log(convert);

  console.log(cuota);
  // calcula el interés

  let interest = datasimple.capital * convert * (datasimple.plazo / 12);

  //console.log(interest);

  // calcula el valor total a pagar por el prestamo

  const total = parseInt(datasimple.capital) + parseInt(interest);
  //console.log(total);

  let acapital = cuota - interest;
  let saldo = datasimple.capital - acapital;

  let tr = "";
  for (let i = 1; i <= datasimple.plazo; i++) {
    debugger;
    let abonoCapital = cuota - interest;
    interest = saldo * convert;
      saldo -= abonoCapital;
      tr += `<tr>
              <td>${i}</td>
              <td>${cuota.toFixed(0)}</td>
              <td>${interest.toFixed(0)}</td>
              <td>${abonoCapital.toFixed(0)}</td>
              <td>${saldo.toFixed(0)}</td>
          </tr>`;
  }

  $("#tbody").append(tr);
});
