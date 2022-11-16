import { Button, Card, CardContent, Checkbox, TextField } from "@mui/material"
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { Box } from "@mui/system"
import Link from "next/link"
import { useRouter } from "next/router"
import * as React from 'react'
import { useEffect } from "react"
import { ApiService } from "../../pages/api/axios"

export default function FormEmployeur() {

    const router = useRouter()
    const [dispo, setDispo] = React.useState([]);
    const [data, setData] = React.useState(null)

    useEffect(() => {
        router.query.id &&(
            ApiService.get(`employeurs/${router.query.id}`)
            .then(element => {
                setData(element.data.data)
                setDispo(element.data.data.User.Disponibilites.map(disponibilite => {
                    return  {
                        id : `${disponibilite.id}`
                     }
                }))
            })
        )
    }, [])

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
        setDispo(dispo.filter(element => element.id != event.target.value))
        //Splice un index précis de l'array après avoir récupéré cet index via la valeur de la checkbox.
    };

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
        const data = {
            "Employeur": {
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
                role: "Employeur",
                image: "http://www.rien.com"
            },
            "Disponibilite": dispo
        }
        router.query.id?
        ApiService.put(`form/employeur/${router.query.id}`, data)
        :
        ApiService.post('employeurs', data)
    }

    if(router.query.id && data == null) return <h1>Loading...</h1>

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
                <h1>Employeurs</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        type="text"
                        name="name"
                        defaultValue={data && data.name}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="SIRET"
                        type="text"
                        name="siret"
                        defaultValue={data && data.siret}
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
                        placeholder="***********"
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
                    <FormLabel component="legend">Disponibilité</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {disponibilite.map((data,i) =>{
                            return(
                                <FormControlLabel key={i} control={
                                    <Checkbox 
                                        defaultChecked={dispo.find(element => element.id == data.value)?true:false}
                                        value={data.value} 
                                        onChange={handleChangeDispo} 
                                        name={data.key}
                                    />
                                } label={data.label} />
                            )
                        })}
                    </FormGroup>
                </CardContent>

                <CardContent>
                    <Button variant="contained" color="success" type="submit">
                        <Link href={router.query.id ? {
                                pathname : "/",
                                query: { 
                                    table : `Employeur`,
                                    id : router.query.id
                                },
                            }:{
                                pathname : "/",
                                query: { 
                                    table : `Employeur`
                                },
                            }
                            }>
                                Success
                        </Link>
                    </Button>
                </CardContent>
            </Box>
        </Card>
        </>
    )
}