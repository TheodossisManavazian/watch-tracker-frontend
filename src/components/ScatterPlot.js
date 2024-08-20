import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


function ScatterPlot({ data, length}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (data && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Updated condition order
      const conditionOrder = [
        'New',
        'Like new & unworn',
        'Used (Very good)',
        'Used (Good)',
        'Used (Fair)',
        'Incomplete',
      ];

      // Map each condition to a range of x-values
      const conditionMap = conditionOrder.reduce((acc, condition, index) => {
        acc[condition] = index;
        return acc;
      }, {});

      // Define the width of each condition container
      const containerWidth = 0.5; // 0.9 of a full category width
      const randomOffset = (index) => (Math.random() - 0.5) * containerWidth;

      // Prepare data for scatter plot
      const scatterData = data.map(item => ({
        x: conditionMap[item.condition] + randomOffset(conditionMap[item.condition]),
        y: item.price_usd,
        condition: item.condition,
        url: item.listing_url,
      }));

      // Calculate y-axis padding
      const yValues = scatterData.map((item) => item.y);
      const yMin = Math.min(...yValues);
      const yMax = Math.max(...yValues);


      // Combine scatter data and regression line
      const chartData = {
        datasets: [
          {
            label: 'Price vs Condition -- Showing ' + length + ' Listings',
            data: scatterData,
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
          },
        ],
      };

      // Configure chart
      const config = {
        type: 'scatter',
        data: chartData,
        options: {
          scales: {
            x: {
                max: conditionOrder.length,
                min: 0,
                type: 'linear',
                position: 'bottom',
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    lineWidth: 1,
                },
                ticks: {
                    callback: (value) => {
                    if (value >= 0 && value < conditionOrder.length && Number.isInteger(value)) {
                        return conditionOrder[value];
                    }
                    return '';
                    },
                    autoSkip: false,
                    stepSize: 1,
                    min: -0.5,  // Start at -0.5 to center the first condition
                    max: conditionOrder.length - 0.5, // End at the last condition
                },
                title: {
                    display: true,
                    text: 'Condition',
                },
            },
            y: {
              beginAtZero: true,
              min: Math.floor(yMin / 5000) * 5000,
              max: Math.ceil(yMax / 5000) * 5000,
              title: {
                display: true,
                text: 'Price (USD)',
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                lineWidth: 1,
              },
            },
          },
          onClick: (e, activeEls) => {
            if (activeEls.length > 0) {
              const datasetIndex = activeEls[0].datasetIndex;
              const index = activeEls[0].index;
              const dataPoint = chartData.datasets[datasetIndex].data[index];
              window.open(dataPoint.url, '_blank');
            }
          },
        },
      };

      // Destroy previous chart if it exists to avoid duplication
      if (canvasRef.current._chart) {
        canvasRef.current._chart.destroy();
      }

      // Create new chart
      canvasRef.current._chart = new Chart(ctx, config);
    }
  }, [data]);

  return <canvas ref={canvasRef}/>;
};

export default ScatterPlot;
