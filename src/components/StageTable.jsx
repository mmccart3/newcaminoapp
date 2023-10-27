import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#282c34',
    color: '#cee7fd',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#efeeee',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#d1d1d1',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Roncesvalles', 'Saint Jean Pied de Port', 24.2, 15, '8hr 8min'),
  createData('Saint Jean Pied de Port', 'Huntto', 5.3, 3.3, "1hr 51min"),
  createData('Huntto', 'Orisson', 2.4, 1.5, '1hr 0min'),
  createData('Orisson', "Virgen d'Orisson", 3.8, 2.4, '1hr 24min'),
  createData("Virgen d'Orisson", 'Refreshments Van', 3.4, 2.1, "1hr 6min"),
  createData('Refreshments Van', "Roland's Fountain", 1.8, 1.1, "0hr 38min"),
  createData("Roland's Fountain", 'Izandorre Shelter', 2.5, 1.5, "0hr 49min"),
  createData('Izandorre Shelter',"Col Lepeoder", 1.7, 1, "0hr 36min"),
  createData("Col Lepeoder", 'Roncesvalles', 4.1, 2.5, "1hr 16min"),
];

function StageTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell align="center">To</StyledTableCell>
            <StyledTableCell align="center">Distance in KMs</StyledTableCell>
            <StyledTableCell align="center">Distance in miles</StyledTableCell>
            <StyledTableCell align="center">Expected Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StageTable;