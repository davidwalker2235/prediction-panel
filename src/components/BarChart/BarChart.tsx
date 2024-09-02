import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const xLabels = [
  '00h',
  '01h',
  '02h',
  '03h',
  '04h',
  '05h',
  '06h',
  '07h',
  '08h',
  '09h',
  '10h',
  '11h',
  '12h',
  '13h',
  '14h',
  '15h',
  '16h',
  '17h',
  '18h',
  '19h',
  '20h',
  '21h',
  '22h',
  '23h',
];

export default function StackedBarChart() {
  const generateRandomArrays = () => {
    const arrayLength = 24;
    const targetSum = 30;
    const minSum = targetSum * 0.8; // 80% del total

    let a = new Array(arrayLength);
    let b = new Array(arrayLength);
    let c = new Array(arrayLength);

    for (let i = 0; i < arrayLength; i++) {
      a[i] = Math.floor(Math.random() * targetSum);
      let minB = Math.max(0, minSum - a[i]);
      b[i] = Math.floor(Math.random() * (targetSum - a[i] - minB + 1)) + minB;

      c[i] = targetSum - a[i] - b[i];
    }

    return [a, b, c];
  }

  const data = generateRandomArrays();

  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: data[0], label: 'Manual', id: 'pvId', stack: 'total' },
        { data: data[1], label: 'Electric', id: 'uvId', stack: 'total' },
        { data: data[2], label: 'Out of service', id: 'fvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}