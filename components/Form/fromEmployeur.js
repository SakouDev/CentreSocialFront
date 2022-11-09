import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material"
import { Box } from "@mui/system"
import React from 'react'
import { ApiService } from "../../pages/api/axios"

export default function FormCandidat() {

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
            "Candidat": {
                name: event.target.name.value,
                siret: event.target.siret.value,
            },
            "User": {
                mail: event.target.mail.value,
                password: event.target.password.value,
                address: event.target.address.value,
                zipCode: event.target.zipcode.value,
                city: event.target.city.value,
                visibility: true,
                role: "Candidat",
                image: "http://www.rien.com"
            },
            "Disponibilite": [
                {
                  id: 1
                },
                {
                  id: 4
                },
                {
                  id: 7
                }
            ]
        }
        ApiService.post('employeurs', data)
    }

    return (
        <>
        <Card style={{width: "100%"}}>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={HandleSubmit}
            >
                <CardContent>
                <h1>Candidats</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        type="text"
                        name="name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="SIRET"
                        type="text"
                        name="siret"
                    />
                </CardContent>
                <CardContent>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        type="text"
                        name="mail"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="text"
                        name="password"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        type="text"
                        name="address"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="ZipCode"
                        type="text"
                        name="zipcode"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        type="text"
                        name="city"
                    />
                
                </CardContent>
                <CardContent>
                    <Button variant="contained" color="success" type="submit">
                        Success
                    </Button>
                </CardContent>
            </Box>
        </Card>
        </>
    )
}