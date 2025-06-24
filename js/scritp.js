$(document).ready(function () {
  $('#modeloForm').on('submit', function (e) {
    e.preventDefault();
    let c = parseFloat($('#cursos').val());
    let t = parseFloat($('#tiempo').val());
    let a = parseFloat($('#accesibilidad').val());

    let s = (2 * c) + (0.5 * t) + (30 * a);
    $('#resultado').html('Nivel de satisfacción (S): ' + s.toFixed(2));

    new Chart(document.getElementById("grafica"), {
      type: 'bar',
      data: {
        labels: ["Cursos", "Tiempo", "Accesibilidad", "Satisfacción"],
        datasets: [{
          label: "Valores ingresados",
          backgroundColor: ["#007bff", "#28a745", "#ffc107", "#17a2b8"],
          data: [c, t, a * 100, s]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  });
});