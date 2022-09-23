$(document).ready(function () {
  $("#convertir").click(function () {
    const ids = [
      "efective-anual",
      "efective-semestral",
      "efective-cuatrimestral",
      "efective-trimestral",
      "efective-bimestral",
      "efective-mensual",
    ];
    const numeros = [360, 180, 120, 90, 60, 30];
    let interes = $("#interes").val();
    const convert = interes / 100;
    ids.forEach(function (id, index) {
      $(`#${id}`).val(eval('(1+convert)**(numeros[index]/360)-1').toFixed(4));
    });
  });
});
