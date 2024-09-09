import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../providers/appProvider";
import {generateRandomArrays} from "../../utils/utils";

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
  const {locationSelected}: any = useContext(AppContext)
  const [data, setData] = useState([[0],[0],[0]])
  useEffect(() => {
    if (!!locationSelected) setData(generateRandomArrays())
  }, [locationSelected])


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