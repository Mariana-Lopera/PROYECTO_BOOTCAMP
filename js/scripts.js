document.addEventListener('DOMContentLoaded', function () {
    fetch('data/emisiones_transformado.json')
        .then(response => response.json())
        .then(data => {
            // Obtener categoria_vehicular únicos
            const categoria_vehicularUnicos = [...new Set(data.map(item => item.categoria_vehicular))];

            // Para cada sector, buscar el valor de cada fuente
            const CO2PorSector = categoria_vehicularUnicos.map(sector => {
                const encontrado = data.find(item => item.categoria_vehicular === sector && item.gases === 'CO2');
                return encontrado ? encontrado.valor : 0;
            });

            const CH4PorSector = categoria_vehicularUnicos.map(sector => {
                const encontrado = data.find(item => item.categoria_vehicular === sector && item.gases === 'CH4');
                return encontrado ? encontrado.valor : 0;
            });

            const N2OPorSector = categoria_vehicularUnicos.map(sector => {
                const encontrado = data.find(item => item.categoria_vehicular === sector && item.gases === 'N2O');
                return encontrado ? encontrado.valor : 0;
            });
            
            const ctx = document.getElementById('graficoBarrasContaminacion').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: categoria_vehicularUnicos,
                    datasets: [
                        {
                            label: 'CO2',
                            data: CO2PorSector,
                            borderColor: 'rgba(255, 99, 132,1)',
                            backgroundColor: 'rgba(255, 9, 63, 0.2)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.2
                        },
                        {
                            label: 'CH4',
                            data: CH4PorSector,
                            borderColor: 'rgba(99, 255, 143, 1)',
                            backgroundColor: 'rgba(9, 255, 120, 0.2)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.2
                        },
                        {
                            label: 'N2O',
                            data: N2OPorSector,
                            borderColor: 'rgba(139, 98, 240, 1)',
                            backgroundColor: 'rgba(139, 98, 240, 0.2)',
                            fill: false,
                            borderWidth: 1,
                            tension: 0.2
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'valor de Contaminación (%)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'categoria_vehicular'
                            }
                        }
                    }
                }
            });
        });
});