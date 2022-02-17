import React from 'react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
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
    labels: ['Employed Graduates After Six Months', 'Un-Employed Graduates After Six Months'],
    datasets: [
      {
        label: 'Proportion of Unemployed Graduates After Six Months',
        data: [12, 19, ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

export function PieChart() {
  return <Pie data={data} />;
}
