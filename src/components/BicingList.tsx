import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProgressBar from "../components/ProgressBar";
import {useContext} from "react";
import {AppContext} from "../providers/appProvider";
import {MarkerType} from "../types/globalTypes";
import {findStationByKey, isTheSameMarker} from "../utils/utils";

function createData(
  markerKey: string,
  probability: number,
  amount: number,
  isSelected: boolean
) {
  return { markerKey, probability, amount, isSelected};
}

export default function BicingList() {
  const {markers, locationSelected, setLocationSelected}: any = useContext(AppContext)
  const createRows = () => {
    if (!!markers) {
      return markers.map((marker: MarkerType) => createData(
        marker.markerKey,
        marker.probability as number,
        marker.amount as number,
        isTheSameMarker(marker, locationSelected)
        ))
    }
    return []
  }
  const onClickRow = (row: any) => {
    const marker = findStationByKey(markers, row.markerKey);
    setLocationSelected(marker);
  }


  return (
    <TableContainer
      component={Paper}
      sx={{
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
        '& ul': { padding: 0 }}}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createRows().map((row: any, i: number) => (
            <TableRow
              onClick={() => onClickRow(row)}
              key={`${row.key}-${i}`}
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: (row.isSelected) ? 'red' : 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 400,
                '& ul': { padding: 0 },
                '&:last-child td, &:last-child th': { border: 0 }
              }}
            >
              <TableCell component="th" scope="row">
                {`Station Number: ${row.markerKey}`}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.amount}
              </TableCell>
              <TableCell align="right">
                <ProgressBar value={row?.probability as number || 0}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
