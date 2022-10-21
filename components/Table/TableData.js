import TableCellElement from "./TableCell";

import { TableBody } from '@mui/material'

export default function ITAccountTableBody(props)
{
    return(
        <TableBody>
            {props.props.data.map((data) => (
                <TableCellElement
                    TableElementId = {data.id}
                    TableElementName = {data.name}
                    TableElementSiret = {data.siret}
                    TableElementFirstName = {data.firstName}
                    TableElementLastName = {data.lastName}
                    TableElementBirthday = {data.birthday}
                    TableElementCreatedAt = {new Date(data.createdAt).toLocaleDateString("fr")}
                    TableElementUpdatedAt = {new Date(data.updatedAt).toLocaleDateString("fr")}
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
                    TableElementUser_CreatedAt = {new Date(data.User.createdAt).toLocaleDateString("fr")}
                    TableElementUser_UpdatedAt = {new Date(data.User.updatedAt).toLocaleDateString("fr")}
                /> 
            ))}
        </TableBody>
    )
}