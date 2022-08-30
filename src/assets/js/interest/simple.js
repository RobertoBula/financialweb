$('#calcular').click(function () {
    const datasimple = {
        capital: $('#capital').val(),
        interes: $('#interes').val().replace(',', '.'),
        plazo: $('#plazo').val()
    }
    console.log(datasimple) 

    // calcular el valor de la cuota
    
    const percent =  datasimple.interes/100
    const cuota =  eval("datasimple.capital*(((1+percent)**datasimple.plazo)*percent)/(((1+percent)**datasimple.plazo)-1)")
   
    console.log(cuota)

    // calcula el interés

    let interest = datasimple.capital*percent*(datasimple.plazo/12)
   
    console.log(interest)
    


    // calcula el valor total a pagar por el prestamo

    const total = (parseInt(datasimple.capital)+parseInt(interest))
    console.log(total)

    let acapital = cuota-interest
    let saldo = acapital-datasimple.capital
    

    let tr = "";
    for(let i = 1; i <= datasimple.plazo; i++){
        if(i !== 1){
            interest = datasimple.capital * percent * (datasimple.plazo/12);
        }
        tr += `<tr>
            <td>${i}</td>
            <td>${(cuota.toFixed(2))}</td>
            <td>${interest}</td>
            <td>${acapital=-interest}</td>
            <td>${saldo=-acapital}</td>
        </tr>`;
    }

    $('#tbody').append(tr);
  
})


