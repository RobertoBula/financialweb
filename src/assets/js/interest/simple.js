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

    const interest = datasimple.capital*percent*(datasimple.plazo/12)
   
    console.log(interest)
    


    // calcula el valor total a pagar por el prestamo

    const total = (parseInt(datasimple.capital)+parseInt(interest))
    console.log(total)

    const acapital = cuota-interest
    const saldo = acapital-datasimple.capital
    

    // for(let i = 0; i <= cuota; i++){
    //     let tr = `<tr>
    //         <td>${i}</td>
    //         <td>${cuota}</td>
    //         <td>${interest}</td>
    //         <td>${acapital}</td>
    //         <td>${saldo}</td>
    //     </tr>`;
    // }

  
})


