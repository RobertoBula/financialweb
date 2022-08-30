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
  const cuota = eval(
    "datasimple.capital*(((1+percent)**datasimple.plazo)*percent)/(((1+percent)**datasimple.plazo)-1)"
  );

  console.log(cuota);

  // calcula el interés

  let interest = datasimple.capital * percent * (datasimple.plazo / 12);

  console.log(interest);

  // calcula el valor total a pagar por el prestamo

  const total = parseInt(datasimple.capital) + parseInt(interest);
  console.log(total);

  let acapital = cuota - interest;
  let saldo = datasimple.capital - acapital;

  let tr = "";
  for (let i = 1; i <= datasimple.plazo; i++) {
    let abonoCapital = cuota - interest;
    if (i !== 1) {
      interest = saldo * percent * (datasimple.plazo / 12);
      saldo -= abonoCapital;
    }
    tr += `<tr>
            <td>${i}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${interest.toFixed(2)}</td>
            <td>${abonoCapital.toFixed(2)}</td>
            <td>${saldo.toFixed(2)}</td>
        </tr>`;
  }

  $("#tbody").append(tr);
});
