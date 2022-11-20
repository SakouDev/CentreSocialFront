// import DropdownDropdown from "../Menu/Dropdown";

import { TableCell, tableCellClasses, TableRow, Collapse, Box, Typography,Table, TableHead,TableBody, IconButton, Button, TableContainer,Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CircleIcon from '@mui/icons-material/Circle';
import { green, red } from '@mui/material/colors';
import { useState } from 'react';
import Link from 'next/link';

export default function TableCellElement(
    {
        TableElementId,
        TableElementName,
        TableElementSiret,
        TableElementFirstName,
        TableElementLastName,
        TableElementBirthday,
        TableElementCreatedAt,
        TableElementUpdatedAt,
        TableElementUserId,
        TableElementUser_Phone,
        TableElementUser_Id,
        TableElementUser_Mail,
        TableElementUser_Visibility,
        TableElementUser_Address,
        TableElementUser_ZipCode,
        TableElementUser_City,
        TableElementUser_Role,
        TableElementUser_Image,
        TableElementUser_CreatedAt,
        TableElementUser_UpdateAt
        
    })
    {
        
        const [open, setOpen] = useState(false);
 
          
        const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
        }));
        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14,
            },
          }));

    return(
        <>
            <StyledTableRow key={TableElementId}>
                <TableCell  align="center" style={{cursor:'pointer'}} onClick={() => setOpen(!open)}>
                <IconButton
                    aria-label="expand row"
                    size="small"
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                </TableCell>
                <TableCell  align="center">
                    {TableElementLastName} {TableElementFirstName} {TableElementName}
                </TableCell>
                <TableCell  align="center">
                    {TableElementBirthday} {TableElementSiret}
                </TableCell>
                <TableCell  align="center">
                    {TableElementCreatedAt}
                </TableCell>
                <TableCell  align="center">
                    {TableElementUpdatedAt}
                </TableCell>
                <TableCell  align="center">
                    {
                        TableElementUser_Visibility === true &&
                        <CircleIcon sx={{ color: green[500], fontSize: 30 }} name = "circle"/>
                    }
                    {
                        TableElementUser_Visibility === false &&
                        <CircleIcon sx={{ color: red[500], fontSize: 30 }} name = "circle"/>
                    }
                </TableCell>
                <TableCell align="center">
                    <Link href={{
                  pathname : "/",
                  query:{  
                            table : TableElementUser_Role,
                            id : TableElementId
                        },
                }}><Button variant="contained"> Info</Button></Link>
                </TableCell>
            </StyledTableRow>
            <StyledTableRow>
                <TableCell align="center" style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Typography align="center" variant="h6" gutterBottom component="div">
                                Utilisateur
                            </Typography>
                            <TableContainer sx={{m : 4}} component={Paper}>
                            <Table  aria-label="customized table"  align="center" >
                                <TableHead>
                                    <TableRow align="center">
                                        <TableCell align="center">Mail</TableCell>
                                        <TableCell align="center">City</TableCell>
                                        <TableCell align="center">ZipCode</TableCell>
                                        <TableCell align="center">Address</TableCell>
                                        {TableElementUser_Phone ? <TableCell align="center">Phone</TableCell> : ''}
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow align="center" key={TableElementUser_Id}>
                                        <StyledTableCell align="center">{TableElementUser_Mail}</StyledTableCell>
                                        <StyledTableCell align="center">{TableElementUser_City}</StyledTableCell>
                                        <StyledTableCell align="center">{TableElementUser_ZipCode}</StyledTableCell>
                                        <StyledTableCell align="center">{TableElementUser_Address}</StyledTableCell>
                                        {TableElementUser_Phone ? <StyledTableCell align="center">{TableElementUser_Phone}</StyledTableCell>: ''}
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Box>
                    </Collapse>
                </TableCell>
            </StyledTableRow>
        </>
    )
}