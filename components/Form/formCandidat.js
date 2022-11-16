import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material"
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { Box } from "@mui/system"
import { useRouter } from "next/router"
import * as React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { ApiService } from "../../pages/api/axios"

export default function FormCandidat() {

    const router = useRouter()

    const [diplo, setDiplo] = useState([]);
    const [dispo, setDispo] = useState([]);
    const [data, setData] = useState(null)
  
    useEffect(() => {
        router.query.id &&(
            ApiService.get(`candidats/${router.query.id}`)
            .then(element => {
                setData(element.data.data)
                // setDiplo(element.data.data.User.Diplomes.map(diplome => {
                //     return  {
                //         id : `${diplome.id}`
                //      }
                // }))
                // setDispo(element.data.data.User.Disponibilites.map(disponibilite => {
                //     return  {
                //         id : `${disponibilite.id}`
                //      }
                // }))
            })
        )
    }, [])

    console.log(diplo,dispo)

    const handleChangeDiplo = (event) => {
        event.target.checked?
        setDiplo(
            [...diplo,
                {
                   id : event.target.value
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
                    id: event.target.value
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
        router.query.id?
        ApiService.put(`form/candidat/${router.query.id}`, data)
        :
        ApiService.post('candidats', data)
    }

    if(router.query.id && data==null) return <h1>Loading...</h1>
    
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
                        defaultValue={data && data.firstName}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="LastName"
                        type="text"
                        name="lastname"
                        defaultValue={data && data.lastName}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Birthday"
                        type="text"
                        name="birthday"
                        defaultValue={data && data.birthday}
                    />
                </CardContent>
                <CardContent>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        type="text"
                        name="mail"
                        defaultValue={data && data.User.mail}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="text"
                        name="password"
                        defaultValue={data && "*************"}
                    />
                    <TextField
                        id="outlined-required"
                        label="Phone"
                        type="text"
                        name="phone"
                        defaultValue={data && data.User.phone}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        type="text"
                        name="address"
                        defaultValue={data && data.User.address}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="ZipCode"
                        type="text"
                        name="zipcode"
                        defaultValue={data && data.User.zipCode}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        type="text"
                        name="city"
                        defaultValue={data && data.User.city}
                    />
                
                </CardContent>

                <CardContent>
                    <FormLabel component="legend">Diplôme</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {diplome.map((data, i) =>{
                            
                            return(
                                <FormControlLabel key={i} control={
                                    <Checkbox 
                                        checked={data.checked}
                                        value={data.value} 
                                        onChange={handleChangeDiplo} 
                                        name={data.label}
                                    />
                                } label={data.label} />
                            )
                        })}
                    </FormGroup>
                </CardContent>

                <CardContent>
                    <FormLabel component="legend">Disponibilité</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {disponibilite.map((data, i) =>{

                            return(
                                <FormControlLabel key={i} control={
                                    <Checkbox value={data.value} onChange={handleChangeDispo} name={data.label}/>
                                } label={data.label} />
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