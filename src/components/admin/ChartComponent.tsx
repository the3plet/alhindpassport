import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartComponentProps {}

const ChartComponent: React.FC<ChartComponentProps> = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null); // Store chart instance

  useEffect(() => {
    const chartCanvas = chartRef.current;
    if (!chartCanvas) return;

    const ctx = chartCanvas.getContext('2d');
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Applications Received',
            data: [50, 60, 70, 80, 90, 100],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup function to destroy the chart when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className="chart-container">
      <h2>Application Statistics</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
