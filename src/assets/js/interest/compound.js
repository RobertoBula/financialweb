$("#calcular").click(function () {
  $("#tbody").empty();
  const data = {
    capital: $("#capital").val(),
    interes: $("#interes").val(),
    plazo: $("#plazo").val(),
  };
  console.log(data);
  let capital = data.capital;

  let percent = data.interes / 100;
  const result = eval("data.capital*((1+percent)**data.plazo)");

  console.log(result);

  let interest = result - capital;
  console.log(interest);

  console.log(percent);

  let tr = "";
  for (let i = 1; i <= data.plazo; i++) {
    debugger;
    let interestpy = capital * percent;
    let valor = parseInt(capital) + parseInt(interestpy);
    tr += `<tr> 
            <td>${i}</td>
            <td>${capital}</td>
            <td>${interestpy}</td>
            <td>${valor}</td>
        </tr>`;
    capital = valor;
  }

  $("#tbody").append(tr);
});
