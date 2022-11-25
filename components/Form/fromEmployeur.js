import { Button, Card, CardContent, Checkbox, CircularProgress, TextField } from "@mui/material"
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
    const [checkDispo, setCheckDispo] = React.useState(null)

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
        ApiService.get(`disponibilites`).then(element => setCheckDispo(element.data.data))
    }, [])
    
    console.log(dispo)

    
    const handleChangeDispo = (event) => {
        event.target.checked?
        setDispo(
            [...dispo, 
                {
                    id : event.target.value
                }
            ]
        )
        :
        setDispo(dispo.filter(element => element.id != event.target.value))
        //Splice un index précis de l'array après avoir récupéré cet index via la valeur de la checkbox.
    };


    function HandleSubmit(event){
        event.preventDefault()
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
        .then(router.push('/?table=Employeur'))
        :
        ApiService.post('employeurs', data)
        .then(router.push('/?table=Employeur'))
    }

    if(router.query.id && data == null) return <CircularProgress size={100} style={{marginTop:'20%'}} />

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
                        {checkDispo?.map((data,i) =>{
                            return(
                                <FormControlLabel key={i} control={
                                    <Checkbox 
                                        defaultChecked={dispo.find(element => element.id == data.id)?true:false}
                                        value={data.id} 
                                        onChange={handleChangeDispo} 
                                        name={data.namePeriod}
                                    />
                                } label={data.namePeriod} />
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