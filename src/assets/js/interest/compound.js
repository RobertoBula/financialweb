$('#calcular').click(function () {
    const data = {
        capital: $('#capital').val(),
        interes: $('#interes').val(),
        plazo: $('#plazo').val()
    }
    console.log(data) 

    
    let percent = data.interes/100
    const result = eval("data.capital*((1+percent)**data.plazo)")
    
    console.log(result)

    let interest = result - data.capital
    console.log(interest)

    let interestpy = data.capital * percent
    console.log(interestpy)
    console.log(percent)
    
    let valor = parseInt(data.capital) + parseInt(interestpy);
    console.log(valor)

    let tr ="" ;
    for(let i = 1 ; i <= data.plazo ; i++){
        let interestpy = data.capital * percent ;
               
        tr += `<tr> 
            <td>${i}</td>
            <td>${data.capital}</td>
            <td>${interestpy}</td>
            <td>${valor}</td>

        </tr>`;


    }


$("#tbody").append(tr);


});