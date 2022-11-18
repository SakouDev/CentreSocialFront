import { TableHead, TableCell, TableRow, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
export default function TableHeader({props,setSearchTerm}){

  
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
    setHeaderData(props)
  }, [])
  
  return (
      <TableHead>
          <TableRow style={{backgroundColor:'#1976d2'}}>
              <TableCell align="center"  style={{width:'15%',backgroundColor:'white'}} >
                <TextField 
                  inputProps={{ style: { color: '#1976d2'}}}
                  variant='outlined' 
                  margin="none" 
                  label="Search" 
                  onChange={(element) => setSearchTerm(element.target.value)}
                />
              </TableCell>
              <TableCell align="center"> {headerData.option1} </TableCell>
              <TableCell align="center"> {headerData.option2} </TableCell>
              <TableCell align="center"> {headerData.option3} </TableCell>
              <TableCell align="center"> {headerData.option4} </TableCell>
              <TableCell align="center"> {headerData.option5} </TableCell>
              <TableCell></TableCell>
          </TableRow>
      </TableHead>
  )
}