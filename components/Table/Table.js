import TableHeader from "./TableHeader";
import TableData from "./TableData";
import { Table, TableContainer,Paper } from "@mui/material";
import TableFooters from "./TableFooter";
// import TableFooters from "./TableFooter";

export default function Tables(data){
    return (
        <>
            <TableContainer component={Paper} sx={{ flex : 1 }} >
                <Table sx={{ flex : 1 }} aria-label="collapsible table, customized table">
                    <TableHeader props = {data.headerData} />
                    {/* <TableData props = {data} /> */}
                    <TableFooters props = {data} />
                </Table>
            </TableContainer>
        </>
    )
}