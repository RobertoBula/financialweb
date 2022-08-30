$("#calcular").click(function () {
  $("#tbody").empty();
  const datasimple = {
    capital: $("#capital").val(),
    interes: $("#interes").val().replace(",", "."),
    plazo: $("#plazo").val(),
  };
  console.log(datasimple);

  // calcular el valor de la cuota

  const percent = datasimple.interes / 100
  const convert = percent / 12 
  const cuota = eval(
    "datasimple.capital*(((1+percent)**datasimple.plazo)*percent)/(((1+percent)**datasimple.plazo)-1)"
  );
  console.log(convert);

  console.log(cuota);
  // calcula el interés

  let interest = datasimple.capital * percent * (datasimple.plazo / 12);

 //console.log(interest);

  // calcula el valor total a pagar por el prestamo

  const total = parseInt(datasimple.capital) + parseInt(interest);
  //console.log(total);

  //   let acapital = cuota - interest;
  //   let saldo = datasimple.capital - acapital;

  //   let tr = "";
  //   for (let i = 0; i <= datasimple.plazo; i++) {
  //     let abonoCapital = cuota - interest;
  //     if (i !== 0) {
  //       interest = saldo * percent * (datasimple.plazo/12);
  //       saldo -= abonoCapital;
  //       tr += `<tr>
  //             <td>${i}</td>
  //             <td>${cuota.toFixed(0)}</td>
  //             <td>${interest.toFixed(0)}</td>
  //             <td>${abonoCapital.toFixed(0)}</td>
  //             <td>${saldo.toFixed(0)}</td>
  //         </tr>`;
  //     }else{
  //         tr += `<tr>
  //         <td>${i}</td>
  //         <td>${0}</td>
  //         <td>${0}</td>
  //         <td>${0}</td>
  //         <td>${saldo}</td>
  //     </tr>`;
  //     }
  //   }

  //   $("#tbody").append(tr);
});
