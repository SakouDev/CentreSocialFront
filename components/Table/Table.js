import TableHeader from "./TableHeader";
import TableData from "./TableData";
import { Table, TableContainer,Paper, TextField } from "@mui/material";
import TableFooters from "./TableFooter";
import { useState } from "react";
// import TableFooters from "./TableFooter";

export default function Tables(data){

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
        {/* <TextField margin="none" label="Search" onChange={(element) => setSearchTerm(element.target.value)}/> */}
            <TableContainer component={Paper} sx={{ flex : 1 }} >
                <Table sx={{ flex : 1 }} aria-label="collapsible table, customized table">
                    <TableHeader props = {data.headerData} setSearchTerm={setSearchTerm} />
                    {/* <TableData props = {data} /> OBSELETE ==> TRANSFER DE LA DATA DANS LE FOOTER POUR LA PAGINATION*/}
                    <TableFooters data={data} searchTerm={searchTerm}/>
                </Table>
            </TableContainer>
        </>
    )
}