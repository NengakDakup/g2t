import React from 'react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
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
    labels: ['Graduates Pursuing Higher Degree', 'Graduates Not Pursuing Higher Degree'],
    datasets: [
      {
        label: 'Proportion Graduates Pursuing Higher Degree',
        data: [12, 19, ],
        backgroundColor: [
          'red',
          'orange',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

export function PolarChart() {
  return <PolarArea data={data} />;
}
