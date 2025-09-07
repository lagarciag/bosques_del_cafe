// Chart.js configuration for Bosques del Café financial reports
// Waits for DOM to be fully loaded before initializing charts

// Support MkDocs Material's instant loading (document$) and fallback to DOMContentLoaded
(function() {
    const charts = {}; // store chart instances by canvas id

    function initFinancialCharts() {
        if (typeof window.Chart === 'undefined') {
            console.warn('[Bosques] Chart.js not loaded; skipping chart init');
            return;
        }

        // Color palette for consistency
        const colors = {
            gardens: 'rgba(34, 139, 34, 0.8)',      // Green for gardens
            utilities: 'rgba(255, 140, 0, 0.8)',    // Orange for utilities  
            extraordinary: 'rgba(220, 20, 60, 0.8)', // Red for extraordinary
            accumulated: 'rgba(70, 130, 180, 0.8)',  // Steel blue for accumulated
            average: 'rgba(255, 215, 0, 0.8)',      // Gold for average
        // New colors for additional charts
        income_ordinary: 'rgba(46, 125, 50, 0.8)',    // Dark green for ordinary income
        income_water: 'rgba(33, 150, 243, 0.8)',      // Blue for water income
        income_multas: 'rgba(255, 152, 0, 0.8)',      // Orange for fines
        income_otros: 'rgba(156, 39, 176, 0.8)',      // Purple for other income
        income_total: 'rgba(76, 175, 80, 0.8)',       // Green for total income
        // Assets colors
        cash: 'rgba(76, 175, 80, 0.8)',               // Green for cash
        accounts_receivable: 'rgba(255, 193, 7, 0.8)', // Amber for accounts receivable
        prepaid: 'rgba(63, 81, 181, 0.8)',            // Indigo for prepaid
        total_assets: 'rgba(33, 150, 243, 0.8)',      // Blue for total assets
        // Liabilities colors
        accounts_payable: 'rgba(244, 67, 54, 0.8)',   // Red for accounts payable
        labor_liabilities: 'rgba(255, 87, 34, 0.8)',  // Deep orange for labor
        reserves: 'rgba(121, 85, 72, 0.8)',           // Brown for reserves
        total_liabilities: 'rgba(156, 39, 176, 0.8)',  // Purple for total liabilities
        };

        // Common chart options
        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ₡' + context.parsed.y.toFixed(2) + 'M';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value) {
                        return '₡' + value + 'M';
                    }
                }
            }
        },
        elements: {
            line: {
                tension: 0.2
            },
            point: {
                radius: 4,
                hoverRadius: 6
            }
        }
        };

        // helper to (re)render a chart safely
        function renderChart(canvasId, cfg) {
            const el = document.getElementById(canvasId);
            if (!el) return;
            try {
                if (charts[canvasId]) {
                    charts[canvasId].destroy();
                }
                charts[canvasId] = new Chart(el, cfg);
            } catch (e) {
                console.error(`[Bosques] Failed to render chart ${canvasId}:`, e);
            }
        }

        // simple currency formatter for colones
        function formatCRC(n) {
            try {
                return '₡' + n.toLocaleString('es-CR');
            } catch (_) {
                return '₡' + (Math.round(n * 100) / 100).toString();
            }
        }

        // color palette for pie/doughnut charts
        const piePalette = [
            'rgba(46, 125, 50, 0.8)',  // green
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(121, 85, 72, 0.8)',
            'rgba(0, 150, 136, 0.8)'
        ];

        // Initialize Gardens Chart
        renderChart('gardensChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Mantenimiento de Jardines',
                    data: [2.29, 1.46, 1.79, 1.61, 3.09, 2.61, 1.98],
                    borderColor: colors.gardens,
                    backgroundColor: colors.gardens.replace('0.8', '0.2'),
                    fill: true
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        min: 1.0,
                        max: 3.5
                    }
                }
            }
        });

        // Initialize Utilities Chart
        renderChart('utilitiesChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Servicios Públicos',
                    data: [2.15, 1.91, 2.25, 2.26, 2.07, 2.91, 1.94],
                    borderColor: colors.utilities,
                    backgroundColor: colors.utilities.replace('0.8', '0.2'),
                    fill: true
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        min: 1.5,
                        max: 3.0
                    }
                }
            }
        });

        // Initialize Extraordinary Chart
        renderChart('extraordinaryChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Gastos Extraordinarios',
                    data: [0.00, 0.00, 0.00, 4.30, 0.00, 0.00, 2.06],
                    borderColor: colors.extraordinary,
                    backgroundColor: colors.extraordinary.replace('0.8', '0.2'),
                    fill: true
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        min: 0,
                        max: 5.0
                    }
                }
            }
        });

        // Initialize Accumulated Chart
        renderChart('accumulatedChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Total Gastos Acumulados',
                    data: [23.4, 44.8, 69.5, 91.8, 115.4, 138.7, 162.0],
                    borderColor: colors.accumulated,
                    backgroundColor: colors.accumulated.replace('0.8', '0.2'),
                    fill: true
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        min: 0,
                        max: 170
                    }
                }
            }
        });

        // Initialize Average Chart
        renderChart('averageChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Promedio Mensual de Gastos',
                    data: [23.4, 22.4, 23.2, 22.9, 23.1, 23.1, 23.1],
                    borderColor: colors.average,
                    backgroundColor: colors.average.replace('0.8', '0.2'),
                    fill: true
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        min: 22.0,
                        max: 24.0
                    }
                }
            }
        });

        // Pie: Gastos Julio 2025
        renderChart('gastosJulioPie', {
            type: 'doughnut',
            data: {
                labels: [
                    'Vigilancia y Seguridad',
                    'Gastos Extraordinarios',
                    'Mantenimiento Jardines',
                    'Cuota Administración',
                    'Servicio Eléctrico',
                    'Servicio de Agua',
                    'Mant. Edificio',
                    'Mant. Equipo',
                    'Otros'
                ],
                datasets: [{
                    label: 'Gastos Julio 2025',
                    data: [
                        6890842,
                        2063938,
                        1978014,
                        1890000,
                        1034530,
                        811809,
                        410115,
                        259500,
                        3979890
                    ],
                    backgroundColor: piePalette,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                const label = ctx.label || '';
                                const value = ctx.parsed;
                                const dataArr = ctx.dataset.data;
                                const total = dataArr.reduce((a, b) => a + b, 0);
                                const pct = total ? ((value / total) * 100).toFixed(1) : '0.0';
                                return `${label}: ${formatCRC(value)} (${pct}%)`;
                            }
                        }
                    }
                }
            }
        });

        // Pie: Gastos Acumulados Ene–Jul 2025
        renderChart('gastosAcumuladosPie', {
            type: 'doughnut',
            data: {
                labels: [
                    'Vigilancia y Seguridad',
                    'Servicios Públicos',
                    'Mantenimiento Jardines',
                    'Cuota Administración',
                    'Gastos Edificio Torres',
                    'Gastos Extraordinarios',
                    'Mant. Equipo',
                    'Mant. Edificio',
                    'Otros'
                ],
                datasets: [{
                    label: 'Gastos Ene–Jul 2025',
                    data: [
                        48235896,
                        21579193,
                        14821709,
                        13230000,
                        7494537,
                        6360182,
                        3679242,
                        2490950,
                        43040713
                    ],
                    backgroundColor: piePalette,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                const label = ctx.label || '';
                                const value = ctx.parsed;
                                const dataArr = ctx.dataset.data;
                                const total = dataArr.reduce((a, b) => a + b, 0);
                                const pct = total ? ((value / total) * 100).toFixed(1) : '0.0';
                                return `${label}: ${formatCRC(value)} (${pct}%)`;
                            }
                        }
                    }
                }
            }
        });

        // Initialize Electric Service Chart (Individual)
        renderChart('electricChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Servicio Eléctrico (₡)',
                    data: [1127585, 1034530, 1127585, 1034530, 1221639, 1127585, 1034530],
                    borderColor: 'rgba(255, 193, 7, 0.8)', // Amarillo para electricidad
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(255, 193, 7, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💡 Evolución del Servicio Eléctrico 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 900000,
                        ticks: {
                            callback: function(value) {
                                return '₡' + (value/1000).toFixed(0) + 'K';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Water Service Chart (Individual)
        renderChart('waterChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Servicio de Agua (₡)',
                    data: [811809, 827328, 811809, 827328, 980171, 827328, 811809],
                    borderColor: 'rgba(33, 150, 243, 0.8)', // Azul para agua
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(33, 150, 243, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💧 Evolución del Servicio de Agua 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 700000,
                        ticks: {
                            callback: function(value) {
                                return '₡' + (value/1000).toFixed(0) + 'K';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Phone Service Chart (Individual)
        renderChart('phoneChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Servicio Telefónico (₡)',
                    data: [89435, 89435, 89435, 89435, 89435, 89435, 89435],
                    borderColor: 'rgba(76, 175, 80, 0.8)', // Verde para teléfono
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '📞 Evolución del Servicio Telefónico 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 80000,
                        max: 95000,
                        ticks: {
                            callback: function(value) {
                                return '₡' + (value/1000).toFixed(0) + 'K';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Utilities Comparison Chart
        renderChart('utilitiesCompareChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Servicio Eléctrico',
                        data: [1127585, 1034530, 1127585, 1034530, 1221639, 1127585, 1034530],
                        borderColor: 'rgba(255, 193, 7, 0.8)',
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: 'rgba(255, 193, 7, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Servicio de Agua',
                        data: [811809, 827328, 811809, 827328, 980171, 827328, 811809],
                        borderColor: 'rgba(33, 150, 243, 0.8)',
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: 'rgba(33, 150, 243, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Servicio Telefónico',
                        data: [89435, 89435, 89435, 89435, 89435, 89435, 89435],
                        borderColor: 'rgba(76, 175, 80, 0.8)',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '🔄 Comparación de Servicios Públicos 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + (value/1000).toFixed(0) + 'K';
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'index',
                    intersect: false
                }
            }
        });

        // ACTIVOS - Dashboard de Activos
        // Initialize Caja Chart
        renderChart('cajaChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Caja (₡)',
                    data: [15.5, 12.3, 18.7, 14.2, 11.8, 16.5, 13.2],
                    borderColor: 'rgba(76, 175, 80, 0.8)', // Green for cash - direct color
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💵 Evolución de Caja 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 10.0,
                        max: 20.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Cuentas por Cobrar Chart
        renderChart('cuentasPorCobrarChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Cuentas por Cobrar (₡)',
                    data: [38.2, 39.5, 41.2, 40.8, 39.9, 38.5, 36.7],
                    borderColor: 'rgba(255, 193, 7, 0.8)', // Amber for accounts receivable
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(255, 193, 7, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '📋 Evolución Cuentas por Cobrar 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 35.0,
                        max: 42.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Pagos Anticipados Chart
        renderChart('pagosAnticipadosChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Pagos Anticipados (₡)',
                    data: [2.5, 2.3, 2.1, 1.9, 1.7, 1.5, 1.3],
                    borderColor: 'rgba(63, 81, 181, 0.8)', // Indigo for prepaid
                    backgroundColor: 'rgba(63, 81, 181, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(63, 81, 181, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💳 Evolución Pagos Anticipados 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 1.0,
                        max: 3.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Total Activo Circulante Chart
        renderChart('totalActivoCirculanteChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Total Activo Circulante (₡)',
                    data: [56.2, 54.1, 62.0, 56.9, 53.4, 56.5, 51.2],
                    borderColor: 'rgba(33, 150, 243, 0.8)', // Blue for total assets
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(33, 150, 243, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '📈 Total Activo Circulante 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 50.0,
                        max: 65.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // PASIVOS Y PATRIMONIO - Dashboard de Pasivos y Patrimonio
        // Initialize Pasivo Circulante Chart
        renderChart('pasivoCirculanteChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Pasivo Circulante (₡)',
                    data: [8.5, 9.2, 8.8, 9.5, 8.9, 9.1, 8.7],
                    borderColor: 'rgba(156, 39, 176, 0.8)', // Purple for total liabilities
                    backgroundColor: 'rgba(156, 39, 176, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(156, 39, 176, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '📋 Evolución Pasivo Circulante 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 8.0,
                        max: 10.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Patrimonio Chart
        renderChart('patrimonioChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Patrimonio (₡)',
                    data: [47.7, 44.9, 53.2, 47.4, 44.5, 47.4, 42.5],
                    borderColor: 'rgba(76, 175, 80, 0.8)', // Green for patrimonio
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '🏦 Evolución Patrimonio 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 40.0,
                        max: 55.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // Initialize Balance Pasivos vs Patrimonio Chart
        renderChart('pasivosPatrimonioChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Pasivo Circulante',
                        data: [8.5, 9.2, 8.8, 9.5, 8.9, 9.1, 8.7],
                        borderColor: 'rgba(156, 39, 176, 0.8)',
                        backgroundColor: 'rgba(156, 39, 176, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: 'rgba(156, 39, 176, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Patrimonio',
                        data: [47.7, 44.9, 53.2, 47.4, 44.5, 47.4, 42.5],
                        borderColor: 'rgba(76, 175, 80, 0.8)',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        tension: 0.4,
                        fill: false,
                        pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '⚖️ Balance Pasivos vs Patrimonio 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'index',
                    intersect: false
                }
            }
        });

        // Initialize Estructura Financiera Chart
        renderChart('estructuraFinancieraChart', {
            type: 'doughnut',
            data: {
                labels: ['Patrimonio', 'Pasivo Circulante'],
                datasets: [{
                    data: [42.5, 8.7], // Datos de julio en millones
                    backgroundColor: ['rgba(76, 175, 80, 0.8)', 'rgba(156, 39, 176, 0.8)'],
                    borderColor: ['rgba(76, 175, 80, 1)', 'rgba(156, 39, 176, 1)'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: '📊 Estructura Financiera - Julio 2025'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ₡${value.toFixed(1)}M (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });

        // Initialize Cuentas por Pagar Chart
        renderChart('cuentasPorPagarChart', {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Cuentas por Pagar (₡)',
                    data: [10.20, 6.46, 1.60, 1.37, 9.00, 14.66, 14.78],
                    borderColor: 'rgba(244, 67, 54, 0.8)', // Red for accounts payable
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(244, 67, 54, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💳 Evolución Cuentas por Pagar 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 16,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        // GRÁFICOS DETALLADOS PARA TABS
        // Initialize Detailed Charts for individual tabs
        renderChart('cajaDetailChart', {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Flujo de Caja Mensual (₡)',
                    data: [15500000, 12300000, 18700000, 14200000, 11800000, 16500000, 13200000],
                    backgroundColor: colors.cash,
                    borderColor: colors.cash.replace('0.8', '1'),
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💰 Flujo de Caja Mensual 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                    }
                }
            }
        });

        renderChart('cuentasPorCobrarDetailChart', {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Cuentas por Cobrar (₡)',
                    data: [38200000, 39500000, 41200000, 40800000, 39900000, 38500000, 36700000],
                    backgroundColor: colors.accounts_receivable,
                    borderColor: colors.accounts_receivable.replace('0.8', '1'),
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '📊 Evolución Cuentas por Cobrar 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 35000000,
                        ticks: {
                            callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                    }
                }
            }
        });

        renderChart('pagosAnticipadosDetailChart', {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Pagos Anticipados (₡)',
                    data: [2500000, 2300000, 2100000, 1900000, 1700000, 1500000, 1300000],
                    backgroundColor: colors.prepaid,
                    borderColor: colors.prepaid.replace('0.8', '1'),
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💳 Evolución Pagos Anticipados 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 1000000,
                        ticks: {
                            callback: function(value) {
                                return formatCurrency(value);
                            }
                        }
                    }
                }
            }
        });

        renderChart('activoCirculanteComposicionChart', {
            type: 'doughnut',
            data: {
                labels: ['Caja', 'Cuentas por Cobrar', 'Pagos Anticipados'],
                datasets: [{
                    data: [13200000, 36700000, 1300000], // Datos de julio
                    backgroundColor: [colors.cash, colors.accounts_receivable, colors.prepaid],
                    borderColor: [
                        colors.cash.replace('0.8', '1'), 
                        colors.accounts_receivable.replace('0.8', '1'), 
                        colors.prepaid.replace('0.8', '1')
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: '🏦 Estructura del Activo Circulante - Julio 2025'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });

        renderChart('pasivoCirculanteDetailChart', {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Pasivo Circulante (₡)',
                    data: [8.5, 9.2, 8.8, 9.5, 8.9, 9.1, 8.7],
                    backgroundColor: 'rgba(156, 39, 176, 0.8)',
                    borderColor: 'rgba(156, 39, 176, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '📋 Pasivos de Corto Plazo 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 8.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        renderChart('cuentasPorPagarDetailChart', {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Cuentas por Pagar (₡)',
                    data: [3.2, 2.8, 3.5, 4.1, 3.7, 3.9, 3.4],
                    backgroundColor: 'rgba(244, 67, 54, 0.8)',
                    borderColor: 'rgba(244, 67, 54, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '💰 Obligaciones con Proveedores 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 2.5,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });

        renderChart('patrimonioDetailChart', {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Patrimonio (₡)',
                    data: [47.7, 44.9, 53.2, 47.4, 44.5, 47.4, 42.5],
                    backgroundColor: 'rgba(76, 175, 80, 0.8)',
                    borderColor: 'rgba(76, 175, 80, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: '🏛️ Patrimonio del Condominio 2025'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 40.0,
                        ticks: {
                            callback: function(value) {
                                return '₡' + value.toFixed(1) + 'M';
                            }
                        }
                    }
                }
            }
        });
    }

    // Hook for MkDocs Material (instant navigation)
    if (typeof window.document$ !== 'undefined' && window.document$ && typeof window.document$.subscribe === 'function') {
        window.document$.subscribe(() => initFinancialCharts());
    } else {
        // Fallback for full page loads or other themes
        window.addEventListener('DOMContentLoaded', initFinancialCharts);
    }
})();
