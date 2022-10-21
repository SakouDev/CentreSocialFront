import TableHeader from "./TableHeader";
import TableData from "./TableData";
import { Table, TableContainer,Paper } from "@mui/material";
// import TableFooters from "./TableFooter";

export default function Tables(data){
    return (
        <>
            <TableContainer component={Paper} sx={{ minWidth: 700, maxWidth:1200 }} >
                <Table sx={{ minWidth: 700, maxWidth:1200 }} aria-label="collapsible table, customized table">
                    <TableHeader props = {data.headerData} />
                    <TableData props = {data} />
                    {/* <TableFooters /> */}
                </Table>
            </TableContainer>
        </>
    )
}