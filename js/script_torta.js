document.addEventListener('DOMContentLoaded', function () {
    fetch('data/Grafica_1_real.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoBarrasContaminacion').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: data.map(item => item.sector),
                    datasets: [{
                        label: 'Porcentaje de energía renovable',
                        data: data.map(item => item['porcentaje']),
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        borderColor: [
                            'rgb(54, 162, 235)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Porcentaje de contaminacion por sector'
                        }
                    }
                }
            });
        });
});