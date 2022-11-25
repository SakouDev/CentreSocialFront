import { Button, Card, CardContent, Checkbox, CircularProgress, TextField } from "@mui/material"
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { Box } from "@mui/system"
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import 'dayjs/locale/fr'
import { useRouter } from "next/router"
import * as React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { ApiService } from "../../pages/api/axios"

export default function FormCandidat() {

    const router = useRouter()

    const [diplo, setDiplo] = useState([]);
    const [dispo, setDispo] = useState([]);
    const [date, setDate] = useState(dayjs());
    const [data, setData] = useState(null)
    const [checkDiplo, setCheckDiplo] = useState(null)
    const [checkDispo, setCheckDispo] = useState(null)

    useEffect(() => {
        router.query.id &&(
            ApiService.get(`candidats/${router.query.id}`)
            .then(element => {
                setData(element.data.data)
                setDiplo(element.data.data.User.Diplomes.map(diplome => {
                    return  {
                        id : `${diplome.id}`
                     }
                }))
                setDispo(element.data.data.User.Disponibilites.map(disponibilite => {
                    return  {
                        id : `${disponibilite.id}`
                     }
                }))
                setDate(dayjs(element.data.data.birthday, "DD MM YYYY").format())
            })
        )
        ApiService.get(`diplomes`).then(element => setCheckDiplo(element.data.data))
        ApiService.get(`disponibilites`).then(element => setCheckDispo(element.data.data))
    }, [])

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
        // diplo.splice(diplo.findIndex(element => element.id == event.target.value), 1) VERSION DEGEUX

        setDiplo(diplo.filter(element => element.id != event.target.value))
        //Splice un index précis de l'array après avoir récupéré cet index via la valeur de la checkbox.
    };

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
        // dispo.splice(dispo.findIndex(element => element.id == event.target.value), 1)
        setDispo(dispo.filter(element => element.id != event.target.value))
        //Splice un index précis de l'array après avoir récupéré cet index via la valeur de la checkbox.
    };

    

    function HandleSubmit(event){
        event.preventDefault()
        const data = {
            "Candidat": {
                firstName: event.target.firstname.value,
                lastName: event.target.lastname.value,
                birthday: `${new Date(date).toLocaleDateString("fr-FR")}`,
                // birthday: date
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
            .then(router.push('/?table=Candidat'))
        :
            ApiService.post('candidat', data)
            .then(router.push('/?table=Candidat'))
    }

    if(router.query.id && data==null) return <CircularProgress size={100} style={{marginTop:'20%'}} />
    
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
                        label="Prénom"
                        type="text"
                        name="firstname"
                        defaultValue={data && data.firstName}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Nom"
                        type="text"
                        name="lastname"
                        defaultValue={data && data.lastName}
                    />
                    <LocalizationProvider locale={'fr'} dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            required
                            inputFormat="DD/MM/YYYY"
                            label="Date de naissance"
                            name="birthday"
                            value={date}
                            onChange={newDate => setDate(dayjs(newDate, "DD MM YYYY").format())}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
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
                        label="Mot de passe"
                        type="text"
                        name="password"
                        placeholder=""
                    />
                    <TextField
                        id="outlined-required"
                        label="Téléphone"
                        type="text"
                        name="phone"
                        defaultValue={data && data.User.phone}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Addresse"
                        type="text"
                        name="address"
                        defaultValue={data && data.User.address}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Code Postal"
                        type="text"
                        name="zipcode"
                        defaultValue={data && data.User.zipCode}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Ville"
                        type="text"
                        name="city"
                        defaultValue={data && data.User.city}
                    />
                
                </CardContent>

                <CardContent>
                    <FormLabel component="legend">Diplôme</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {checkDiplo?.map((data, i) =>{
                            
                            return(
                                <FormControlLabel key={i} control={
                                    <Checkbox
                                        defaultChecked={diplo.find(element => element.id == data.id)?true:false}
                                        value={data.id}
                                        onClick={handleChangeDiplo} 
                                        name={data.certificate}
                                    />
                                } label={data.certificate} />
                            )
                        })}
                    </FormGroup>
                </CardContent>

                <CardContent>
                    <FormLabel component="legend">Disponibilité</FormLabel>
                    <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {checkDispo?.map((data, i) =>{

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
                        Confirmer
                    </Button>
                </CardContent>
            </Box>
        </Card>
        </>
    )
}