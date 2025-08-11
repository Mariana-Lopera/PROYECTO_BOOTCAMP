document.addEventListener('DOMContentLoaded', function () {
    fetch('data/grafica_3.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoBarrasContaminacion').getContext('2d');
            new Chart(ctx, {
                type: 'line', // Cambiado de 'bar' a 'line'
                data: {
                    labels: data.map(item => item.Combustible),
                    datasets: [{
                        label: 'Emisiones de CO2 por Combustible',
                        data: data.map(item => item['CO2']),
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235,0.2)',
                        borderWidth: 2,
                        fill: false,
                        tension: 0.2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Emision de CO2 (Toneladas)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Combustible'
                            }
                        }
                    }
                }
            });
        });
});