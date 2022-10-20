import { TableHead, TableCell, TableRow } from '@mui/material';

export default function TableHeader(){
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell> Name </TableCell>
                <TableCell> BirthDate </TableCell>
                <TableCell> CreatedAt </TableCell>
                <TableCell> UpdatedAt </TableCell>
                {/* <TableCell>Dates</TableCell>
                <TableCell>NextSteps</TableCell>
                <TableCell>NextDates</TableCell>
                <TableCell>Compliantes</TableCell>
                <TableCell>Licenses</TableCell>
                <TableCell></TableCell> */}
            </TableRow>
        </TableHead>
    )
}