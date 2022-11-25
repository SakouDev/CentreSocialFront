import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Tables from '../components/Table/Table'
import { ApiService } from './api/axios'



export default function Employeur() {


    const [employeurs, setEmployeurs] = useState(null)

    useEffect(() => {
    ApiService.get('employeurs').then((response)=>setEmployeurs(response.data.data))
    }, [])

    const HeaderEmployeur = 
      {
        option1 : "Nom d'entreprise",
        option2 : "SIRET",
        option3 : "Création",
        option4 : "Mise à jour",
        option5 : "Activation"
      }

    if(employeurs == null) return <CircularProgress size={100} style={{marginTop:'20%'}} />

  return (
    <>
      <Tables data = {employeurs} headerData = {HeaderEmployeur}/>
    </>
  )
}
