document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('adoptedPetsChart').getContext('2d');
    const ctx2 = document.getElementById('adoptionsByMonthChart').getContext('2d');
    const ctx3 = document.getElementById('adoptionsPerYearChart').getContext('2d');
    const ctx5 = document.getElementById('donationsChart').getContext('2d');


    // Gráfico de barras (Cantidad de adopciones por año)
    const adoptionsPerYearChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                label: 'Adopciones por Mes',
                data: [5, 10, 15, 20, 25, 30, 35, 20, 15, 10, 5, 10],
                backgroundColor: '#88a927',
                borderColor: '#88a927',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    // Gráfico de barras (Cantidad de adopciones por año)
    const adoptionsByMonthChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Adopciones por Año',
                data: [50, 60, 70, 80],
                backgroundColor: '#848080',
                borderColor: '#848080',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    // Gráfico de torta (Cantidad de perros adoptados vs gatos adoptados)
    const adoptedPetsChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Perros Adoptados', 'Gatos Adoptados'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#88a927', '#848080'],
                hoverBackgroundColor: ['#88a927', '#848080']
            }]
        },
        options: {
            aspectRatio: 1.7, // Ajusta este valor según tus necesidades
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            let sum = 0;
                            let dataArr = tooltipItem.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let value = tooltipItem.raw;
                            let percentage = (value * 100 / sum).toFixed(2) + "%";
                            return tooltipItem.label + ': ' + percentage;
                        }
                    }
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: '#fff',
                }
            }
        },
        plugins: [ChartDataLabels]
    });



    // Gráfico de barra (Monto de donaciones por año)
    const donationsChart = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'MONTOS EN ($) DE DONACIONES ANUALES',
                data: [5000, 7000, 6000, 8000],
                backgroundColor: ['#88a927', '#848080'],
                borderColor: ['#fff', '#fff']
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Montos Recibidos Anualmente'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
