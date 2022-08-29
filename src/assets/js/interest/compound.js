$('#calcular').click(function () {
    const data = {
        capital: $('#capital').val(),
        interes: $('#interes').val(),
        plazo: $('#plazo').val()
    }
    console.log(data) 

    
    const percent = data.interes/100
    const result = eval("data.capital*((1+percent)**data.plazo)")
    
    console.log(result)

    const interest = result - data.capital
    console.log(interest)

    console.log(percent)
})