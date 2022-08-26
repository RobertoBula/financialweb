$('#calcular').click(function () {
    const datasimple = {
        capital: $('#capital').val(),
        interes: $('#interes').val(),
        plazo: $('#plazo').val()
    }
    console.log(datasimple) 

    // calcular el valor de la cuota
    const percent =  datasimple.interes/100
    const result =  eval("datasimple.capital*((1+percent)**datasimple.plazo*percent)/((1+percent)**datasimple.plazo-1)")
   
    console.log(result)

    // calcula el interés

    const interest = (datasimple.capital*percent*datasimple.plazo)
    console.log(interest)

    // calcula el valor total a pagar por el prestamo

    const total = (parseInt(datasimple.capital)+parseInt(interest))
    console.log(total)




})


