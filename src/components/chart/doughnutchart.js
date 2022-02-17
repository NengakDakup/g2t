import React from 'react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(...registerables);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
   
  },
};

export const data = {
    labels: ['Jobless Male Graduates', 'Jobless Female Grduates'],
    datasets: [
      {
        label: 'Jobless Graduate Diploma by Gender',
        data: [12, 19, ],
        backgroundColor: [
          'blue',
          'green',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
