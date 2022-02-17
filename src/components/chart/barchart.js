import React from 'react';
import {
  Chart as ChartJS,
  registerables
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
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

const labels = ['Number Of Unemployed Graduates', 'M', ];

export const data = {
  labels,
  datasets: [
    {
      label: 'User Data Chart',
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 1000000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(0, 255, 0, 0.5)',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
