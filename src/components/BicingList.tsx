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
import {MarkerType} from "@/types/globalTypes";

function createData(
  key: string,
  probability: number,
  amount: number
) {
  return { key, probability, amount};
}

export default function BicingList() {
  const context: any = useContext(AppContext)
  const createRows = () => {
    if (!!context?.markers) {
      return context.markers.map((marker: MarkerType) => createData(marker.key, marker.probability as number, marker.amount as number))
    }
    return []
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
          {createRows().map((row: MarkerType, i: number) => (
            <TableRow
              onClick={() => console.log(`clicked id: ${row.key}`)}
              key={`${row.key}-${i}`}
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 400,
                '& ul': { padding: 0 },
                '&:last-child td, &:last-child th': { border: 0 }
              }}
            >
              <TableCell component="th" scope="row">
                {`Station Number: ${row.key}`}
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
