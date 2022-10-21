// import DropdownDropdown from "../Menu/Dropdown";

import { TableCell, tableCellClasses, TableRow, Collapse, Box, Typography,Table, TableHead,TableBody, IconButton, Button } from '@mui/material'
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

    return(
        <>
            <StyledTableRow key={TableElementId}>
                <TableCell  align="center" onClick={() => setOpen(!open)}>
                <IconButton
                    aria-label="expand row"
                    size="small"
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                </TableCell>
                <TableCell  align="center" onClick={() => setOpen(!open)}>
                    {TableElementFirstName} {TableElementLastName} {TableElementName}
                </TableCell>
                <TableCell  align="center"  onClick={() => setOpen(!open)}>
                    {TableElementBirthday} {TableElementSiret}
                </TableCell>
                <TableCell  align="center"  onClick={() => setOpen(!open)}>
                    {TableElementCreatedAt}
                </TableCell>
                <TableCell  align="center"  onClick={() => setOpen(!open)}>
                    {TableElementUpdatedAt}
                </TableCell>
                <TableCell  align="center" onClick={() => setOpen(!open)}>
                    {
                        TableElementUser_Visibility === true &&
                        <CircleIcon sx={{ color: green[500], fontSize: 30 }} name = "circle"/>
                    }
                    {
                        TableElementUser_Visibility === false &&
                        <CircleIcon sx={{ color: red[500], fontSize: 30 }} name = "circle"/>
                    }
                </TableCell>
                <TableCell>
                    <Link href={`/${TableElementUser_Role}/${TableElementId}`}><Button variant="contained"> Info</Button></Link>
                </TableCell>
            </StyledTableRow>
            <StyledTableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography align="center" variant="h6" gutterBottom component="div">
                                Utilisateur
                            </Typography>
                            <Table size="small" aria-label="customized table" sx={{ maxWidth : 1000 }}  align="center" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Mail</TableCell>
                                        <TableCell align="center">City</TableCell>
                                        <TableCell align="center">ZipCode</TableCell>
                                        <TableCell align="center">Address</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={TableElementUser_Id}>
                                        <TableCell align="center">{TableElementUser_Mail}</TableCell>
                                        <TableCell align="center">{TableElementUser_City}</TableCell>
                                        <TableCell align="center">{TableElementUser_ZipCode}</TableCell>
                                        <TableCell align="center">{TableElementUser_Address}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </StyledTableRow>
        </>
    )
}