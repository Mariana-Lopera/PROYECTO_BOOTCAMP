document.addEventListener('DOMContentLoaded', function () {
    fetch('data/grafica_3.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoBarrasContaminacion').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.Combustible),
                    datasets: [{
                        label: 'Combustibles',
                        data: data.map(item => item['CO2']),
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
                                text: 'Combustible'
                            }
                        }
                    }
                }
            });
        });

});