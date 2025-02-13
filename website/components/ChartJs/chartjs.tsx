"use client";
import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const destroyExistingChart = (chartId: string) => {
    const existingChart = Chart.getChart(chartId);
    if (existingChart) {
        existingChart.destroy();
    }
};

const initChart = () => {
    if (typeof window !== 'undefined') {
        Chart.register(ChartDataLabels);

        const chart2Element = document.getElementById('Chart2') as HTMLCanvasElement;
        const chart1Element = document.getElementById('Chart1') as HTMLCanvasElement;

        if (chart2Element && chart1Element) {
            destroyExistingChart('Chart2');
            destroyExistingChart('Chart1');

            const ctx1 = chart2Element.getContext('2d');
            const ctx = chart1Element.getContext('2d');

            if (ctx1 && ctx) {
                new Chart(ctx1, {
                    type: 'pie',
                    data: { datasets: [{ data: [50, 50], backgroundColor: ['#FF6384', '#36A2EB'] }] },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false },
                            datalabels: {
                                display: true,
                                formatter: value => value,
                                color: '#fff',
                                font: { weight: 'bold', size: 16 }
                            }
                        }
                    }
                });

                new Chart(ctx, {
                    type: 'pie',
                    data: { datasets: [{ data: [50, 50], backgroundColor: ['#FF6384', '#36A2EB'] }] },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false },
                            datalabels: {
                                display: true,
                                formatter: value => value,
                                color: '#fff',
                                font: { weight: 'bold', size: 16 }
                            }
                        }
                    }
                });
            }
        }
    }
};

const Chartjs: React.FC = () => {
    useEffect(() => {
        initChart();
    }, []);

    return (
        <>
            <canvas id="Chart1"></canvas>
            <canvas id="Chart2"></canvas>
        </>
    );
};

export default Chartjs;
