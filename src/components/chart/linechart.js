import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
   
  },
};

const labels = ['', '', '', '', '', '', '', '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Salary (NGN)',
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 1000000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
