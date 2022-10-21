import { TableHead, TableCell, TableRow,tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
export default function TableHeader(props){

  
  const [headerData, setHeaderData] = useState(
    {
      option1 : "",
      option2 : "",
      option3 : "",
      option4 : "",
      option5 : "",
      option6 : "",
      option7 : "",
    }
  )

  
  useEffect(() => {
    setHeaderData(props.props)
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
      },
    }));
  return (
      <TableHead>
          <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center"> {headerData.option1} </StyledTableCell>
              <StyledTableCell align="center"> {headerData.option2} </StyledTableCell>
              <StyledTableCell align="center"> {headerData.option3} </StyledTableCell>
              <StyledTableCell align="center"> {headerData.option4} </StyledTableCell>
              <StyledTableCell align="center"> {headerData.option5} </StyledTableCell>
              <StyledTableCell></StyledTableCell>
          </TableRow>
      </TableHead>
  )
}