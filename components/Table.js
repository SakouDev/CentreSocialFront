import TableHeader from "./TableHeader";
import TableData from "./TableData";
import { Table, TableContainer,Paper } from "@mui/material";
// import TableFooters from "./TableFooter";

export default function Tables(data){
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="collapsible table">
                    <TableHeader />
                    <TableData props = {data} />
                    {/* <TableFooters /> */}
                </Table>
            </TableContainer>
        </>
    )
}