// import DropdownDropdown from "../Menu/Dropdown";

import { TableCell, TableRow, Collapse, Box, Typography,Table, TableHead,TableBody, IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { CircleIcon } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';

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
        TableElementUser_Adress,
        TableElementUser_ZipCode,
        TableElementUser_City,
        TableElementUser_Role,
        TableElementUser_Image,
        TableElementUser_CreatedAt,
        TableElementUser_UpdateAt
        
    })
    {
        const [open, setOpen] = useState(false);
        return(
            <>
            <TableRow onClick={() => setOpen(!open)}>
                <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                </TableCell>
                <TableCell>
                    {TableElementFirstName} {TableElementLastName} {TableElementName}
                </TableCell>
                <TableCell>
                    {TableElementBirthday} {TableElementSiret}
                </TableCell>
                <TableCell>
                    {TableElementCreatedAt}
                </TableCell>
                <TableCell>
                    {TableElementUpdatedAt}
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Utilisateur : 
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Mail</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={TableElementUser_Id}>
                                    <TableCell component="th" scope="row">
                                        {TableElementUser_Mail}
                                    </TableCell>
                                    <TableCell>{TableElementUser_Mail}</TableCell>
                                    <TableCell align="right">{TableElementUser_Mail}</TableCell>
                                    <TableCell align="right">
                                        {TableElementUser_Mail}
                                    </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}