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
    fontSize: '1.3vw'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1.2vw',
    width:'auto'
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



function StageTable({stageData}) {
  function populateTableData() {
  const rows = [];
  for (const x in stageData) {
    const from = stageData[x].from;
    const to = stageData[x].to;
    const kmDistance = Math.round(stageData[x].distanceFromPriorLocationInMetres / 100)/10;
    const mileDistance = Math.round(stageData[x].distanceFromPriorLocationInMetres / 160.9)/10;
    const hours = Math.floor(stageData[x].timeFromPriorLocationInMinutes/60);
    const minutes = stageData[x].timeFromPriorLocationInMinutes -(hours*60);
    const duration = hours+"hr "+minutes+"min";
    const y = {from, to, kmDistance, mileDistance, duration};

    rows.push(y);
  } return rows;
  }
 const rows = populateTableData()

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 400, marginTop:3}} stickyHeader aria-label="customized table">
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
            <StyledTableRow key={row.from}>
              <StyledTableCell component="th" scope="row">
                {row.from}
              </StyledTableCell>
              <StyledTableCell align="center">{row.to}</StyledTableCell>
              <StyledTableCell align="center">{row.kmDistance}</StyledTableCell>
              <StyledTableCell align="center">{row.mileDistance}</StyledTableCell>
              <StyledTableCell align="center">{row.duration}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StageTable;