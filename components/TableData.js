import TableCellElement from "./TableCell";

import { TableBody } from '@mui/material'

export default function ITAccountTableBody(props)
{
    console.log(props.props.data)
    return(
        <TableBody>
            {props.props.data.map((data) => (
                <TableCellElement
                    TableElementName = {data.name}
                    TableElementSiret = {data.siret}
                    TableElementFirstName = {data.firstName}
                    TableElementLastName = {data.lastName}
                    TableElementBirthday = {data.birthday}
                    TableElementCreatedAt = {data.createdAt}
                    TableElementUpdatedAt = {data.updatedAt}
                    TableElementUserId = {data.UserId}
                    TableElementUser_Id = {data.User.id}
                    TableElementUser_Mail = {data.User.mail}
                    TableElementUser_Visibility = {data.User.visibility}
                    TableElementUser_Password = {data.User.password}
                    TableElementUser_Address = {data.User.address}
                    TableElementUser_ZipCode = {data.User.zipCode}
                    TableElementUser_City = {data.User.city}
                    TableElementUser_Role = {data.User.role}
                    TableElementUser_Image = {data.User.image}
                    TableElementUser_CreatedAt = {data.User.createdAt}
                    TableElementUser_UpdatedAt = {data.User.updatedAt}
                /> 
            ))}
        </TableBody>
    )
}