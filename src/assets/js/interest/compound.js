$('#calcular').click(function () {
    const data = {
        capital: $('#capital').val(),
        interes: $('#interes').val(),
        plazo: $('#plazo').val()
    }
    console.log(data)
})