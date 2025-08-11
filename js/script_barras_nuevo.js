document.addEventListener('DOMContentLoaded', function () {
    fetch('data/emisiones_CO2.json')
        .then(response => response.json())
        .then(data => {
             // Ordenar los datos de mayor a menor cantidad_CO2
            data.sort((a, b) => b.cantidad_CO2 - a.cantidad_CO2);
            const ctx = document.getElementById('graficoBarrasContaminacion').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.categoria_vehicular),
                    datasets: [{
                        label: 'Emisiones de CO2 por categoría vehicular',
                        data: data.map(item => item['cantidad_CO2']),
                        backgroundColor: 'rgba(54, 162, 235,0.6)',
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1
                        

                        

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
                                text: 'Vehículo'
                            }
                        }
                    }
                }
            });
        });

});