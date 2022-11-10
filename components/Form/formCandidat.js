import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material"
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { Box } from "@mui/system"
import * as React from 'react'
import { ApiService } from "../../pages/api/axios"

export default function FormCandidat() {


    const [diplo, setDiplo] = React.useState([]);
    const [dispo, setDispo] = React.useState([]);

    const handleChangeDiplo = (event) => {
        event.target.checked?
        setDiplo(
            [...diplo,
                {
                    [event.target.name]: event.target.value
                }
            ]
        )
        :
        diplo.splice(diplo.findIndex(element => element.id == event.target.value), 1)
        //Splice un index précis de l'array après avoir récupéré cet index via la valeur de la checkbox.
    };

    const handleChangeDispo = (event) => {
        event.target.checked?
        setDispo(
            [...dispo, 
                {
                    [event.target.name]: event.target.value
                }
            ]
        )
        :
        dispo.splice(dispo.findIndex(element => element.id == event.target.value), 1)
        //Splice un index précis de l'array après avoir récupéré cet index via la valeur de la checkbox.
    };

    let diplome = [
        { key: 'id', label: 'BAFA', value: 1},
        { key: 'id', label: "BAFD", value: 2},
        { key: 'id', label: 'BPJEPS', value: 5},
        { key: 'id', label: 'Stage Pratique', value: 3},
        { key: 'id', label: 'Non Diplômé', value: 4}
    ]

    let disponibilite = [
        { key: 'id', label: 'Lundi', value: 1},
        { key: 'id', label: "Mardi", value: 2},
        { key: 'id', label: 'Mercredi', value: 3},
        { key: 'id', label: 'Jeudi', value: 4},
        { key: 'id', label: 'Vendredi', value: 5},
        { key: 'id', label: 'Samedi', value: 6},
        { key: 'id', label: 'Vacances de Fevrier', value: 7},
        { key: 'id', label: 'Vacances de Mai', value: 8},
        { key: 'id', label: 'Vacances de Juillet', value: 9},
        { key: 'id', label: "Vacances d'Août", value: 10},
        { key: 'id', label: "Vacances d'Octobre", value: 11},
        { key: 'id', label: 'Vacances de Noël', value: 12}
    ]

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
            "Candidat": {
                firstName: event.target.firstname.value,
                lastName: event.target.lastname.value,
                birthday: event.target.birthday.value,
            },
            "User": {
                mail: event.target.mail.value,
                password: event.target.password.value,
                phone: event.target.phone.value,
                address: event.target.address.value,
                zipCode: event.target.zipcode.value,
                city: event.target.city.value,
                visibility: true,
                role: "Candidat",
                image: "http://www.rien.com"
            },
            "Disponibilite": dispo,
            "Diplome": diplo
        }
        ApiService.post('candidats', data)
    }
    return (
        <>
        <Card style={{flex : 1}}>
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
                        label="FirstName"
                        type="text"
                        name="firstname"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="LastName"
                        type="text"
                        name="lastname"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Birthday"
                        type="text"
                        name="birthday"
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
                        id="outlined-required"
                        label="Phone"
                        type="text"
                        name="phone"
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
                    <FormLabel component="legend">Diplôme</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {diplome.map((data) =>{
                            // console.log(data)
                            return(
                                <FormControlLabel control={<Checkbox value={data.value} onChange={handleChangeDiplo} name={data.key}/>} label={data.label} />
                            )
                        })}
                    </FormGroup>
                </CardContent>

                <CardContent>
                    <FormLabel component="legend">Disponibilité</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {disponibilite.map((data) =>{
                            // console.log(data)
                            return(
                                <FormControlLabel control={<Checkbox value={data.value} onChange={handleChangeDispo} name={data.key}/>} label={data.label} />
                            )
                        })}
                    </FormGroup>
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